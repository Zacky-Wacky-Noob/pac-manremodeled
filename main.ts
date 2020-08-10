music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Forever)
game.setScore(0)
let food = game.createSprite(0, 0)
let pac_man = game.createSprite(2, 2)
let ghost = game.createSprite(4, 4)
pac_man.turn(Direction.Left, 90)
food.set(LedSpriteProperty.Brightness, 10)
ghost.set(LedSpriteProperty.Blink, 10)
while (true) {
    basic.pause(1000)
    if (ghost.get(LedSpriteProperty.X) < pac_man.get(LedSpriteProperty.X)) {
        ghost.change(LedSpriteProperty.X, 1)
    } else if (ghost.get(LedSpriteProperty.X) > pac_man.get(LedSpriteProperty.X)) {
        ghost.change(LedSpriteProperty.X, -1)
    } else if (ghost.get(LedSpriteProperty.Y) < pac_man.get(LedSpriteProperty.Y)) {
        ghost.change(LedSpriteProperty.Y, 1)
    } else if (ghost.get(LedSpriteProperty.Y) > pac_man.get(LedSpriteProperty.Y)) {
        ghost.change(LedSpriteProperty.Y, -1)
    }
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P1)) {
        pac_man.change(LedSpriteProperty.Y, -1)
    } else if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P1)) {
        pac_man.change(LedSpriteProperty.Y, 1)
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P1)) {
        pac_man.change(LedSpriteProperty.X, -1)
    } else if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P1)) {
        pac_man.change(LedSpriteProperty.X, 1)
    }
    if (pac_man.isTouching(food)) {
        game.addScore(1)
        food.set(LedSpriteProperty.X, randint(0, 4))
        food.set(LedSpriteProperty.Y, randint(0, 4))
        if (food.get(LedSpriteProperty.X) < 2 && food.get(LedSpriteProperty.Y) < 2) {
            ghost.set(LedSpriteProperty.X, 4)
            ghost.set(LedSpriteProperty.Y, 4)
        } else if (food.get(LedSpriteProperty.X) >= 2 && food.get(LedSpriteProperty.Y) < 2) {
            ghost.set(LedSpriteProperty.X, 0)
            ghost.set(LedSpriteProperty.Y, 4)
        } else if (food.get(LedSpriteProperty.X) < 2 && food.get(LedSpriteProperty.Y) >= 2) {
            ghost.set(LedSpriteProperty.X, 4)
            ghost.set(LedSpriteProperty.Y, 0)
        } else if (food.get(LedSpriteProperty.X) >= 2 && food.get(LedSpriteProperty.Y) >= 2) {
            ghost.set(LedSpriteProperty.X, 0)
            ghost.set(LedSpriteProperty.Y, 0)
        }
    }
    if (pac_man.isTouching(ghost)) {
        music.stopMelody(MelodyStopOptions.All)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        game.gameOver()
    }
}
