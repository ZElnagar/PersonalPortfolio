import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from '@/lib/utils'

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")

        if (storedTheme === "light") {
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark");
        } else {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");

            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-none bg-secondary/80 backdrop-blur-sm hover:bg-secondary"
            )}>

            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-300" />
            ) : (
                <Moon className="h-5 w-5 text-blue-900" />
            )}
        </button>
    );
};