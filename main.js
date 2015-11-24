// Kley Engine miniversion
var ctx;
var canvas;
window.onload = function () {
    canvas = new Canvasmanager("maincanvas");
        canvas.resize();
    
    ctx = canvas.getContext('2d');
    
    var game = new Game(canvas);
        game.start();
}