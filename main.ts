controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . c c c c c c c c c c c c . . . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . . . c c c c c c c 6 6 6 c c . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . . . . c c c c c 
        `)
    mySprite.vy = negspeed
    if (hasflashlight == 1) {
        flashlight.direction = 270
    }
})
// will come back later
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speed > 20) {
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        if (direction == 0) {
            boosting = 0
        } else if (direction == 1) {
            boosting = 1
            negspeed = -200
        } else if (direction == 2) {
            boosting = 1
            speed = 200
        } else if (direction == 3) {
            boosting = 1
            negspeed = -200
        } else {
            boosting = 1
            speed = 200
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    direction = 3
    mySprite.vy = negspeed
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level9`)
    bossstage = 1
    stage2 = 0
    speed = 125
    negspeed = -125
    lastnegspeed = -125
    lastspeed = 125
    multilights.toggleLighting(true)
    game.setGameOverMessage(true, "jlav;aaaeczz5652dec3sci23")
    game.over(true, effects.melt)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vy = 0
    mySprite.ay = 0
    boosting = 0
    if (hasflashlight == 1) {
        flashlight.direction = 90
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.vx = speed
    direction = 2
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . c c c c c c . . . . . . . 
        . . c 6 7 7 7 7 6 c . . . . . . 
        . c 7 7 7 7 7 7 7 7 c . . . . . 
        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 6 c 7 7 6 f . . . . 
        . . f c c c c 7 7 6 f c c c . . 
        . . c 6 2 7 7 7 f c c 7 7 7 c . 
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
        . . c 6 1 1 1 1 1 7 6 6 c c . . 
        . . . c c c c c c c c c c . . . 
        `)
    mySprite.vx = negspeed
    if (hasflashlight == 1) {
        flashlight.direction = 180
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (stage2 != 1) {
        lightranged += -3
        multilights.bandWidthOf(mySprite, lightranged)
    }
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorMixed)
    scene.cameraShake(4, 500)
    tiles.placeOnRandomTile(myEnemy, sprites.dungeon.floorDark0)
    x += 10
    if (stage2 == 1 && (axe == 0 || axe == 3)) {
        game.showLongText("to unlock the prison, you must collect the key.", DialogLayout.Bottom)
        game.showLongText("you obtained the axe!", DialogLayout.Bottom)
        axe = 1
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vx = 0
    mySprite.ax = 0
    boosting = 0
    if (hasflashlight == 1) {
        flashlight.direction = 0
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vx = 0
    mySprite.ax = 0
    boosting = 0
    if (hasflashlight == 1) {
        flashlight.direction = 180
    }
})
// test
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    effects.confetti.startScreenEffect(2000)
    tiles.setCurrentTilemap(tilemap`level5`)
    stage2 = 1
    game.showLongText("yay you beat stage 1.", DialogLayout.Bottom)
    pause(500)
    game.showLongText("now get ready for stage 2, you get no info.", DialogLayout.Bottom)
    pause(500)
    hasflashlight = 1
    multilights.bandWidthOf(mySprite, 6)
    lightranged = 6
    multilights.removeLightSource(mySprite)
    multilights.addFlashLightSource(
    mySprite,
    0,
    50,
    30
    )
    flashlight = multilights.flashlightSourceAttachedTo(mySprite)
    multilights.addLightSource(mySprite, 4)
    tiles.setCurrentTilemap(tilemap`level7`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    speed = 75
    negspeed = -75
    lastspeed = 75
    lastnegspeed = -75
    tiles.placeOnRandomTile(myEnemy, sprites.dungeon.floorDark0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . c c c c c c . . . 
        . . . . . . c 6 7 7 7 7 6 c . . 
        . . . . . c 7 7 7 7 7 7 7 7 c . 
        . . . . c 6 7 7 7 7 7 7 7 7 6 c 
        . . . . c 7 7 7 c 6 6 6 6 c 7 c 
        . . . . f 7 7 7 6 f 6 6 f 6 7 f 
        . . . . f 7 7 7 7 7 7 7 7 7 7 f 
        . . . . f 6 7 7 c 6 7 7 7 7 f . 
        . . c c c f 6 7 7 c c c c f . . 
        . c 7 7 7 c c f 7 7 7 2 6 c . . 
        c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
        c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
        . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
        . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
        . . c c 6 6 7 1 1 1 1 1 6 c . . 
        . . . c c c c c c c c c c . . . 
        `)
    mySprite.vx = speed
    if (hasflashlight == 1) {
        flashlight.direction = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (stage2 != 1) {
        confused += 1
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorMixed)
        music.setVolume(255)
        music.play(music.createSoundEffect(WaveShape.Noise, 1263, 1, 255, 0, 300, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 1557, 1538, 144, 0, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        game.splash("you have been confused!")
    }
})
function faceDirection (player2: Sprite, target: Sprite) {
    // Get the difference in x and y
    dx = target.x - player2.x
    dy = target.y - player2.y
    // Calculate the angle in radians
    angle = Math.atan2(dy, dx)
    // Convert radians to degrees
    angleDegrees = angle * 180 / Math.PI
    return angleDegrees
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vy = 0
    mySprite.ay = 0
    boosting = 0
    if (hasflashlight == 1) {
        flashlight.direction = 270
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    direction = 4
    mySprite.vy = speed
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `)
    mySprite.vy = speed
    if (hasflashlight == 1) {
        flashlight.direction = 90
    }
})
// will come back later
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    boosting = 0
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
    if (direction == 0) {
    	
    } else if (direction == 1) {
        negspeed = lastnegspeed
        speed = lastspeed
    } else if (direction == 2) {
        negspeed = lastnegspeed
        speed = lastspeed
    } else if (direction == 3) {
        negspeed = lastnegspeed
        speed = lastspeed
    } else {
        negspeed = lastnegspeed
        speed = lastspeed
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight5, function (sprite, location) {
    if (axe == 1) {
        axe = 2
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        tiles.setTileAt(tiles.getTileLocation(42, 56), sprites.dungeon.floorDark2)
        tiles.setWallAt(tiles.getTileLocation(42, 56), false)
        game.showLongText("well, the wall is down...", DialogLayout.Left)
        game.showLongText("but my axe broke.", DialogLayout.Left)
        game.showLongText("let me go into that shrine for the key.", DialogLayout.Left)
    } else if (axe == 0) {
        game.showLongText("i dont have an axe", DialogLayout.Left)
        axe = 3
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleInnerNorthWest, function (sprite, location) {
    if (axe == 2) {
        axe = 4
        hasflashlight = 2
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        tiles.setTileAt(tiles.getTileLocation(7, 1), sprites.dungeon.stairSouth)
        tiles.setWallAt(tiles.getTileLocation(7, 1), false)
        game.showLongText("a gate was opened...", DialogLayout.Bottom)
        game.showLongText("you obtained the key!", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight1)
    if (stage2 != 1) {
        lightranged += -3
        multilights.bandWidthOf(mySprite, lightranged)
    }
    x2 += 30
    y2 += 30
    info.changeLifeBy(-1)
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 0, 788, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    pause(10000)
    if (axe != 4) {
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorMixed)
        music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 121, 255, 600, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    }
    tiles.placeOnRandomTile(myEnemy, sprites.dungeon.floorDark0)
    if (stage2 == 1 && (axe == 0 || axe == 3)) {
        game.showLongText("to unlock the prison, you must collect the key.", DialogLayout.Bottom)
        game.showLongText("you obtained the axe!", DialogLayout.Bottom)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        axe = 1
    }
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.vx = negspeed
    direction = 1
})
let Projectiled2: Sprite = null
let Projectiled: Sprite = null
let y2 = 0
let x2 = 0
let angleDegrees = 0
let angle = 0
let dy = 0
let dx = 0
let confused = 0
let axe = 0
let stage2 = 0
let bossstage = 0
let boosting = 0
let direction = 0
let flashlight: lightsource.FlashlightLightSource = null
let hasflashlight = 0
let myEnemy: Sprite = null
let lastspeed = 0
let lastnegspeed = 0
let negspeed = 0
let speed = 0
let lightranged = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Player)
mySprite.scale = 0
multilights.toggleLighting(true)
multilights.addLightSource(mySprite, 15)
lightranged = 15
pause(100)
game.showLongText("ok so basically...", DialogLayout.Full)
pause(100)
game.showLongText("you should already know the rules, I hope.", DialogLayout.Full)
pause(100)
game.showLongText("I was unable to beat this myself.", DialogLayout.Full)
pause(100)
game.showLongText("i will say to you good luck, the projectiles and confusion are hard.", DialogLayout.Full)
pause(100)
game.showLongText("to help you, i should have linked all the past versions so you may have a chance of winning.", DialogLayout.Full)
pause(100)
game.showLongText("if not, email me.", DialogLayout.Full)
pause(100)
game.showLongText("i wish you the best of luck.", DialogLayout.Full)
pause(100)
game.showLongText("", DialogLayout.Full)
game.showLongText("you will not win", DialogLayout.Full)
pause(100)
mySprite.scale = 2
story.spriteSayText(mySprite, "...", 15)
mySprite.scale = 1
pause(500)
speed = 100
negspeed = -100
lastnegspeed = -100
lastspeed = 100
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level2`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
info.startCountdown(150)
info.setLife(2)
myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(myEnemy, sprites.dungeon.floorDark0)
let x = 50
pause(5000)
myEnemy.follow(mySprite, x)
story.clearAllText()
forever(function () {
    if (hasflashlight == 2 && axe == 4) {
        flashlight.direction = faceDirection(mySprite, myEnemy)
    }
})
forever(function () {
    if (confused >= 1) {
        pause(5000 / confused)
        multilights.bandWidthOf(mySprite, 0)
        pause(500 * confused)
        multilights.bandWidthOf(mySprite, lightranged)
    }
})
forever(function () {
    mySprite.fx = x2
    mySprite.fy = y2
    myEnemy.follow(mySprite, x)
    if (boosting == 1) {
        if (speed > 20) {
            lastspeed += -1
            lastnegspeed += 1
            x += 1
            pause(10)
        }
    }
})
game.onUpdateInterval(500, function () {
    if (stage2 != 1) {
        Projectiled = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnRandomTile(Projectiled, sprites.dungeon.stairWest)
        Projectiled.setVelocity(0, randint(-60, -45))
        Projectiled.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(500, function () {
    if (stage2 != 1) {
        Projectiled2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnRandomTile(Projectiled2, sprites.dungeon.stairEast)
        Projectiled2.setVelocity(randint(60, 45), 0)
        Projectiled2.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
