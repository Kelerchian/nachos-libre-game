// Kley Engine miniversion
var ctx;
window.onload = function () {
    var canvas = new Canvasmanager("maincanvas");
        canvas.resize();
    
    ctx = canvas.getContext('2d');
    
    var game = new Game(canvas);
        game.start();
}