//OBJECTS

function PlayerCharacter(){
	var allegiance = Allegiance.PLAYER;
	var stats = {}
		stats.health = 1000
	var damaged = {}
		damaged.color = null;
		damaged.countDown = 0
	var name = "PlayerCharacter";
	var position = new Position(0,0);
	var heading = 0;
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
	function attacked(num){
		stats.health-=num;
		damaged.color = "red"
		damaged.countDown = 3
	}
	function draw(){
		if(damaged.color!=null){
			ctx.fillStyle = damaged.color;
			damaged.countDown -= 1
			if(damaged.countDown == 0){
				damaged.color = null;
			}
		}
		else{
			ctx.fillStyle = color;
		}
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
		var bullet = new Bullet(position.getX(),position.getY(),allegiance);
		bullet.setSpeedHeading(Bullet.speed,heading)
		bullet.setAllegiance = allegiance;
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
		public.attacked = function(num){
			attacked(num);
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
		public.setAllegiance = function(alleg){
			allegiance = alleg
		}
		public.getAllegiance = function(){
			return allegiance;
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
	var self = null;
	var stats = {}
		stats.health = 100
	var damaged = {}
		damaged.color = null;
		damaged.countDown = 0
	var accessories = {}
		accessories.sirenCounter = 0;
	var allegiance = Allegiance.ENEMY;
	var name = "cop";
	var position = new Position(0,0);
	var heading = 0;
	var headingAccel = 0;
	var size = 25;
	var searchLightSize = 200;
	var collisionModel = new CollisionModel(CollisionType.DYNAMIC);
		collisionModel.buildCircleModel(size);
	var color = "rgb(0,0,60)";
	var physicalAttribute = new PhysicalAttribute();
	var accelerationForce = 30
	var activeCamera = null;
	var gunCountDown = 0;
	var alert = false;
	var knownEnemies = [];
	var knownThreats = [];
	var seenEnemies = [];
	var seenHostage = [];
	var seenMafia = [];
	var panic = 0;
	var nearbyCops = 0;
	var offensive = 0
	var gunheading = 0
	function attacked(num){
		stats.health-=num
		damaged.color = "red";
		damaged.countDown = 10;
	}
	function isInKnownEnemies(obj){
		for(var i = 0; i<knownEnemies.length; i++){
			if(obj == knownEnemies[i]){
				return true;
			}
		}
		return false;
	}
	function isInKnownThreats(obj){
		for(var i = 0; i<knownThreats.length; i++){
			if(obj == knownThreats[i]){
				return true;
			}
		}
		return false;
	}
	function draw(){
		if(damaged.color!=null){
			ctx.fillStyle = damaged.color
			damaged.countDown -= 1
			if(damaged.countDown == 0){
				damaged.color = null
			}
		}
		else{
			ctx.fillStyle = color;
		}
		ctx.strokeStyle = "black";
		ctx.translate(position.getX(),position.getY());
		ctx.rotate(heading);
		ctx.beginPath();
		ctx.arc(0,0,size,0,2*Math.PI,false);
		ctx.fill();
		ctx.stroke();
		if(alert){
			accessories.sirenCounter += 20;
			if(accessories.sirenCounter > 99){
				accessories.sirenCounter = -100
			}
			ctx.fillStyle = "blue"
			ctx.beginPath()
			ctx.moveTo(0,0)
			ctx.lineTo(10,0)
			ctx.lineTo(10,-30)
			ctx.lineTo(-10,-30)
			ctx.lineTo(-10,0)
			ctx.closePath();
			ctx.globalAlpha = Math.abs(accessories.sirenCounter)/100
			ctx.fill()
			
			ctx.fillStyle = "red"
			ctx.beginPath()
			ctx.moveTo(0,0)
			ctx.lineTo(10,0)
			ctx.lineTo(10,30)
			ctx.lineTo(-10,30)
			ctx.lineTo(-10,0)
			ctx.closePath();
			ctx.globalAlpha = (100-Math.abs(accessories.sirenCounter))/100
			ctx.fill()
			ctx.globalAlpha = 1
		}
		ctx.beginPath();
		ctx.arc(0,0,searchLightSize,-Math.PI/4,Math.PI/4,false)
		ctx.fillStyle="rgba(127,127,127,0.5)"
		ctx.lineTo(0,0);
		ctx.closePath()
		ctx.fill()
	}
	function see(){
		if(alert){
			searchLightSize = 400
		}
		else{
			searchLightSize = 200
		}
		var theading = heading
		if(isNaN(theading)){
			theading = 0
		}
		nearbyCops = 0;
		seenEnemies = []
		seenHostage = []
		seenMafia = []
		ctx.save()
		ctx.beginPath()
		ctx.arc(position.getX(),position.getY(),searchLightSize,theading-Math.PI/4,theading+Math.PI/4,false)
		ctx.lineTo(position.getX(),position.getY())
		ctx.closePath()
		for(var i in gameobjects.layer["PlayerChar"]){
			var obj = gameobjects.layer["PlayerChar"][i]
			if(ctx.isPointInPath(obj.getX(),obj.getY())){
				seenEnemies.push(obj);
			}
		}
		for(var i in gameobjects.layer["Mafia"]){
			var obj = gameobjects.layer["Mafia"][i]
			if(ctx.isPointInPath(obj.getX(),obj.getY())){
				seenMafia.push(obj);
			}
		}
		for(var i in gameobjects.layer["Hostage"]){
			var obj = gameobjects.layer["Hostage"][i]
			if(ctx.isPointInPath(obj.getX(),obj.getY())){
				seenHostage.push(obj);
			}
		}
		for(var i in gameobjects.layer["Cops"]){
			var obj = gameobjects.layer["Cops"][i]
			if(obj==self){
				break;
			}
			var rangeX = obj.getX() - position.getY()
			var rangeY = obj.getY() - position.getY()
			var distance = Math.sqrt(rangeX*rangeX+rangeY*rangeY);
			if(distance < 600){
				nearbyCops+=1
			}
		}
		ctx.restore();
	}
	function identify(){
		for(var i in seenEnemies){
			if(!isInKnownEnemies(seenEnemies[i])){
				knownEnemies.push(seenEnemies[i]);
			}
		}
		for(var i in seenMafia){
			if(!isInKnownThreats(seenMafia[i])){
				knownThreats.push(seenMafia[i]);
			}
		}
	}
	function reflex(){
		alert = 0
		panic = 0
		if(seenEnemies.length>0){
			alert = 1;
		}
		if(seenHostage.length>0){
			alert = 1;
		}
		if(seenMafia.length>0){
			alert = 1;
		}
		if(seenMafia.length>0){
			panic = 1;
		}
	}
	function think(){
		//SET HEADING
		var idle = false;
		var headingDest = heading;
		var headingControl = 0;
		if(seenEnemies.length>0){
			var enemy = seenEnemies[0];
			
			var x = (enemy.getX())-position.getX();
			var y = (enemy.getY())-position.getY();
			var cosA = x/(Math.sqrt(x*x+y*y));
			var tanA = y/x;
			headingDest = Math.atan(tanA);
			if(cosA>=0){
			}
			else{
				headingDest+=Math.PI
			}
			if(isNaN(headingDest)){
				headingDest = heading
			}
			headingDest = KleyMath.limitMod(headingDest,heading-Math.PI,heading+Math.PI);
			headingControl+=headingDest-heading;
			gunheading = heading + headingControl
			offensive = true
		}
		else{
			idle = true
		}
		
		//SETMOTION
		if(!idle){	
			headingAccel += headingControl/800
			if(headingControl<Math.PI/3 && headingControl>-Math.PI/6){
				headingAccel = KleyMath.limit(headingAccel,-headingControl/10,headingControl/10);
			}
		}
		if(idle){
			headingAccel = KleyMath.toZero(headingAccel,Math.PI/8000)
		}
	}
	function shoot(){
		if(gunCountDown==0){
			gunCountDown == new Date().getTime() - 200
		}
		if(gunCountDown<new Date().getTime() - 200){
			var bullet = new Bullet(position.getX(),position.getY(),allegiance);
			bullet.setSpeedHeading(Bullet.speed,gunheading+(Math.random()*Math.PI/8-Math.PI/16))
			bullet.setAllegiance = allegiance;
			gameobjects.layer["Projectiles"].push(bullet);
			gunCountDown = new Date().getTime() + Math.random()*600;
		}
	}
	function process(){
		if(stats.health<1){
			throw "isTrash"
		}
		offensive = false
		see();
		identify();
		reflex();
		if(!panic){
			think();
		}
		if(offensive){
			shoot()
		}
		heading+=headingAccel;
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
		public.attacked = function(num){
			attacked(num)
		}
		public.draw = function(){
			draw()
		}
		public.process = function(){
			process();
		}
	return public;
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
		
		obj.getPosition().translate(horz,vert);
		
	}
	function draw(){
		ctx.translate(position.getX(),position.getY())
		ctx.fillStyle="rgb(180,180,180)"
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
		
		ctx.globalCompositeOperation = "exclusion";
        ctx.fillStyle="white";
        ctx.strokeStyle="black";
        ctx.textAlign="center";
        ctx.font = "bold small-caps 50px Goudy Old Style";
		//ATAS
		ctx.translate(width/2*unit,0);
		ctx.beginPath();
        ctx.textBaseline="top";
        ctx.fillText(name,0,0);
        ctx.strokeText(name,0,0);
        
        //BAWAH
        ctx.translate(0,height*unit);
		ctx.beginPath();
        ctx.textBaseline="bottom";
        ctx.fillText(name,0,0);
        ctx.strokeText(name,0,0);
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
		cop.setSelf(cop);
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
	return buildingObject
}

function domeSpawner(towerObject,position,mapgrid){
	var edgePosition = mapgrid.getEdgePosition(position.getX(),position.getY())
	towerObject.setPosition(edgePosition.getX(),edgePosition.getY());
	towerObject.setUnit(mapgrid.getUnit())
	towerObject.setCollisionModel(new CollisionModel(CollisionType.STATIC));
	towerObject.getCollisionModel().buildCircleModel(towerObject.getRadius()*mapgrid.getUnit(),0,0)
	mapgrid.occupy(position.getX()-towerObject.getRadius(),position.getY()-towerObject.getRadius(),2*towerObject.getRadius(),2*towerObject.getRadius(),2)
	return towerObject
}

function rectangleSteppableSpawner(buildingObject,position,mapgrid){
	var edgePosition = mapgrid.getEdgePosition(position.getX(),position.getY())
	buildingObject.setPosition(edgePosition.getX(),edgePosition.getY());
	buildingObject.setUnit(mapgrid.getUnit())
	buildingObject.setCollisionModel(new CollisionModel(CollisionType.NONE));
	mapgrid.occupy(position.getX(),position.getY(),buildingObject.getWidth(),buildingObject.getHeight(),2)
	return buildingObject
}

function circleSteppableSpawner(towerObject,position,mapgrid){
	var edgePosition = mapgrid.getEdgePosition(position.getX(),position.getY())
	towerObject.setPosition(edgePosition.getX(),edgePosition.getY());
	towerObject.setUnit(mapgrid.getUnit())
	towerObject.setCollisionModel(new CollisionModel(CollisionType.NONE));
	mapgrid.occupy(position.getX()-towerObject.getRadius(),position.getY()-towerObject.getRadius(),2*towerObject.getRadius(),2*towerObject.getRadius(),2)
	return towerObject
}