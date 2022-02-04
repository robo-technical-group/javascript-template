/**
 * Controller event handlers
 */
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (__gameMode) {
        case GameMode.Attract:
            startGame()
            break

        case GameMode.Main:
            break
    }   // switch (__gameMode)
})  // controller.A.onEvent()

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (__gameMode) {
        case GameMode.Attract:
            startGame()
            break

        case GameMode.Main:
            break
    }   // switch (__gameMode)
})  // controller.B.onEvent()

controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (__gameMode) {
        case GameMode.Attract:
            startGame()
            break

        case GameMode.Main:
            break
    }   // switch (__gameMode)
})  // controller.down.onEvent()

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (__gameMode) {
        case GameMode.Attract:
            startGame()
            break

        case GameMode.Main:
            break
    }   // switch (__gameMode)
})  // controller.left.onEvent()

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (__gameMode) {
        case GameMode.Attract:
            startGame()
            break

        case GameMode.Main:
            break
    }   // switch (__gameMode)
})  // controller.right.onEvent()

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (__gameMode) {
        case GameMode.Attract:
            startGame()
            break

        case GameMode.Main:
            break
    }   // switch (__gameMode)
})  // controller.up.onEvent()
