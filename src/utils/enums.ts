export enum CellTypes { EMPTY, ZIRO, CROSS }
export enum GameStatus { GAME_ON, DRAW, ZIRO_WIN, CROSS_WIN }
export enum CellLocation {
    TOP_LEFT, TOP_CENTER, TOP_RIGHT,
    MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT,
    BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT
}
export enum GameMode { SOLO_EASY, SOLO_MEDIUM, SOLO_HARD, DUAL }
export enum Theme { WHITE, BLACK }
export enum Language { ENGLISH = 'en', UKRANIAN = 'ua' }