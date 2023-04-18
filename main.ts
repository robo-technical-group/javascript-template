/**
 * My JavaScript Game
 * Built on
 * MakeCode Arcade JavaScript Template v. 3.0.5
 * Template last update: 17 Apr 2023 ak
 */

/**
 * Constants
 */

/**
 * Global variables
 */
let g_gameMode: GameMode = GameMode.NotReady

/**
 * Game loops
 */
game.onUpdate(function () {
    switch (g_gameMode) {
        case GameMode.Attract:
            if (game.runtime() >= Attract.splashScreen.nextTime) {
                Attract.splashScreen.rotate()
            }   // if (game.runtime() >= splash.nextTime)
            break

        case GameMode.Main:
            break
    }   // switch (g_gameMode)
})  // game.onUpdate()

/**
 * Other functions
 */

function startGame(): void {
    g_gameMode = GameMode.NotReady
    Attract.splashScreen.release()
    scene.setBackgroundImage(assets.image`bg`)
    g_gameMode = GameMode.Main
}   // startGame()

/**
 * Main() a.k.a. game.onStart()
 */
Attract.start()
