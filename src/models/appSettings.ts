import { Theme } from "../utils/enums";

export interface IAppSettings {
    set Theme(theme: Theme)
    set IsSoundOn(isSoundOn: boolean)

    get Theme(): Theme
    get IsSoundOn(): boolean
}

export class AppSettings implements IAppSettings {
    private theme: Theme
    private isSoundOn: boolean

    constructor(
        theme: Theme = Theme.WHITE,
        isSoundOn: boolean = true) {
        this.theme = theme
        this.isSoundOn = isSoundOn
    }

    set Theme(theme: Theme) {
        this.theme = theme
    }

    set IsSoundOn(isSoundOn: boolean) {
        this.isSoundOn = isSoundOn
    }

    get Theme() {
        return this.theme
    }

    get IsSoundOn() {
        return this.isSoundOn
    }
}