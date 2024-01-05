import { createContext } from "react";
import { AppSettings } from "../models/appSettings";

export const AppSettingsContext = createContext(new AppSettings())