import {useState} from "react";

const useForm=(intialvalue)=>{
    const [value,setValue]=useState(intialvalue)
    return[value,()=>{
        setValue({
            ...value,
            colour:"blue"
        })
    }]
}