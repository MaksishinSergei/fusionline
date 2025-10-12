import React, {useEffect, useState} from "react";
import { ThemeContext } from "./theme.context";
import useSystemTheme from 'react-use-system-theme';

export function ThemeProvider({children}){
    const systemTheme = useSystemTheme('dark');
    const [theme, setTheme] = useState(()=>localStorage.getItem('theme') || systemTheme);
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