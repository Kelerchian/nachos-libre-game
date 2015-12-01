function Hostage(){
	var self = null;
	var stats = {}
		stats.health = 100
		stats.conflict = 0;
	var damaged = {}
		damaged.color = null;
		damaged.countDown = 0
	var accessories = {}
		accessories.sirenCounter = 0;
	var allegiance = Allegiance.ENEMY;
	var name = "hostage";
	var position = new Position(0,0);
	var size = 25;
	var followSize = size*10
	var searchLightSize = 200;
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
	var seenPlayer = []
	var panic = 0;
	var nearbyCops = 0;
	var offensive = 0
	var gunheading = 0
	var intention = {}
		intention.type = null;
		intention.path = [];
		intention.subject = null;
		intention.expire = 0;
	var isTrash = false;
	function draw(){
		ctx.strokeStyle = "black";
		ctx.fillStyle = color;
		ctx.translate(position.getX(),position.getY());
		ctx.beginPath();
		ctx.arc(0,0,size,0,2*Math.PI,false);
		ctx.fill();
		ctx.beginPath();
		ctx.arc(0,0,followSize,0,2*Math.PI,false)
		ctx.strokeStyle="rgba(127,127,127,0.2)"
		ctx.stroke()
	}
	function see(){
		seenPlayer = []
		for(var i in gameobjects.layer["PlayerChar"]){
			var obj = gameobjects.layer["PlayerChar"][i]
			var distanceX = obj.getX()-position.getX()
			var distanceY = obj.getY()-position.getY()
			var distance = Math.sqrt(distanceX*distanceX+distanceY*distanceY)
			
			if(distance<followSize){
				seenPlayer.push(obj)
			}
		}
	}
	function reflex(){
	}
	function move(){
		var stopX = true;
		var stopY = true;
		if(seenPlayer.length>0){
			follow(seenPlayer[0])
		}
		
		function follow(obj){
			
			var headingDest;
			var curDest = obj
			
			var x = curDest.getX()-position.getX()
			var y = curDest.getY()-position.getY()
			var dist = Math.sqrt(x*x+y*y)
			var cosA = x/(Math.sqrt(x*x+y*y));
			var tanA = y/x;
			headingDest = Math.atan(tanA);
			if(cosA>=0){
			}
			else{
				headingDest+=Math.PI
			}
			headingDest = KleyMath.limitMod(headingDest,0,Math.PI*2);
			var vx = Math.sin(headingDest)*3
			var vy = Math.cos(headingDest)*3
			if(isNaN(vx)){
				vx=0
			}
			if(isNaN(vy)){
				vy=0
			}
			if(dist>followSize/3){
				stopX = false
				stopY = false
				physicalAttribute.applyForceY(vx)
				physicalAttribute.applyForceX(vy)
			}
		}
		
		if(stopX){
			physicalAttribute.toZeroSpeedX();
		}
		if(stopY){
			physicalAttribute.toZeroSpeedY();
		}
	}
	function process(){
		if(isTrash){
			throw "isTrash"
		}
		see()
		reflex()
		move()
		position.translate(physicalAttribute.getSpeed().x,physicalAttribute.getSpeed().y)
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
			isTrash = true
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




function createHostage(name,x,y){
	if(x == null || y == null){
		x=0;
		y=0;
	}
	var hostage = new Hostage();
		hostage.setName(name)
		hostage.setPosition(x,y);
	return hostage;
}