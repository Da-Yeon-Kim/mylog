"use client";

import { Sun, Moon } from "lucide-react";

import { useState, useEffect } from "react";

export const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

        useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setDarkMode(!darkMode);
    };

    return (
        <button onClick={toggleDarkMode}>
            {darkMode ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6"/>}
        </button>
    );
};
