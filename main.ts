/**
 * My JavaScript Game
 * Built on
 * MakeCode Arcade JavaScript Template v. 3.0.1
 * Template last update: 04 Feb 2022 ak
 */

/**
 * Constants
 */

/**
 * Global variables
 */

/**
 * Main() a.k.a. game.onStart()
 */
startAttractMode()

/**
 * Game loops
 */
game.onUpdate(function () {
    switch (__gameMode) {
        case GameMode.Attract:
            if (game.runtime() >= __splashScreen.nextTime) {
                __splashScreen.rotate()
            }   // if (game.runtime() >= splash.nextTime)
            break

        case GameMode.Main:
            break
    }   // switch (__gameMode)
})  // game.onUpdate()

/**
 * Start game modes
 */
function startGame(): void {
    __gameMode = GameMode.NotReady
    __splashScreen.release()
    scene.setBackgroundImage(assets.image`bg`)
    __gameMode = GameMode.Main
}   // startGame()

/**
 * Other functions
 */
