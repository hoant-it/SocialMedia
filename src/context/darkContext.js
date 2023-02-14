import { createContext, useEffect, useState } from "react";

export const darkContext= createContext();

export const DarkContextProvider= ({children})=>{
    const[darkMode, setDarkMode]=useState(JSON.parse(localStorage.getItem("darkMode"))|| false)



    const toggle=()=>{
        setDarkMode(!darkMode)
    }

    useEffect(()=>{
        localStorage.setItem("darkMode",darkMode)
    },[darkMode])



    const values={
        darkMode,
        toggle,
    }

    return (
        <darkContext.Provider value={values}>
            {children}
        </darkContext.Provider>
    )
}