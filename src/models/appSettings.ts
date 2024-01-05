import { Language, Theme } from "../utils/enums";

export interface IAppSettings {
    set Language(language: Language)
    set Theme(theme: Theme)
    set IsSoundOn(isSoundOn: boolean)

    get Language(): Language
    get Theme(): Theme
    get IsSoundOn(): boolean
}

export class AppSettings implements IAppSettings {
    private language: Language
    private theme: Theme
    private isSoundOn: boolean

    constructor(language: Language = Language.ENGLISH,
        theme: Theme = Theme.WHITE,
        isSoundOn: boolean = true) {
        this.language = language
        this.theme = theme
        this.isSoundOn = isSoundOn
    }

    set Language(language: Language) {
        this.language = language
    }

    set Theme(theme: Theme) {
        this.theme = theme
    }

    set IsSoundOn(isSoundOn: boolean) {
        this.isSoundOn = isSoundOn
    }

    get Language() {
        return this.language
    }

    get Theme() {
        return this.theme
    }

    get IsSoundOn() {
        return this.isSoundOn
    }
}