/**
 * Attract mode
 */
namespace Attract {
    export const TEXT_HEADLINES: string[][] = [
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
    export const TEXT_TITLES: string[] = ['My Game', 'in JavaScript']

    /**
     * Global variables
     */
    export let splashScreen: SplashScreens = null

    export function build(): void {
        splashScreen = new SplashScreens(
            TEXT_TITLES, Color.Yellow,
            TEXT_HEADLINES, Color.Brown,
            TEXT_ACTIONS, Color.LightBlue)
    }

    export function start(): void {
        build()
        splashScreen.build()
        g_state.Mode = GameMode.Attract
    }   // start()
}
