import { PreferenceContext } from "@/components/preferences/provider";
import { useContext } from "react";

export const usePreferences = () => {
    const preferenceContext = useContext(PreferenceContext);
    if (!preferenceContext) {
        throw new Error("usePreferences must be used within a PreferenceProvider");
    }
    return preferenceContext;
}