import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "black" : prevTheme === "black" ? "white" : "light"));
    };

    const state = {
        theme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={state}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return { theme, toggleTheme };
};
