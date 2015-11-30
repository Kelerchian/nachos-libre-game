function Bullet(x,y,allegiance){
	var position = new Position(x,y);
	var sourcePosition = new Position(x,y)
	var physicalAttribute = new PhysicalAttribute();
		physicalAttribute.setWeight(10);
	var size = 3;
	var collisionModel = new CollisionModel(CollisionType.GRABBABLE);
		collisionModel.buildCircleModel(size);
	var isTrash = false;
	
	function affectDynamicCollision(obj){
		if(allegiance!=Allegiance.ENEMY){
			if(obj.getAllegiance()==Allegiance.ENEMY){
				obj.attacked(10);
			}
		}
		else{
			if(obj.getAllegiance()!=Allegiance.ENEMY){
				obj.attacked(10);
			}
		}
	}
	
	function setSpeedHeading(speed,heading){
		var vx = speed*Math.cos(heading);
		var vy = speed*Math.sin(heading);
		physicalAttribute.setSpeed(vx,vy);
	}
	function draw(){
		ctx.fillStyle = "white";
		ctx.strokeStyle = "black";
		ctx.translate(position.getX(),position.getY());
		ctx.beginPath();
		ctx.arc(0,0,size,0,2*Math.PI,false);
		ctx.fill();
		ctx.stroke();
	}
	function process(){
		position.translate(physicalAttribute.getSpeed().x,physicalAttribute.getSpeed().y)
		
		if(isTrash){
			throw "isTrash";
		}
		if(KleyMath.distanceFromPointToPoint(position,sourcePosition)>Bullet.distanceLimit){
			throw "isTrash";
		}
	}
	var public = {}
		public.getX = function(){
			return position.getX();
		}
		public.getY = function(){
			return position.getY();
		}
		public.setSpeedHeading = function(speed,heading){
			setSpeedHeading(speed,heading);			
		}
		public.getCollisionModel = function(){
			return collisionModel;
		}
		public.affectStaticCollision = function(obj){
			isTrash = true;
		}
		public.affectDynamicCollision = function(obj){
			affectDynamicCollision(obj);
			isTrash = true;
		}
		public.setAllegiance = function(alleg){
			allegiance = alleg
		}
		public.getAllegiance = function(){
			return allegiance
		}
		public.draw = function(){
			draw();
		}
		public.process = function(){
			process();
		}
	return public;
}
Bullet.distanceLimit = 400;
Bullet.speed = 30;