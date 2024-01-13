import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationUA from './ua/translation.json'
import translationEN from './en/translation.json'

const resources = {
    en: {
        translation: translationEN
    },
    ua: {
        translation: translationUA
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false
    }
})

export default i18n