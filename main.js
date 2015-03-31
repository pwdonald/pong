
var canvas = document.getElementById('gamescreen');
var engine = new PongEngine(canvas, 60);

window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
        engine.endGame();
    } else if (e.keyCode === 13 && engine.STOPPED) {
        engine.startGame();
    }
});

canvas.addEventListener('mousemove', function (e) {
    if (!engine.STOPPED) {
        return engine.mousePosition(e);
    }
});
