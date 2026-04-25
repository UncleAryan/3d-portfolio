import { useEffect, useState } from "react";

export function useTheme() {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const stored = localStorage.getItem('theme')
        return stored ? stored === 'dark' : true
    })

    useEffect(() => {
        const root = document.documentElement
        if (isDarkTheme) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [isDarkTheme])

    return { 
        isDark, 
        toggle: () => setIsDarkTheme(prev => !prev) 
    }
}

