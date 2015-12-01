var GridType = {
	EMPTY: 1,
	COLLISION: 2	
}

/** Mapgrid
 * representasi status grid dari map
 * assign apakah sebuah area map ada obstacle atau tidak
 * digunakan untuk keperluan pathfinding
 * 
 */
function MapGrid(){
	var unit = 10;										//ukuran satu cell dalam mapgrid
	var width = 10;										//width dari map
	var height = 10;									//height dari map
	var grid = [];										//array 2D berisi data grid
	var centerposition = new Position(0,0);				//menyimpan data tentang grid mana yang berada di titik (0,0) pada canvas, defaultnya adalah (0,0) -> artinya grid (0,0) berada di titik canvas (0,0)	
	var initialized = false;							//jika sudah terinisialisasi, set true, lainnya false
	
	function initgrid(){								//inisialisasi grid -> set semua grid menjadi GridType.EMPTY
		grid = new Array(width);
		for(var i = 0; i<width; i++){
			grid[i] = new Array(height);
		}
		for(var i = 0; i<width; i++){
			for(var j = 0; j<height; j++){
				grid[i][j]=GridType.EMPTY;
			}
		}
		initialized = true;
	}
	
	var public = {};
		public.getUnit = function(){
			return unit;
		}
		public.getWidth = function(){
			return width;
		}
		public.getHeight = function(){
			return height;
		}
		public.setUnit = function(newUnitSize){			//set size dari ukuran satu cell dalam mapgrid
			KleyMath.validateinteger(newUnitSize);
			unit = newUnitSize
		}
		public.setGridSize = function(w,h){				//set size dari mapgrid
			KleyMath.validateinteger(w,h);
			width = w;
			height = h;
			initialized = false;
		}
		public.setCenter = function(x,y){				//set titik tengah mapgrid
			KleyMath.validateinteger(x,y)
			centerposition.set(x,y);
		}
		public.getEdgePosition = function(x,y){
			var rx = (x-centerposition.getX())*unit;
			var ry = (y-centerposition.getY())*unit;
			return new Position(rx-unit/2,ry-unit/2);
		}
		public.getCellPosition = function(x,y){
			var rx = (x-centerposition.getX())*unit;
			var ry = (y-centerposition.getY())*unit;
			return Point(rx,ry);
		}
		public.getBiasedCellPosition = function(x,y,biasPercentage){
			var biasedPos = public.getCellPosition(x,y)
			if(typeof biasPercentage != "number"){biasPercentage = 100}
			biasedPos.translate(Math.floor(Math.random()*unit*biasPercentage/100-(unit*biasPercentage/100)/2),Math.floor(Math.random()*unit/2*biasPercentage/100-(unit*biasPercentage/100)/2))
			return biasedPos
		}
		public.occupy = function(x,y,w,h,gridtype){		//menset value dari grid-grid berbentuk persegi
			if(x+w>width || y+h>height){
				throw Error("occupy out of grid");
			}
			for(var i = x; i<x+w; i++){
				for(var j = y; j<y+h; j++){
					grid[i][j] = gridtype;
				}
			}
		}
		public.isInitialized = function(){
			return initialized;
		}
		public.initialize = function(){
			initgrid();
		}
		public.getGrid = function(){
			return grid;
		}
		public.coordBelongsToCell = function(x,y){
			x=Math.round(x/unit);
			y=Math.round(y/unit);
			return Point(x+centerposition.getX(),y+centerposition.getY());
		}
		public.getCellCenter = function(x,y,offsetMax){
			if(typeof offsetMax == "number"){offsetMax=0}
			x-=centerposition.getX();
			y-=centerposition.getY();
			x*=unit;
			y*=unit;
			x+=Math.random()*offsetMax*2-offsetMax;
			y+=Math.random()*offsetMax*2-offsetMax;
			return Point(x,y);
		}
		public.getCellStatus = function(x,y){
			return grid[x][y];
		}
		
		public.draw = function(){
			ctx.save();
			ctx.translate(-centerposition.getX()*unit,-centerposition.getY()*unit);
			for(var i = 0; i<width; i++){
				ctx.translate(i*unit,0);
				for(var j = 0; j<height; j++){
					ctx.translate(0,j*unit);
					ctx.beginPath();
					ctx.strokeStyle="rgba(0,100,100,1)";
					ctx.strokeRect(-unit/2,-unit/2,unit,unit);
					ctx.fillStyle = "rgba(255,255,255,1)"
					if(grid[i][j]==GridType.COLLISION){
						ctx.fillStyle="rgba(255,0,0,0.2)"
						ctx.fillRect(-unit/2,-unit/2,unit,unit);
					}
					ctx.fillStyle = "rgba(0,0,0,1)"
					ctx.fillText("["+i+","+j+"]",0,0);
					ctx.translate(0,-j*unit);
				}
				ctx.translate(-i*unit,0)
			}
			ctx.restore();
		}
	return public;
}