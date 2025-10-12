import React, {useEffect} from "react";
import { useTheme } from "../hooks/useTheme";
import { useMantineColorScheme } from '@mantine/core';

export function ThemeSync() {
    const { setColorScheme } = useMantineColorScheme();
    const { theme } = useTheme();
    useEffect(() => {
        if (theme === 'dark' || theme === 'light') {
        setColorScheme(theme);
        }
    }, [theme, setColorScheme]);

    return null;
}