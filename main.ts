namespace SpriteKind {
    export const Player1 = SpriteKind.create()
    export const Player2 = SpriteKind.create()
    export const prj1 = SpriteKind.create()
    export const prj2 = SpriteKind.create()
    export const box = SpriteKind.create()
    export const box1 = SpriteKind.create()
    export const box2 = SpriteKind.create()
    export const ammocount = SpriteKind.create()
    export const dead = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 
8 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 
8 8 1 1 1 1 1 1 1 1 8 8 8 8 8 8 
8 8 8 1 1 1 1 1 1 1 1 8 8 8 8 8 
8 8 8 8 1 1 1 1 1 1 1 1 8 8 8 8 
8 8 8 8 8 1 1 1 1 1 1 1 1 8 8 8 
8 8 8 8 8 8 1 1 1 1 1 1 1 1 8 8 
8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 8 
8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 
1 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 
1 1 8 8 8 8 8 8 8 8 1 1 1 1 1 1 
1 1 1 8 8 8 8 8 8 8 8 1 1 1 1 1 
1 1 1 1 8 8 8 8 8 8 8 8 1 1 1 1 
1 1 1 1 1 8 8 8 8 8 8 8 8 1 1 1 
1 1 1 1 1 1 8 8 8 8 8 8 8 8 1 1 
1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 1 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 
1 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 
1 1 8 8 8 8 8 8 8 8 1 1 1 1 1 1 
1 1 1 8 8 8 8 8 8 8 8 1 1 1 1 1 
1 1 1 1 8 8 8 8 8 8 8 8 1 1 1 1 
1 1 1 1 1 8 8 8 8 8 8 8 8 1 1 1 
1 1 1 1 1 1 8 8 8 8 8 8 8 8 1 1 
1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 1 
1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 
8 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 
8 8 1 1 1 1 1 1 1 1 8 8 8 8 8 8 
8 8 8 1 1 1 1 1 1 1 1 8 8 8 8 8 
8 8 8 8 1 1 1 1 1 1 1 1 8 8 8 8 
8 8 8 8 8 1 1 1 1 1 1 1 1 8 8 8 
8 8 8 8 8 8 1 1 1 1 1 1 1 1 8 8 
8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 8 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 
1 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 
1 1 2 2 2 2 2 2 2 2 1 1 1 1 1 1 
1 1 1 2 2 2 2 2 2 2 2 1 1 1 1 1 
1 1 1 1 2 2 2 2 2 2 2 2 1 1 1 1 
1 1 1 1 1 2 2 2 2 2 2 2 2 1 1 1 
1 1 1 1 1 1 2 2 2 2 2 2 2 2 1 1 
1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 1 
1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 
2 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 
2 2 1 1 1 1 1 1 1 1 2 2 2 2 2 2 
2 2 2 1 1 1 1 1 1 1 1 2 2 2 2 2 
2 2 2 2 1 1 1 1 1 1 1 1 2 2 2 2 
2 2 2 2 2 1 1 1 1 1 1 1 1 2 2 2 
2 2 2 2 2 2 1 1 1 1 1 1 1 1 2 2 
2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 2 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e c e e e e e e 
e e e e e e e e e e e e e e e e 
e e c e e e e e e e e e e e e e 
e e e e e e e c e e e e e e e e 
e e e e e e e e e e e e c e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e c e e e e e e e 
e e c e e e e e e e e e e e e e 
e e e e e e e e e e e e e c e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e c e e e 
e e c e e e c e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
d d d d d d d d d d d d d d d 8 
d d d d d d d d d 8 d d d d d 8 
d d d d d d d d d d d d d d d 8 
d d 8 d d d d d d d d d d d d 8 
d d d d d d d 8 d d d d d d d 8 
d d d d d d d d d d d d 8 d d 8 
d d d d d d d d d d d d d d d 8 
d d d d d d d d 8 d d d d d d 8 
d d 8 d d d d d d d d d d d d 8 
d d d d d d d d d d d d d 8 d 8 
d d d d d d d d d d d d d d d 8 
d d d d d d d d d d d d d d d 8 
d d d d d d d d d d d d 8 d d 8 
d d 8 d d d 8 d d d d d d d d 8 
d d d d d d d d d d d d d d d 8 
d d d d d d d d d d d d d d d 8 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
2 d d d d d d d d d d d d d d d 
2 d d d d d d d d 2 d d d d d d 
2 d d d d d d d d d d d d d d d 
2 d 2 d d d d d d d d d d d d d 
2 d d d d d d 2 d d d d d d d d 
2 d d d d d d d d d d d 2 d d d 
2 d d d d d d d d d d d d d d d 
2 d d d d d d d 2 d d d d d d d 
2 d 2 d d d d d d d d d d d d d 
2 d d d d d d d d d d d d 2 d d 
2 d d d d d d d d d d d d d d d 
2 d d d d d d d d d d d d d d d 
2 d d d d d d d d d d d 2 d d d 
2 d 2 d d d 2 d d d d d d d d d 
2 d d d d d d d d d d d d d d d 
2 d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
e e e e e e e e e 5 e e e e e 5 
e e e e e e e e e e e e e e e 5 
e e 5 e e e e e e e e e e e e 5 
e e e e e e e 5 e e e e e e e 5 
e e e e e e e e e e e e 5 e e 5 
e e e e e e e e e e e e e e e 5 
e e e e e e e e 5 e e e e e e 5 
e e 5 e e e e e e e e e e e e 5 
e e e e e e e e e e e e e 5 e 5 
e e e e e e e e e e e e e e e 5 
e e e e e e e e e e e e e e e 5 
e e e e e e e e e e e e 5 e e 5 
e e 5 e e e 5 e e e e e e e e 5 
e e e e e e e e e e e e e e e 5 
e e e e e e e e e e e e e e e 5 
`
    //% blockIdentity=images._tile
    export const tile9 = img`
e e e e e e e e e e e e e e e 5 
e e e e e e e e e 5 e e e e e 5 
e e e e e e e e e e e e e e e 5 
e e 5 e e e e e e e e e e e e 5 
e e e e e e e 5 e e e e e e e 5 
e e e e e e e e e e e e 5 e e 5 
e e e e e e e e e e e e e e e 5 
e e e e e e e e 5 e e e e e e 5 
e e 5 e e e e e e e e e e e e 5 
e e e e e e e e e e e e e 5 e 5 
e e e e e e e e e e e e e e e 5 
e e e e e e e e e e e e e e e 5 
e e e e e e e e e e e e 5 e e 5 
e e 5 e e e 5 e e e e e e e e 5 
e e e e e e e e e e e e e e e 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`
    //% blockIdentity=images._tile
    export const tile10 = img`
5 e e e e e e e e e e e e e e e 
5 e e e e e e e e 5 e e e e e e 
5 e e e e e e e e e e e e e e e 
5 e 5 e e e e e e e e e e e e e 
5 e e e e e e 5 e e e e e e e e 
5 e e e e e e e e e e e 5 e e e 
5 e e e e e e e e e e e e e e e 
5 e e e e e e e 5 e e e e e e e 
5 e 5 e e e e e e e e e e e e e 
5 e e e e e e e e e e e e 5 e e 
5 e e e e e e e e e e e e e e e 
5 e e e e e e e e e e e e e e e 
5 e e e e e e e e e e e 5 e e e 
5 e 5 e e e 5 e e e e e e e e e 
5 e e e e e e e e e e e e e e e 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`
    //% blockIdentity=images._tile
    export const tile11 = img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 e e e e e e e e 5 e e e e e e 
5 e e e e e e e e e e e e e e e 
5 e 5 e e e e e e e e e e e e e 
5 e e e e e e 5 e e e e e e e e 
5 e e e e e e e e e e e 5 e e e 
5 e e e e e e e e e e e e e e e 
5 e e e e e e e 5 e e e e e e e 
5 e 5 e e e e e e e e e e e e e 
5 e e e e e e e e e e e e 5 e e 
5 e e e e e e e e e e e e e e e 
5 e e e e e e e e e e e e e e e 
5 e e e e e e e e e e e 5 e e e 
5 e 5 e e e 5 e e e e e e e e e 
5 e e e e e e e e e e e e e e e 
5 e e e e e e e e e e e e e e e 
`
    //% blockIdentity=images._tile
    export const tile12 = img`
d d d d d d d d d d d d d d d 2 
d d d d d d d d d 2 d d d d d 2 
d d d d d d d d d d d d d d d 2 
d d 2 d d d d d d d d d d d d 2 
d d d d d d d 2 d d d d d d d 2 
d d d d d d d d d d d d 2 d d 2 
d d d d d d d d d d d d d d d 2 
d d d d d d d d 2 d d d d d d 2 
d d 2 d d d d d d d d d d d d 2 
d d d d d d d d d d d d d 2 d 2 
d d d d d d d d d d d d d d d 2 
d d d d d d d d d d d d d d d 2 
d d d d d d d d d d d d 2 d d 2 
d d 2 d d d 2 d d d d d d d d 2 
d d d d d d d d d d d d d d d 2 
d d d d d d d d d d d d d d d 2 
`
    //% blockIdentity=images._tile
    export const tile13 = img`
8 d d d d d d d d d d d d d d d 
8 d d d d d d d d 8 d d d d d d 
8 d d d d d d d d d d d d d d d 
8 d 8 d d d d d d d d d d d d d 
8 d d d d d d 8 d d d d d d d d 
8 d d d d d d d d d d d 8 d d d 
8 d d d d d d d d d d d d d d d 
8 d d d d d d d 8 d d d d d d d 
8 d 8 d d d d d d d d d d d d d 
8 d d d d d d d d d d d d 8 d d 
8 d d d d d d d d d d d d d d d 
8 d d d d d d d d d d d d d d d 
8 d d d d d d d d d d d 8 d d d 
8 d 8 d d d 8 d d d d d d d d d 
8 d d d d d d d d d d d d d d d 
8 d d d d d d d d d d d d d d d 
`
}
sprites.onOverlap(SpriteKind.Player2, SpriteKind.prj1, function (sprite, otherSprite) {
    for (let index = 0; index < p2bag; index++) {
        gem = sprites.create(img`
. . . . f f . . . . 
. . . f 9 9 f . . . 
. . f 9 9 9 9 f . . 
. f 9 9 9 9 1 9 f . 
f 9 9 9 9 1 1 1 9 f 
f 9 9 1 9 9 1 9 9 f 
f 9 9 9 9 9 9 9 9 f 
f 9 9 9 9 9 9 9 9 f 
f 9 9 1 9 9 9 1 9 f 
f 9 1 1 1 9 9 9 9 f 
. f 9 1 9 9 9 9 f . 
. . f 9 9 9 9 f . . 
. . . f 9 9 f . . . 
. . . . f f . . . . 
`, SpriteKind.Food)
        gem.setPosition(Math.randomRange(player2.x - 5, player2.x + 5), Math.randomRange(player2.y - 5, player2.x + 5))
    }
    p2bag = 0
    player2.startEffect(effects.fire, 2000)
    controller.player2.moveSprite(player2, 0, 0)
    player2.setKind(SpriteKind.dead)
    pause(2000)
    player2.setKind(SpriteKind.Player2)
    player2.setPosition(150, Math.randomRange(20, 110))
    controller.player2.moveSprite(player2, 75, 75)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.box2, function (sprite, otherSprite) {
    info.player2.changeScoreBy(p2bag)
    p2bag = 0
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (p1ammo > 0) {
        projectile1 = sprites.createProjectileFromSprite(img`
. 2 2 2 2 2 . 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
. 2 2 2 2 2 . 
`, player1, -150, 0)
        projectile1.setKind(SpriteKind.prj1)
        p1ammo += -1
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (p2ammo > 0) {
        projectile2 = sprites.createProjectileFromSprite(img`
. 8 8 8 8 8 . 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
. 8 8 8 8 8 . 
`, player2, -150, 0)
        projectile2.setKind(SpriteKind.prj2)
        p2ammo += -1
    }
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fountain, 200)
    p2bag += 1
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (p2ammo > 0) {
        projectile2 = sprites.createProjectileFromSprite(img`
. 8 8 8 8 8 . 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
. 8 8 8 8 8 . 
`, player2, 150, 0)
        projectile2.setKind(SpriteKind.prj2)
        p2ammo += -1
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (p1ammo > 0) {
        projectile1 = sprites.createProjectileFromSprite(img`
. 2 2 2 2 2 . 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
. 2 2 2 2 2 . 
`, player1, 150, 0)
        projectile1.setKind(SpriteKind.prj1)
        p1ammo += -1
    }
})
sprites.onOverlap(SpriteKind.Player1, SpriteKind.box1, function (sprite, otherSprite) {
    info.player1.changeScoreBy(p1Bag)
    p1Bag = 0
})
sprites.onOverlap(SpriteKind.Player1, SpriteKind.prj2, function (sprite, otherSprite) {
    for (let index = 0; index < p1Bag; index++) {
        gem = sprites.create(img`
. . . . f f . . . . 
. . . f 9 9 f . . . 
. . f 9 9 9 9 f . . 
. f 9 9 9 9 1 9 f . 
f 9 9 9 9 1 1 1 9 f 
f 9 9 1 9 9 1 9 9 f 
f 9 9 9 9 9 9 9 9 f 
f 9 9 9 9 9 9 9 9 f 
f 9 9 1 9 9 9 1 9 f 
f 9 1 1 1 9 9 9 9 f 
. f 9 1 9 9 9 9 f . 
. . f 9 9 9 9 f . . 
. . . f 9 9 f . . . 
. . . . f f . . . . 
`, SpriteKind.Food)
        gem.setPosition(Math.randomRange(player1.x - 5, player1.x + 5), Math.randomRange(player1.y - 5, player1.x + 5))
    }
    p1Bag = 0
    player1.startEffect(effects.fire, 2000)
    controller.player1.moveSprite(player1, 0, 0)
    player1.setKind(SpriteKind.dead)
    pause(2000)
    player1.setKind(SpriteKind.Player1)
    player1.setPosition(10, Math.randomRange(20, 110))
    controller.player1.moveSprite(player1, 75, 75)
})
function gameStart () {
    player1 = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player1)
    player1.setPosition(10, 60)
    player2 = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 8 8 f f f . . . . 
. . . f f f 8 8 8 8 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 8 8 8 8 8 8 e e f . . 
. . f e 8 f f f f f f 8 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 8 8 8 8 8 8 f 4 e . . 
. . 4 d f 8 8 8 8 8 8 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player2)
    player2.setPosition(150, 60)
    player1.setFlag(SpriteFlag.StayInScreen, true)
    player2.setFlag(SpriteFlag.StayInScreen, true)
    controller.moveSprite(player1, 75, 75)
    controller.player2.moveSprite(player2, 75, 75)
    tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000d04040404040404040e0d04070404040407040e0d04070407070407040e0d0404040c090404040e0d0404040b0a0404040e0d04070407070407040e0d04070404040407040e0d04040404040404040e`,
            img`
. . . . . . . . . . 
. . 2 . . . . 2 . . 
. . 2 . 2 2 . 2 . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . 2 . 2 2 . 2 . . 
. . 2 . . . . 2 . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.dungeon.floorLight0,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,sprites.dungeon.chestClosed],
            TileScale.Sixteen
        ))
    info.player2.setScore(0)
    info.player1.setScore(0)
    chest1 = sprites.create(img`
. b b b b b b b b b b b b b b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b b b b b b b d d b b b b b b b 
. b b b b b b c c b b b b b b . 
b c c c c c b c c b c c c c c b 
b c c c c c c b b c c c c c c b 
b c c c c c c c c c c c c c c b 
b c c c c c c c c c c c c c c b 
b b b b b b b b b b b b b b b b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.box1)
    chest1.setPosition(8, 16)
    chest2 = sprites.create(img`
. b b b b b b b b b b b b b b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b b b b b b b d d b b b b b b b 
. b b b b b b c c b b b b b b . 
b c c c c c b c c b c c c c c b 
b c c c c c c b b c c c c c c b 
b c c c c c c c c c c c c c c b 
b c c c c c c c c c c c c c c b 
b b b b b b b b b b b b b b b b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.box2)
    chest2.setPosition(152, 16)
    p1count1 = sprites.create(img`
. 2 2 2 2 2 . 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
. 2 2 2 2 2 . 
`, SpriteKind.ammocount)
    p1count2 = sprites.create(img`
. 2 2 2 2 2 . 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
. 2 2 2 2 2 . 
`, SpriteKind.ammocount)
    p1count3 = sprites.create(img`
. 2 2 2 2 2 . 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
. 2 2 2 2 2 . 
`, SpriteKind.ammocount)
    p1count1.setPosition(5, 115)
    p1count2.setPosition(15, 115)
    p1count3.setPosition(25, 115)
    p2count1 = sprites.create(img`
. 8 8 8 8 8 . 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
. 8 8 8 8 8 . 
`, SpriteKind.ammocount)
    p2count2 = sprites.create(img`
. 8 8 8 8 8 . 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
. 8 8 8 8 8 . 
`, SpriteKind.ammocount)
    p2count3 = sprites.create(img`
. 8 8 8 8 8 . 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
. 8 8 8 8 8 . 
`, SpriteKind.ammocount)
    p2count1.setPosition(155, 115)
    p2count2.setPosition(145, 115)
    p2count3.setPosition(135, 115)
}
sprites.onOverlap(SpriteKind.Player1, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fountain, 200)
    p1Bag += 1
})
let p2count3: Sprite = null
let p2count2: Sprite = null
let p2count1: Sprite = null
let p1count3: Sprite = null
let p1count2: Sprite = null
let p1count1: Sprite = null
let chest2: Sprite = null
let chest1: Sprite = null
let p1Bag = 0
let projectile2: Sprite = null
let p2ammo = 0
let player1: Sprite = null
let projectile1: Sprite = null
let p1ammo = 0
let player2: Sprite = null
let gem: Sprite = null
let p2bag = 0
scene.setBackgroundImage(img`
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 c c c c c c c c c c c c c 
c c c c c c c c c c c c c 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 c c c c c c c c c c c c 
c c c c c c c c c c c c 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 c c c c c c c c c c c 
c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 c c c c c c c c c c 
c c c c c c c c c c 9 9 9 9 9 9 9 1 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 1 9 9 9 9 9 9 9 c c c c c c c c c 
c c c c c c c c c c 9 9 9 9 9 9 1 1 1 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 1 1 1 9 9 1 9 9 9 c c c c c c c c c 
c c c c c c c c c c 9 9 1 9 9 9 9 1 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 1 9 9 9 9 9 9 9 c c c c c c c c c 
c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c 
c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c 
c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 1 9 1 9 c c c c c c c c c 
c c c c c c c c c c 9 9 9 1 9 9 1 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 1 9 9 c c c c c c c c c 
c c c c c c c c c c 9 9 1 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 1 9 9 9 9 1 9 9 c c c c c c c c c 
c c c c c c c c c c 9 1 9 1 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 9 9 c c c c c c c c c 
c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 9 9 c c c c c c c c c c 
c c c c c c c c c c c c 9 9 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 9 9 c c c c c c c c c c c 
c c c c c c c c c c c c c 9 9 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 9 9 c c c c c c c c c c c c 
c c c c c c c c c c c c c c 9 9 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 9 9 c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c 9 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 9 c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c c c c 7 7 7 7 c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c c c c 7 7 7 7 c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 c c c c c 7 7 7 7 c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c c c c 7 7 7 7 c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 c c c c c 7 7 7 7 c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 c c c c c 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 c c c c c 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 c c c c c 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c 7 7 7 7 7 7 7 c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c 6 6 6 6 6 6 6 6 6 6 6 c c c c c 7 7 7 7 c c c c c c c c c c 7 7 7 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c 7 7 7 7 7 7 7 c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c 7 7 7 7 c c c c c c c c c c 7 7 7 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c 7 7 7 7 7 7 7 c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c 7 7 7 7 c c c c c c c c c c 7 7 7 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c 7 7 7 7 7 7 7 c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c 7 7 7 7 c c c c c c c c c c 7 7 7 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c c c c c 7 7 7 c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c 7 7 7 7 c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c c c c c 7 7 7 c c c c c 6 6 6 6 6 6 c c c c c c c c c c c c c c c c c c 6 6 6 6 6 6 c c c c c 7 7 7 7 c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c c c c c 7 7 7 c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c 7 7 7 7 c c c c c c c c c c c c c 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
`)
game.showLongText("Fill your chest with 5 gems. The first person with a full chest wins!", DialogLayout.Bottom)
game.showLongText("Be careful. If you get shot you will drop all the gems you are holding! Press A to start!", DialogLayout.Bottom)
gameStart()
game.onUpdateInterval(10000, function () {
    gem = sprites.create(img`
. . . . f f . . . . 
. . . f 9 9 f . . . 
. . f 9 9 9 9 f . . 
. f 9 9 9 9 1 9 f . 
f 9 9 9 9 1 1 1 9 f 
f 9 9 1 9 9 1 9 9 f 
f 9 9 9 9 9 9 9 9 f 
f 9 9 9 9 9 9 9 9 f 
f 9 9 1 9 9 9 1 9 f 
f 9 1 1 1 9 9 9 9 f 
. f 9 1 9 9 9 9 f . 
. . f 9 9 9 9 f . . 
. . . f 9 9 f . . . 
. . . . f f . . . . 
`, SpriteKind.Food)
    gem.setPosition(Math.randomRange(65, 95), Math.randomRange(45, 75))
})
forever(function () {
    if (info.player2.score() >= 5) {
        game.showLongText("Player 2 Wins! Press A to play again!", DialogLayout.Bottom)
        if (controller.A.isPressed()) {
            game.reset()
        }
    }
    if (info.player1.score() >= 5) {
        game.showLongText("Player 1 Wins! Press A to play again!", DialogLayout.Bottom)
        if (controller.A.isPressed()) {
            game.reset()
        }
    }
    if (p1ammo == 0) {
        p1count1.setImage(img`
. b b b b b . 
b b b b b b b 
b b b b b b b 
b b b b b b b 
b b b b b b b 
b b b b b b b 
. b b b b b . 
`)
    } else if (p1ammo == 1) {
        p1count2.setImage(img`
. b b b b b . 
b b b b b b b 
b b b b b b b 
b b b b b b b 
b b b b b b b 
b b b b b b b 
. b b b b b . 
`)
    } else if (p1ammo == 2) {
        p1count3.setImage(img`
. b b b b b . 
b b b b b b b 
b b b b b b b 
b b b b b b b 
b b b b b b b 
b b b b b b b 
. b b b b b . 
`)
    } else if (p1ammo == 3) {
        p1count1.setImage(img`
. 2 2 2 2 2 . 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
. 2 2 2 2 2 . 
`)
        p1count2.setImage(img`
. 2 2 2 2 2 . 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
. 2 2 2 2 2 . 
`)
        p1count3.setImage(img`
. 2 2 2 2 2 . 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
. 2 2 2 2 2 . 
`)
    }
    if (p2ammo == 0) {
        p2count1.setImage(img`
. b b b b b . 
b b b b b b b 
b b b b b b b 
b b b b b b b 
b b b b b b b 
b b b b b b b 
. b b b b b . 
`)
    } else if (p2ammo == 1) {
        p2count2.setImage(img`
. b b b b b . 
b b b b b b b 
b b b b b b b 
b b b b b b b 
b b b b b b b 
b b b b b b b 
. b b b b b . 
`)
    } else if (p2ammo == 2) {
        p2count3.setImage(img`
. b b b b b . 
b b b b b b b 
b b b b b b b 
b b b b b b b 
b b b b b b b 
b b b b b b b 
. b b b b b . 
`)
    } else if (p2ammo == 3) {
        p2count1.setImage(img`
. 8 8 8 8 8 . 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
. 8 8 8 8 8 . 
`)
        p2count2.setImage(img`
. 8 8 8 8 8 . 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
. 8 8 8 8 8 . 
`)
        p2count3.setImage(img`
. 8 8 8 8 8 . 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
8 8 8 8 8 8 8 
. 8 8 8 8 8 . 
`)
    }
})
forever(function () {
    player1.say(convertToText(p1Bag))
    player2.say(convertToText(p2bag))
})
game.onUpdateInterval(3000, function () {
    p2ammo = 3
    p1ammo = 3
})
