var Allegiance = {
	PLAYER : 1,
	ENEMY : 2,
	FRIENDLY :3,
	HOSTAGE : 4
}

function Position(x,y){
	var public = {};
		public.getX = function(){
			return x;
		}
		public.getY = function(){
			return y;
		}
		public.set = function(nx,ny){
			x=nx;
			y=ny;
		}
		public.translate = function(tx,ty){
			x+=tx;
			y+=ty;
		}
	return public;
}

function PhysicalAttribute(){
	var weight = 50;
	var speed = {}
		speed.x = 0;
		speed.y = 0;
		speed.max = 5;
		speed.hasLimit = true;
		speed.deccel = 30;
	function limitSpeed(){
		speed.x = KleyMath.limit(speed.x, -speed.max, speed.max);
		speed.y = KleyMath.limit(speed.y, -speed.max, speed.max);
	}
	var public = {}
		public.getWeight = function(){
			return weight;
		}
		public.getSpeed = function(){
			return speed;
		}
		public.setWeight = function(nWeight){
			weight = nWeight;
		}
		public.setSpeed = function(x,y){
			speed.x = x;
			speed.y = y;
		}
		public.applyForce = function(x,y){
			speed.x+=x/weight;
			speed.y+=y/weight;
			if(speed.hasLimit){
				limitSpeed();
			}
		}
		public.applyForceX = function(x){
			speed.x+=x/weight;
			if(speed.hasLimit){
				limitSpeed();
			}
		}
		public.applyForceY = function(y){
			speed.y+=y/weight;
			if(speed.hasLimit){
				limitSpeed();
			}
		}
		public.addSpeed = function(x,y){
			speed.x+=x
			speed.y+=y
			if(speed.hasLimit){
				limitSpeed();
			}
		}
		public.addSpeedX = function(x){
			speed.x+=x;
			if(speed.hasLimit){
				limitSpeed();
			}
		}
		public.addSpeedY = function(y){
			speed.y+=y;
			if(speed.hasLimit){
				limitSpeed();
			}
		}
		public.toZeroSpeedY = function(){
			speed.y = KleyMath.toZero(speed.y,speed.deccel/weight)
		}
		public.toZeroSpeedX = function(){
			speed.x = KleyMath.toZero(speed.x,speed.deccel/weight)
		}
		public.setLimitEnabled = function(boolVal){
			if(typeof boolVal != "boolean"){boolVal = true}
			speed.hasLimit = boolVal;
		}
	return public;
}