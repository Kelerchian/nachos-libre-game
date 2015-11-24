//OBJECTS
function PlayerCharacter(){
	var name = "playercharacter";
	var position = new Position(0,0);
	var heading = 10;
	var size = 25;
	var collisionModel = new CollisionModel(CollisionType.DYNAMIC);
		collisionModel.buildCircleModel(size);
	var color = "deepskyblue";
	var keyboardReader = null;
	var physicalAttribute = new PhysicalAttribute();
	var accelerationForce = 30
	var input = null;
	var activeCamera = null;
	var guntrigger = false;
	function draw(){
		ctx.fillStyle = color;
		ctx.strokeStyle = "black";
		ctx.translate(position.getX(),position.getY());
		ctx.rotate(heading);
		ctx.beginPath();
		ctx.arc(0,0,size,0,2*Math.PI,false);
		ctx.fill();
		ctx.stroke();
		ctx.translate(size*1.1,0);
		ctx.beginPath();
		ctx.moveTo(0,-size/3)
		ctx.lineTo(0,size/3)
		ctx.lineTo(size/3,0);
		ctx.closePath()
		ctx.fill()
		ctx.stroke();
	}
	function shoot(){
		var bullet = new Bullet(position.getX(),position.getY());
		bullet.setSpeedHeading(Bullet.speed,heading)
		gameobjects.layer["Projectiles"].push(bullet);
	}
	function followMouse(){
		var mouse = input.getMouse();
		var x = (mouse.X+activeCamera.getX())-position.getX();
		var y = (mouse.Y+activeCamera.getY())-position.getY();
		var cosA = x/(Math.sqrt(x*x+y*y));
		var tanA = y/x;
		heading = Math.atan(tanA);
		if(cosA>=0){
		}
		else{
			heading+=Math.PI
		}
		if(!mouse.isDown){
			guntrigger = false;
		}
		if(mouse.isDown){
			if(guntrigger == false){
				guntrigger = true;
				shoot();
			}
		}
		if(isNaN(heading)){
			heading = 0
		}
	}
	function process(){
		if(keyboardReader!=null){
			keyboardReader.read();
		}
		if(input!=null){
			followMouse();
		}
		position.translate(physicalAttribute.getSpeed().x,physicalAttribute.getSpeed().y)
	}
	var public = {};
		public.getX = function(){
			return position.getX();
		}
		public.getY = function(){
			return position.getY();
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
		public.setPosition = function(x,y){
			position.set(x,y);
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
			KleyMath.limit(rad,-1,1)
			heading = rad;
		}
		public.setInput = function(inputObject,newActiveCamera){
			input = inputObject;
			activeCamera = newActiveCamera;
		}
		public.draw = function(){
			draw()
		}
		public.process = function(){
			process();
		}
	return public;
}

function Cop(){
	var name = "cop";
	var position = new Position(0,0);
	var heading = 0;
	var size = 25;
	var color = "white";
	var intention=[];
	var keyboardReader = null;
	var physics;
	
	function draw(){
		ctx.fillStyle = "blue";
		ctx.translate(position.getX(),position.getY());
		ctx.rotate(heading*Math.PI);
		ctx.arc(0,0,size,0,2*Math.PI,false);
	}
	var public = {};
		public.setName = function(newName){
			name = newName
		}
		public.setPosition = function(x,y){
			position.set(x,y);
		}
		public.slideLeft = function(){
			
		}
		public.slideRight = function(){
			
		}
		public.slideUp = function(){
			
		}
		public.slideDown = function(){
			
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
			KleyMath.limit(rad,-1,1)
			heading = rad;
		}
		public.draw = function(){
			draw()
		}
		public.process = function(){
			process();
		}
	return public
}

function BangunanTes(){
	var name = "BangunanTes"
	var position = new Position(0,0);
	var width = 5;
	var height = 5;
	var collisionModel;
	var unit = 100;
	
	
	function affectDynamicCollision(obj){
		var kanan = false,
			kiri = false,
			atas = false,
			bawah = false;
		var horz = 0,
			vert = 0;
		if(obj.getX()<position.getX()){
			kiri = true;
		}
		if(obj.getX()>position.getX()+width*unit){
			kanan = true;
		}
		if(obj.getY()<position.getY()){
			atas = true;
		}
		if(obj.getY()>position.getY()+height*unit){
			bawah = true;
		}
		
		if(kiri){
			horz = -1
		}
		else if(kanan){
			horz = 1
		}
		if(atas){
			vert = -1
		}
		else if(bawah){
			vert = 1
		}
		
		obj.setPosition(obj.getX()+horz,obj.getY()+vert);
		
	}
	function draw(){
		ctx.translate(position.getX(),position.getY())
		ctx.fillStyle="rgb(180,180,180)"
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
	}
	var public = {};
		public.getWidth = function(){
			return width;
		}
		public.getHeight = function(){
			return height;
		}
		public.getX = function(){
			return position.getX()
		}
		public.getY = function(){
			return position.getY()
		}
		public.setUnit = function(newUnit){
			unit = newUnit
		}
		public.setName = function(newName){
			name = newName
		}
		public.setPosition = function(x,y){
			position = new Position(x,y);
		}	
		public.setCollisionModel = function(Collisionmodel){
			collisionModel = Collisionmodel;
		}
		public.getCollisionModel = function(){
			return collisionModel;
		}
		public.affectDynamicCollision = function(obj){
			affectDynamicCollision(obj)
		}
		public.draw = function(){
			draw();
		}
		public.process = function(){
			
		}
	return public;
}

function BangunanBar(){
	var name = "BangunanBar"
	var position = new Position(0,0);
	var width = 4;
	var height = 1;
	var collisionModel;
	var unit = 100;
	
	function affectDynamicCollision(obj){
		var kanan = false,
			kiri = false,
			atas = false,
			bawah = false;
		var horz = 0,
			vert = 0;
		if(obj.getX()<position.getX()){
			kiri = true;
		}
		if(obj.getX()>position.getX()+width*unit){
			kanan = true;
		}
		if(obj.getY()<position.getY()){
			atas = true;
		}
		if(obj.getY()>position.getY()+height*unit){
			bawah = true;
		}
		
		if(kiri){
			horz = -1
		}
		else if(kanan){
			horz = 1
		}
		if(atas){
			vert = -1
		}
		else if(bawah){
			vert = 1
		}
		
		obj.setPosition(obj.getX()+horz,obj.getY()+vert);
		
	}
	
	function draw(){
		ctx.translate(position.getX(),position.getY())
		ctx.fillStyle="rgb(180,180,180)"
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
		ctx.fillStyle="red"
		ctx.beginPath();
		ctx.rect(unit/8,unit/8,width*unit-unit/8*2,height*unit-unit/8*2);
		ctx.fill();
	}
	var public = {};
		public.getWidth = function(){
			return width;
		}
		public.getHeight = function(){
			return height;
		}
		public.setUnit = function(newUnit){
			unit = newUnit
		}
		public.setName = function(newName){
			name = newName
		}
		public.getX = function(){
			return position.getX()
		}
		public.getY = function(){
			return position.getY()
		}
		public.setPosition = function(x,y){
			position = new Position(x,y);
		}
		public.setCollisionModel = function(Collisionmodel){
			collisionModel = Collisionmodel;
		}
		public.getCollisionModel = function(){
			return collisionModel;
		}
		public.draw = function(){
			draw();
		}
		public.affectDynamicCollision = function(obj){
			affectDynamicCollision(obj)
		}
		public.process = function(){
			
		}
	return public;
}

function Bullet(x,y){
	var position = new Position(x,y);
	var sourcePosition = new Position(x,y)
	var physicalAttribute = new PhysicalAttribute();
		physicalAttribute.setWeight(10);
	var size = 3;
	var collisionModel = new CollisionModel(CollisionType.GRABBABLE);
		collisionModel.buildCircleModel(size);
	
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

//OBJECT COMMANDS
function createPlayerCharacter(name,x,y,heading,input){
	if(x == null || y == null){
		x=0;
		y=0;
	}
	if(heading==null){
		heading=0;
	}
	var playerCharacter = new PlayerCharacter();
		playerCharacter.setName(name)
		playerCharacter.setPosition(x,y);
		playerCharacter.setHeading(heading)
		playerCharacter.enableKeyboardReader(input.getKeyboard())
	
	
	var playerKeyReader = playerCharacter.getKeyboardReader();
		playerKeyReader.bindKeyCode(87,function(){
				playerCharacter.slideUp();
			})
		playerKeyReader.bindKeyCode(83,function(){
				playerCharacter.slideDown();
			})
		playerKeyReader.bindKeyCode(65,function(){
				playerCharacter.slideLeft();
			})
		playerKeyReader.bindKeyCode(68,function(){
				playerCharacter.slideRight();
			})
	
	var stopconditions
		stopconditions = []
	var up = getKeyCodeCondition(87, false);
	var down = getKeyCodeCondition(83, false);
		stopconditions.push(up)
		stopconditions.push(down)
		playerKeyReader.addCondition(stopconditions,function(){
			playerCharacter.stopY();
		})
	
		stopconditions = []
	var left = getKeyCodeCondition(65, false);
	var	right = getKeyCodeCondition(68, false)
		stopconditions.push(left)
		stopconditions.push(right)
		playerKeyReader.addCondition(stopconditions,function(){			
			playerCharacter.stopX();
		})
	
		
			
	return playerCharacter;
}


function createCop(name,x,y,heading){
	if(x == null || y == null){
		x=0;
		y=0;
	}
	if(heading==null){
		heading=0;
	}
	var cop = new Cop();
		cop.setName(name)
		cop.setPosition(x,y);
		cop.setHeading(0)
	return cop;
}

function buildingSpawner(buildingObject,position,mapgrid){
	var edgePosition = mapgrid.getEdgePosition(position.getX(),position.getY())
	buildingObject.setPosition(edgePosition.getX(),edgePosition.getY());
	buildingObject.setUnit(mapgrid.getUnit())
	buildingObject.setCollisionModel(new CollisionModel(CollisionType.STATIC));
	buildingObject.getCollisionModel().buildSquareModel(
		buildingObject.getWidth()*mapgrid.getUnit(),
		buildingObject.getHeight()*mapgrid.getUnit(),
		0,
		0)
	mapgrid.occupy(position.getX(),position.getY(),buildingObject.getWidth(),buildingObject.getHeight(),2)
	console.log(position.getY())
	return buildingObject
}