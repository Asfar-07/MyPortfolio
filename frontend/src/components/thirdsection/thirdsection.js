import React from "react";
import "../thirdsection/thirdsection.css";
import vscode from "./free-visual-studio-code-3d-icon-download-in-png-blend-fbx-gltf-file-formats--microsoft-logo-python-java-c-coding-lang-pack-logos-icons-7578027.webp";
import figma from "./figmaimg.webp";
import mongodb from "./free-mongo-db-3d-icon-download-in-png-blend-fbx-gltf-file-formats--mongodb-database-document-oriented-nosql-coding-lang-pack-logos-icons-7577996.webp";
import javaimage from "./javaimg.webp";
import htmlimg from "./htmlimg.webp";
import reacticon from "./free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.webp";
import socialicon from "./business-network-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--people-connection-networking-startup-elements-pack-illustrations-3659246.webp";
import wifi_icon from "./pngtree-wifi-wireless-internet-3d-icon-hd-image-png-image_6325173.png";
import codeicon from "./code-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--html-logo-coding-development-business-marketing-pack-illustrations-3930374.webp";
import wwwicon from "./internet-web-click-3d-icon-download-in-png-blend-fbx-gltf-file-formats--www-worldwide-domain-network-pack-communication-icons-5023509.webp";
import applicationicon from "./application.webp";
import { useTheme } from "../../ThemeContext";
export default function Thirdsection() {
  const { listcolor } = useTheme();
  let Secondrycolor=listcolor.secondrycolor
  return (
    <div className="Thirdsection" style={{ color: "white"}}>
      <div className="fakebody" style={{backgroundColor:Secondrycolor}}></div>
      <main>
        <header>
        <h1 className="Mainhadingskill">My Portfolio of Creative Web<br></br> Development Projects</h1>
        <p className="subhadingskill">Showcasing innovative projects built with cutting-edge technologies, blending<br></br> creativity with functionality and performance.</p>
        </header>
        <div className="Mydatas">
          <section className="Toolinfo">
            <div>
              <img src={vscode} alt="vscodeicon" loading="lazy"/>
              <img src={figma} alt="figmaicon" loading="lazy"/>
              <img src={mongodb} alt="mongodbicon" loading="lazy"/>
              <img src={javaimage} alt="javaicon" loading="lazy"/>
              <img src={htmlimg} alt="htmlicon" loading="lazy"/>
              <img src={reacticon} alt="reacticon" loading="lazy"/>
            </div>
            <h2>tool</h2>
            <p>My skillset is rooted in web development</p>
            <a href="/About">see more</a>
          </section>

          <samp></samp>

          <section className="Experience">
            <div>
              <img src={socialicon} alt="socialicon" loading="lazy"/>
              <img src={wifi_icon} alt="wifi-icon" loading="lazy"/>
            </div>
            <h2>experience</h2>
            <p> I've worked on many web projects</p>
            <a href="/About#AboutExperience">see more</a>
          </section>

          <samp style={{ backgroundColor: "rgba(0, 229, 255, 1)" }}></samp>

          <section className="work">
            <div>
              <img src={codeicon} alt="codeicon" loading="lazy"/>
              <img src={wwwicon} alt="wwwicon" loading="lazy"/>
              <img src={applicationicon} alt="applicationicon" loading="lazy"/>
            </div>
            <h2>my art</h2>
            <p>I maked some web projects and application</p>
            <a href="/About">see more</a>
          </section>
        </div>
      </main>
    </div>
  );
}
