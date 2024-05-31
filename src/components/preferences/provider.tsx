import { useState, createContext } from "react";

type PreferenceContextType = {
    preferences: {
        theme: string;
        language: string;
    }
    toggleDarkMode: () => void;
};
export const PreferenceContext = createContext<PreferenceContextType | undefined>(undefined);

export const PreferenceProvider = (props: { children: React.ReactNode }) => {
    const [preferences, setPreferences] = useState({
        theme: "light",
        language: "en",
    });

    const toggleDarkMode = () => {
        setPreferences({
            ...preferences,
            theme: preferences.theme === "light" ? "dark" : "light",
        });
    }

    return <PreferenceContext.Provider value={{ preferences, toggleDarkMode }}>{props.children}</PreferenceContext.Provider>;
}