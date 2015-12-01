function Mafia(){
	var self = null;
	var stats = {}
		stats.health = 100
		stats.targetChangeCounter = 0
	var damaged = {}
		damaged.color = null;
		damaged.countDown = 0
	var accessories = {}
		accessories.sirenCounter = 0;
	var allegiance = Allegiance.FRIENDLY;
	var name = "mafia";
	var position = new Position(0,0);
	var size = 25;
	var followSize = size*5
	var searchLightSize = 600;
	var collisionModel = new CollisionModel(CollisionType.DYNAMIC);
		collisionModel.buildCircleModel(size);
	var color = "rgb(90,130,60)";
	var physicalAttribute = new PhysicalAttribute();
		physicalAttribute.getSpeed().max = 3
		physicalAttribute.getSpeed().deccel = 2
	var accelerationForce = 10
	var activeCamera = null;
	var gunCountDown = 0;
	var alert = false;
	var seenCops = []
	var panic = 0;
	var offensive = false
	var gunheading = -Math.PI/2
	var isTrash = false;
	var currentTarget = null;
	function draw(){
		ctx.strokeStyle = "black";
		ctx.fillStyle = color;
		ctx.translate(position.getX(),position.getY());
		ctx.beginPath();
		ctx.arc(0,0,size,0,2*Math.PI,false);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(0,0,searchLightSize,gunheading-Math.PI/4,gunheading+Math.PI/4,false)
		ctx.lineTo(0,0)
		ctx.fillStyle="rgba(127,127,127,0.2)"
		ctx.fill()
	}
	function see(){
		seenCops = []
		for(var i in gameobjects.layer["Cops"]){
			var obj = gameobjects.layer["Cops"][i]
			var distanceX = obj.getX()-position.getX()
			var distanceY = obj.getY()-position.getY()
			var distance = Math.sqrt(distanceX*distanceX+distanceY*distanceY)
			
			if(distance<searchLightSize){
				seenCops.push(obj)
			}
		}
		for(var i in gameobjects.layer["Hostage"]){
			var obj = gameobjects.layer["Hostage"][i]
			var distanceX = obj.getX()-position.getX()
			var distanceY = obj.getY()-position.getY()
			var distance = Math.sqrt(distanceX*distanceX+distanceY*distanceY)
			
			if(distance<searchLightSize/2){
				obj.save()
			}
		}
	}
	function target(){
		if(seenCops.length>0){
			if(currentTarget == null || stats.targetChangeCounter< new Date().getTime()){
				var randomint = Math.floor(Math.random()*seenCops.length)
				stats.targetChangeCounter = new Date().getTime()*1000
				currentTarget = seenCops[randomint]
			}
		}
		try{
			if(currentTarget!=null){
				if(currentTarget.isTrash()){
					throw 1
				}
				var distanceX,distanceY,distance
				distanceX = currentTarget.getX()-position.getX()
				distanceY = currentTarget.getY()-position.getY()
				distance = Math.sqrt(distanceX*distanceX+distanceY*distanceY)
				var cosA = distanceX/distance
				var tanA = distanceY/distanceX
				var headingDest = Math.atan(tanA);
				if(cosA>=0){
				}
				else{
					headingDest+=Math.PI
				}
				
				if(isNaN(headingDest)){
					headingDest = Math.random()*Math.PI*2;
				}
				headingDest = KleyMath.limitMod(headingDest,-Math.PI,Math.PI);
				gunheading = headingDest
				
			}
		}catch(e){
			currentTarget = null
		}
	}
	function shoot(){
		if(gunCountDown==0){
			gunCountDown == new Date().getTime() - 200
		}
		if(gunCountDown<new Date().getTime()){
			var bullet = new Bullet(position.getX(),position.getY(),allegiance,Point(position.getX(),position.getY()));
				bullet.setSpeedHeading(Bullet.speed,gunheading+(Math.random()*Math.PI/3-Math.PI/6))
			bullet.setAllegiance = allegiance;
			gameobjects.layer["Projectiles"].push(bullet);
			gunCountDown = new Date().getTime() + 300 + Math.random();
		}
	}
	function process(){
		
		if(isTrash){
			throw "isTrash"
		}
		see()
		target();
		if(currentTarget!=null){
			shoot()
		}
	}
	var public = {};
		public.getX = function(){
			return position.getX();
		}
		public.getY = function(){
			return position.getY();
		}
		public.getPosition=function(){
			return position;
		}
		public.getPhysicalAttribute = function(){
			return physicalAttribute
		}
		public.getCollisionModel = function(){
			return collisionModel;
		}
		public.setName = function(newName){
			name = newName
		}
		public.getName = function(){
			return name;
		}
		public.setPosition = function(x,y){
			position.set(x,y);
		}
		public.save = function(){
			
		}
		public.slideLeft = function(){
			physicalAttribute.applyForceX(-accelerationForce)
		}
		public.slideRight = function(){
			physicalAttribute.applyForceX(accelerationForce)
		}
		public.slideUp = function(){
			physicalAttribute.applyForceY(-accelerationForce)
		}
		public.slideDown = function(){
			physicalAttribute.applyForceY(accelerationForce)
		}
		public.stopX = function(){
			physicalAttribute.toZeroSpeedX();
		}
		public.stopY = function(){
			physicalAttribute.toZeroSpeedY();
		}
		public.enableKeyboardReader = function(inputObject){
			keyboardReader = new KeyboardReader(inputObject);
		}
		public.getKeyboardReader = function(inputObject){
			return keyboardReader;
		}
		public.translatePosition = function(distX,distY){
			position.translate(x,y);
		}
		public.setHeading = function(rad){
		}
		public.setActiveCamera = function(nActiveCamera){
			activeCamera = nActiveCamera;
		}
		public.setAllegiance = function(alleg){
			allegiance = alleg
		}
		public.getAllegiance = function(){
			return allegiance;
		}
		public.setSelf = function(a){
			self = a
		}
		public.attacked = function(num,bulpos){
		}
		public.draw = function(){
			draw()
		}
		public.process = function(){
			process();
		}
	return public;
}




function createMafia(name,x,y){
	if(x == null || y == null){
		x=0;
		y=0;
	}
	var mafia = new Mafia();
		mafia.setName(name)
		mafia.setPosition(x,y);
	return mafia;
}