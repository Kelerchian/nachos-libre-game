function Camera(){
	var x = 0;
	var y = 0;
	var boundObject = null;
	var positionUpdater = null;
	var interval = null;
	
	var public = {};
		public.setX = function(newX){
			x = newX;
		}
		public.setY = function(newY){
			y = newY;
		}
		public.setPosition = function(newX,newY){
			x=newX;
			y=newY;
		}
		public.getX = function(){
			return x;
		}
		public.getY = function(){
			return y;
		}
		public.bindToObject = function(objectToBeBound){
			boundObject = objectToBeBound;
			console.log(boundObject)
			positionUpdater = function(){
				interval = requestAnimationFrame(positionUpdater);
				public.setX(objectToBeBound.getX());
				public.setY(objectToBeBound.getY());
			}
			positionUpdater();
		}
		public.unbind = function(){
			boundObject = null
			cancelAnimationFrame(interval);
			interval = null;
			positionUpdater = null;
		}
		
	return public;
}