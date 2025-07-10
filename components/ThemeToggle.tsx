"use client"
import useDarkMode from '@/hooks/useDarkMode';
import { Moon, SunMoon } from 'lucide-react';

const ThemeToggle = () => {
    const [theme, setTheme] = useDarkMode();

    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <button
            onClick={handleToggle}
            className="p-2 text-white bg-blue-500 rounded"
        >
            {theme === 'light' ? <SunMoon /> : <Moon />}
        </button>
    );
};

export default ThemeToggle;
