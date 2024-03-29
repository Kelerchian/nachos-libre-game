// JavaScript source code
var gameobjects;
                                         //graphical scale -> semacam zoom

/** GAME
 * game
 * ??
 * 
 */
function Game(canvasid) {
    
    /** CANVAS
     * canvas: Canvasmanager Initialization -> lihat canvasmanager.js
     * 
     */
    
    var canvas = canvasid;                                  //object canvasmanager
        canvas.changeRatio(4,3)                             //ganti ratio
    
    /** CAMERA
     * undocumented
     */
    
    var activeCamera = new Camera();
    
    /** INPUT
     * undocumented
     */
    
    var input = new Input(canvas,activeCamera);
    
    /** GAMEOBJECTS
     * Gameobjects Initialization  
     * Struktur data dan configuration object-object dalam game
     * 
     */
        gameobjects = [];
        gameobjects.layer = [];                             //layer->struktur data objek dan sekaligus menentukan objek mana yang akan digambar terlebih dahulu
        gameobjects.addTopLayer = function (layername) {    //menambah layer di posisi paling atas
            if (layername in gameobjects.layer) {
                jerr(e.message, Error.ERROR);
            }
            else{
                gameobjects.layer[layername] = new Array();
            }
        }
        gameobjects.addBottomLayer = function (layername) { //menambah layer di posisi paling bawah
            if (layername in gameobjects.layer) {
                jerr(e.message, Error.ERROR);
            }
            else{
                gameobjects.layer.unshift(layername);
                gameobjects.layer[layername] = [];
            }
        }
        gameobjects.clearLayer = function (layername) {     //menghapus objek-objek yang terdapat dalam suatu layer
            try {
                gameobjects.layer[layername] = [];
            } catch (e) {
                jerr(e.message, Error.ERROR);
            }
        }
        gameobjects.searchObjectByNameInLayer = function(name,layername){
            for(var i in gameobjects.layer[layername]){
                if(gameobjects.layer[layername][i].getName() == name){
                    return gameobjects.layer[layername][i];
                }
            }
        }
        gameobjects.gFilter = [];
        gameobjects.addTopGFilter = function(gFiltername){
            if(gFiltername in gameobjects.gFilter){
            }
            else{
                gameobjects.gFilter[gFiltername] = new Array();
            }
        }
        gameobjects.addBottomGFilter = function(gFiltername){
            if (gFiltername in gameobjects.gFilter) {
            }
            else{
                gameobjects.gFilter.unshift(gFiltername);
                gameobjects.gFilter[gFiltername] = [];
            }
        }
        gameobjects.clearGFilter = function (layername) {     //menghapus objek-objek yang terdapat dalam suatu layer
            try {
                gameobjects.gFilter[layername] = [];
            } catch (e) {
            }
        }
        gameobjects.mapgrid = new MapGrid();                            //mapgrid -> lihat mapgrid.js
        gameobjects.mapgrid.setUnit(100)                                 //menset unit panjang dan lebar tiap grid
        gameobjects.mapgrid.setGridSize(77,77);                         //menset ukuran mapgrid
        gameobjects.mapgrid.setCenter(15,15);                           //menset grid mana yang menjadi titik tengah
        gameobjects.mapgrid.initialize();                               //menginisialisasi grid -> lihat mapgrid.js
        
            
    //RUN FUNCTIONS
    
    /** RUNGRAPHIC
     * function rungraphic draw semua object yang ada di gameobjects
     * 
     */
    var gfxInterval;
    var dataInterval;
    function rungraphic() {
        //draw objects
        gfxInterval = requestAnimationFrame(rungraphic);                          //setinterval
        canvas.resize();                                            //refresh size canvas
        ctx.save();
        ctx.translate(canvas.getWidth()/2,canvas.getHeight()/2);    //biar nggambarnya ditengah
        ctx.clearRect(                                              //clear canvas
            -canvas.getWidth()/2,
            -canvas.getHeight()/2,
            canvas.getWidth(),
            canvas.getHeight()
            );  
        ctx.scale(Game.gamescale,Game.gamescale);              //scaling gamescale
        ctx.translate(-activeCamera.getX(),-activeCamera.getY())   
        
        
        if(gameobjects.mapgrid.isToBeDrawn == true){                //DEBUG: draw mapgrid
            gameobjects.mapgrid.draw()
        }
        
        for (var i in gameobjects.layer) {                          //draw objects pada gameobjects
            for (var j in gameobjects.layer[i]) {
                var draw = true;
                if (typeof gameobjects.layer[i][j].getRadius == 'function') {
                    if(gameobjects.layer[i][j].getX()+gameobjects.layer[i][j].getRadius() > activeCamera.getX()-canvas.getWidth()/2*Game.gamescale &&
                    gameobjects.layer[i][j].getX()-gameobjects.layer[i][j].getRadius() < activeCamera.getX()+canvas.getWidth()/2*Game.gamescale && 
                    gameobjects.layer[i][j].getY()+gameobjects.layer[i][j].getRadius() > activeCamera.getX()-canvas.getHeight()/2*Game.gamescale &&
                    gameobjects.layer[i][j].getY()-gameobjects.layer[i][j].getRadius() < activeCamera.getX()+canvas.getHeight()/2*Game.gamescale
                    ){
                        draw = true;
                    }                
                }
                else if(typeof gameobjects.layer[i][j].getWidth == 'function'){
                    if(gameobjects.layer[i][j].getX()+gameobjects.layer[i][j].getWidth() > activeCamera.getX()-canvas.getWidth()/2*Game.gamescale &&
                    gameobjects.layer[i][j].getX()-gameobjects.layer[i][j].getHeight() < activeCamera.getX()+canvas.getWidth()/2*Game.gamescale && 
                    gameobjects.layer[i][j].getY()+gameobjects.layer[i][j].getWidth() > activeCamera.getX()-canvas.getHeight()/2*Game.gamescale &&
                    gameobjects.layer[i][j].getY()-gameobjects.layer[i][j].getHeight() < activeCamera.getX()+canvas.getHeight()/2*Game.gamescale
                    ){
                        draw = true;
                    }  
                }
                if(draw){
                    ctx.save();
                    try {
                        gameobjects.layer[i][j].draw();
                    }
                    catch (e) {
                        jerr(e.message, Error.ERROR);
                    }
                    ctx.restore();
                }
            }
        }
        
        ctx.translate(activeCamera.getX(),activeCamera.getY())  
        ctx.scale(1/Game.gamescale,1/Game.gamescale);
        for(var i in gameobjects.gFilter){
            for(var j in gameobjects.gFilter[i]){
                ctx.save();
                try{
                    gameobjects.gFilter[i][j].draw();
                }
                catch(e){
                    console.warn(e)
                }
                ctx.restore();
            }
        }
        ctx.restore();
        gamedata.processPostGraphic();
    }
    
    var gamedata = new Gamedata(gameobjects,input, activeCamera);
    
    
    /** RUNDATA
     * function rundata melakukan kalkulasi terhadap object2 yang ada di dalam gameobjects
     * dan berfungsi juga sebagai trash collector
     * 
     */
    function rundata() {
        dataInterval = requestAnimationFrame(rundata);                          //semacam setinterval -> cari di internet
        function calculatePhysics(){
            for (var i in gameobjects.layer){
                for (var j in gameobjects.layer[i]){
                    for (var x in gameobjects.layer){
                        for(var y in gameobjects.layer[x]){
                            Physics.collide(gameobjects.layer[i][j],gameobjects.layer[x][y])
                        }
                    }
                }
            }
        }
        
        for (var i in gameobjects.layer) {                          //calculate semua objects
            for (var j in gameobjects.layer[i]) {
                try {
                    gameobjects.layer[i][j].process();              
                }
                catch (e) {
                    switch(e){                                      //jika menemukan objects yang melempar "isTrash", mark sebagai "isTrash"
                        case "isTrash":
                            gameobjects.layer[i][j]="isTrash";
                            break;
                        default:
                            jerr(e.stack, Error.ERROR);
                            break;
                    }
                }
            }
        }
        
        for (var i in gameobjects.layer) {                          //mengcollect trash
            gameobjects.layer[i] = gameobjects.layer[i].filter(
                function(element){
                    return element !== "isTrash"
                })
        }
        calculatePhysics();
        gamedata.processData();
    }
    
    //public functions dari class game
    Game.stop = function(){
        cancelAnimationFrame(dataInterval);
        cancelAnimationFrame(gfxInterval);   
    }
    var public = {};
        public.start = function(){
        rundata();
        rungraphic();
    }
    return public;
}
Game.gamescale=1;

