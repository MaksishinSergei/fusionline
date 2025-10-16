import React, {useEffect, useState} from "react";
import { ThemeContext } from "./theme.context";

export function ThemeProvider({children}){
    const [theme, setTheme] = useState(()=>localStorage.getItem('theme') || "light");
    useEffect(()=>{
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme])
    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}