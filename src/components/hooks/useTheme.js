import { useContext } from "react";
import { ThemeContext } from "../Theme/theme.context";

export function useTheme(){
    return useContext(ThemeContext);
}