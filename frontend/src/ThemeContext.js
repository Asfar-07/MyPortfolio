import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [themecontainer,setThemecontainer]=useState(()=>{
   return localStorage.getItem("container")||"#e71b51"
  })
  const [fontcolor,setFontcolor]=useState(()=>{
   return localStorage.getItem("fontcolor")||"white"
})
  const [secondrycolor,setSecondrycolor]=useState(()=>{
   return localStorage.getItem("secondrycolor")||"#0f0e0f"
  })
  const [theme, setTheme] = useState(()=>{
   return localStorage.getItem("theme")|| "dark"
  });
  const listcolor={
    frontcontainer:themecontainer,
    settheme:theme,
    fontcolor:fontcolor,
    secondrycolor:secondrycolor,
  }
  const toggleTheme =async () => {
    let NewThem;
    let ContainerColor;
    let FontColor;
    let SecondryColor;

    if (theme === "light") {
      NewThem ="dark"
      ContainerColor="#e71b51"
      FontColor="white"
      SecondryColor="#0f0e0f"
    } else {
      NewThem ="light"
      ContainerColor="#1976d2"
      FontColor="black"
      SecondryColor="#2d3748"
    }
    setThemecontainer(ContainerColor)
    setFontcolor(FontColor)
    setSecondrycolor(SecondryColor)
    // console.log(NewThem)
    setTheme(NewThem) 
    listcolor.frontcontainer=ContainerColor
    listcolor.settheme=NewThem
    listcolor.fontcolor=FontColor
    listcolor.secondrycolor=SecondryColor
    localStorage.setItem("theme",NewThem);
    localStorage.setItem("container",ContainerColor);
    localStorage.setItem("secondrycolor",SecondryColor);
    localStorage.setItem("fontcolor",FontColor);

  };

  return (
    <ThemeContext.Provider value={{ listcolor, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);