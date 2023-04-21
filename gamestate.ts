/**
 * Current game state
 */
/**
 * Interface that can be translated to/from JSON.
 */
interface IGameState {
    gameMode: GameMode
}

class GameState {
    private static readonly KEY_PREFIX: string = 'jst_'
    private static readonly SAVE_TEXT: string = 'SAVE GAME'

    private gameMode: GameMode

    constructor(numPlayers: number = 0) {
        this.gameMode = GameMode.NotReady
    }

    /**
     * Public properties
     */
    public get Mode(): GameMode {
        return this.gameMode
    }

    public set Mode(value: GameMode) {
        this.gameMode = value
    }

    public get State(): IGameState {
        return {
            gameMode: this.gameMode,
        }
    }

    /**
     * Public methods
     */
    public static addSystemMenuItem(handler: () => void): void {
        if (infoScreens.addMenuOption != undefined) {
            infoScreens.addMenuOption(GameState.SAVE_TEXT, assets.image`saveIcon`, handler)
        }
    }

    public loadFromSetting(key: string): boolean {
        if (key.indexOf(GameState.KEY_PREFIX) == 0 && settings.exists(key)) {
            return this.loadState(settings.readJSON(key))
        } else {
            return false
        }
    }

    /**
     * Return false if game state cannot be loaded.
     */
    public loadState(state: any): boolean {
        if (typeof state != 'object') {
            return false
        }
        if (typeof state.gameMode == 'number') {
            this.gameMode = state.gameMode
        } else {
            this.gameMode = GameMode.NotReady
        }
        return true
    }

    public save(filename: string): void {
        if (filename.indexOf(GameState.KEY_PREFIX) == -1) {
            filename = GameState.KEY_PREFIX + filename
        }
        settings.writeJSON(filename, this.State)
    }

    public static savesExist(): boolean {
        return settings.list(GameState.KEY_PREFIX).length > 0
    }
}

namespace GameStateTests {
    export function start() {
        // Try to initialize game state with an incomplete object.
        let s: any = {
            players: [
                {
                    name: 'Robo',
                    controllerId: 1,
                    avatar: 9,
                }, {
                    name: 'Xander',
                    controllerId: 2,
                    avatar: 6,
                }, {
                    name: 'Lex',
                    controllerId: 3,
                    avatar: 2,
                }, {
                    name: 'Solar',
                    controllerId: 4,
                    avatar: 1,
                },
            ],
        }
        g_state.loadState(s)
        startGame()
    }
}
