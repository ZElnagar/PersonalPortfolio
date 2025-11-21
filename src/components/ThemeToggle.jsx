import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from '@/lib/utils'

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
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
                "fixed right-16 md:right-5 z-50 p-2 rounded-full transition-all duration-300 cursor-pointer group",
                "focus:outline-none bg-secondary/80 backdrop-blur-sm hover:bg-secondary",
                "flex items-center justify-center",
                isScrolled ? "top-2.5" : "top-4"
            )}>

            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300 group-hover:text-primary transition-colors duration-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900 group-hover:text-primary transition-colors duration-300" />
            )}
        </button>
    );
};