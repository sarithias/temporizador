input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        tempo += -1
        basic.showNumber(tempo)
        basic.pause(100)
    }
    music.play(music.stringPlayable("F G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
})
let tempo = 0
basic.showNumber(10)
tempo = 10
