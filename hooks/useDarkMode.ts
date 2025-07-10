"use client"
import { useState, useEffect } from 'react';

function useDarkMode() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const root = window.document.documentElement;
        const storedTheme = window.localStorage.getItem('theme') as 'light' | 'dark';

        // Set the initial theme based on local storage or default to light
        const initialTheme = storedTheme || 'light';
        setTheme(initialTheme);
        root.classList.add(initialTheme);

        // Toggle theme function
        const toggleTheme = (newTheme: 'light' | 'dark') => {
            root.classList.remove(theme);
            root.classList.add(newTheme);
            window.localStorage.setItem('theme', newTheme);
            setTheme(newTheme);
        };

        // Cleanup function to remove the theme class on unmount
        return () => {
            root.classList.remove(initialTheme);
        };
    }, []);

    return [theme, setTheme] as const;
}

export default useDarkMode;
