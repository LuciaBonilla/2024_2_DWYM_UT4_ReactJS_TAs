import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("es");

    function changeLanguage(language) {
        setLanguage(language);
        document.querySelector("html").lang = language;
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguageContext() {
    return useContext(LanguageContext);
}