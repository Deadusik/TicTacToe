import { createContext } from "react";
import { AppSettings } from "../models/appSettings";

export interface AppSettingsContextType {
    settings: AppSettings
    setSettings: React.Dispatch<React.SetStateAction<AppSettings>>
}

export const AppSettingsContext = createContext<AppSettingsContextType | null>(null)