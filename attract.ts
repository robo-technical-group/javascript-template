/**
 * Code for attract mode
 */

const TEXT_HEADLINES: string[][] = [
    ['My Game is', '(C) 20XX'],
    ['Programmed in', 'MakeCode Arcade'],
    ['by', 'Me']
]
const TEXT_ACTIONS: string[][] = [[
    'Left/Right = Action',
    'Up = Action',
    'Down = Action',
    'A = Action',
    'B = Action'
]]
const TEXT_TITLES: string[] = ['My Game', 'in JavaScript']

/**
 * Global variables
 */
let __gameMode: GameMode = GameMode.NotReady
let __splashScreen: SplashScreens = null

function buildSplashScreen(): void {
    __splashScreen = new SplashScreens(
        TEXT_TITLES, Color.Yellow,
        TEXT_HEADLINES, Color.Brown,
        TEXT_ACTIONS, Color.LightBlue)
}

function startAttractMode(): void {
    buildSplashScreen()
    __splashScreen.build()
    __gameMode = GameMode.Attract
}   // startAttractMode()
