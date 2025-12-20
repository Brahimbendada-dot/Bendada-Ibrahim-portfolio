import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    useEffect(() => {
        // Enforce dark mode
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }, []);

    return (
        <ThemeContext.Provider value={{ theme: 'dark' }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
