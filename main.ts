/**
 * My JavaScript Game
 * Built on
 * MakeCode Arcade JavaScript Template v. 4.1.1
 * Template last update: 23 Apr 2023 ak
 */

/**
 * Constants
 */
const HARDWARE: boolean = control.ramSize() < (1024 * 1024)

/**
 * Global variables
 */
let g_state: GameState = new GameState()

/**
 * Game loops
 */
game.onUpdate(function () {
    switch (g_state.Mode) {
        case GameMode.Attract:
            if (game.runtime() >= Attract.splashScreen.nextTime) {
                Attract.splashScreen.rotate()
            }   // if (game.runtime() >= splash.nextTime)
            break

        case GameMode.Main:
            break
    }   // switch (g_state.Mode)
})  // game.onUpdate()

/**
 * Other functions
 */
function startGame(): void {
    g_state.Mode = GameMode.NotReady
    Attract.splashScreen.release()
    scene.setBackgroundImage(assets.image`bg`)
    g_state.Mode = GameMode.Main
}   // startGame()

/**
 * Main() a.k.a. game.onStart()
 */
game.stats = true
Attract.start()
