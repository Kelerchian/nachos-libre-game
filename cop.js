function Cop(){
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
		physicalAttribute.getSpeed().max = 3
	var accelerationForce = 30
	var activeCamera = null;
	var gunCountDown = 0;
	var alert = false;
	var knownEnemies = [];
	var knownThreats = [];
	var seenEnemies = [];
	var seenHostage = [];
	var seenMafia = [];
	var seenCheck = [];
	var panic = 0;
	var nearbyCops = 0;
	var offensive = 0
	var gunheading = 0
	var isTrash = false;
	var intention = {}
		intention.type = null;
		intention.path = [];
		intention.subject = null;
		intention.expire = 0;
	function attacked(num,bul){
		stats.health-=num
		stats.conflict=new Date().getTime()+4000
		damaged.color = "red";
		damaged.countDown = 10;
		
		if(!alert){
			//asdf
			var idle = false;
			var headingDest = heading;
			var headingControl = 0;
			if(seenEnemies.length==0 && seenMafia.length==0){
				var enemy = bul
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
				
				seenCheck.push(headingDest)
			}			
		}
	}
	function isInKnownEnemies(obj){
		for(var i = 0; i<knownEnemies.length; i++){
			if(obj == knownEnemies[i].entity){
				return knownEnemies[i];
			}
		}
		return false;
	}
	function isInKnownThreats(obj){
		for(var i = 0; i<knownThreats.length; i++){
			if(obj == knownThreats[i].entity){
				return knownThreats[i];
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
		if(seenCheck.length>0){
			var tempseencheck = KleyMath.limitMod(seenCheck[0],heading-Math.PI,heading+Math.PI)
			if(tempseencheck<heading+Math.PI/8 && tempseencheck>heading-Math.PI/8){
				seenCheck.splice(0,1)
			}
		}
		if(alert){
			searchLightSize = 600
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
				/*
				var col = false;
				for(var ii in gameobjects.layer["Buildings"]){
					if(Physics.collideLine(new LineFunc(Point(position.getX(),position.getY()),Point(obj.getX(),obj.getY())),gameobjects.layer["Buildings"][ii])!=false){	
						col = true;
					}
				}
				if(col==false){
					seenEnemies.push(obj);	
				}*/
				seenEnemies.push(obj)
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
		
		
		ctx.save()
		ctx.beginPath()
		ctx.arc(position.getX(),position.getY(),searchLightSize,theading-Math.PI/8,theading+Math.PI/8,false)
		ctx.lineTo(position.getX(),position.getY())
		ctx.closePath()
		for(var i in knownEnemies){
			if(ctx.isPointInPath(knownEnemies[i].lastPosition.getX(),knownEnemies[i].lastPosition.getY())){
				knownEnemies[i]="isTrash"
			}
		}
		knownEnemies = knownEnemies.filter(function(element){
			return element!=="isTrash"
		})
		ctx.restore()
	}
	function identify(){
		for(var i in seenEnemies){
			var knownEnemy = isInKnownEnemies(seenEnemies[i]);
			if(!knownEnemy){
				var knowledge = {}
					knowledge.entity = seenEnemies[i]
					knowledge.lastPosition = Point(seenEnemies[i].getX(),seenEnemies[i].getY())
				knownEnemies.push(knowledge);
			}
			else{
				knownEnemy.lastPosition = Point(seenEnemies[i].getX(),seenEnemies[i].getY())
			}
		}
	}
	function reflex(){
		alert = 0
		panic = 0
		if(seenEnemies.length>0){
			seenCheck = []
			alert = 1;
			if(stats.health<80){
				panic = 1;
				panicReflex();
			}
		}
		if(seenHostage.length>0){
			alert = 1;
		}
		if(seenMafia.length>0){
			seenCheck = []
			alert = 1;
			panic = 1;
			panicReflex();
		}
		function panicReflex(){
			var headingDest = heading,
				headingControl = 0
			var findSafePlace = false;
			if(intention.type != IntentionType.FLEE){
				intention.type = IntentionType.FLEE;
				if(seenMafia.length>0){
					var a = Math.floor(Math.random()*seenMafia.length);
					intention.subject = seenMafia[a]
				}
				else if(seenEnemies.length>0){
					var a = Math.floor(Math.random()*seenEnemies.length);
					intention.subject = seenEnemies[a]
				}
				intention.expire = new Date().getTime()+3000+Math.floor(Math.random()*6000)
				findSafePlace = true;
			}
			else{
				if(intention.expire<new Date().getTime() || intention.path.length == 0){
					intention.type = IntentionType.FLEE;
					if(seenMafia.length>0){
						var a = Math.floor(Math.random()*seenMafia.length);
						intention.subject = seenMafia[a]
					}
					else if(seenEnemies.length>0){
						var a = Math.floor(Math.random()*seenEnemies.length);
						intention.subject = seenEnemies[a]
					}
					intention.expire = new Date().getTime()+3000+Math.floor(Math.random()*6000)
					findSafePlace = true;
				}
			}
			var enemy = intention.subject
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
			
			headingAccel += headingControl/800
			if(headingControl<Math.PI/3 && headingControl>-Math.PI/6){
				headingAccel = KleyMath.limit(headingAccel,-headingControl/10,headingControl/10);
			}
			//LANJUTSINI
			
			if(findSafePlace){
				console.log(1)
				var newPath = seekRandomPath(position,gunheading,15,true,0)
				if(newPath.length!=0){
					intention.path = newPath
				}
				//console.log(intention.path)
			}
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
			
			if(intention.type!=IntentionType.CHASE){
				intention.type = IntentionType.CHASE
				intention.path = []
			}
			intention.expire = new Date().getTime()+1000
			
			if(intention.path.length==0){
				var destination = seekRandomPath(Point(seenEnemies[0].getX(),seenEnemies[0].getY()),Math.random()*Math.PI*2,3,false,1)
				if(destination.length!=0){
					destination = destination[destination.length-1]
					intention.path = compatFindPath(gameobjects.mapgrid.getGrid(),
						gameobjects.mapgrid.coordBelongsToCell( position.getX(),position.getY() ),
						destination)
				}
			}
		}
		else if(knownEnemies.length>0){
			alert = true
			makeSearch()
			if(intention.path.length==0){
				intention.path = compatFindPath(gameobjects.mapgrid.getGrid(),gameobjects.mapgrid.coordBelongsToCell(position.getX(),position.getY()),Point(knownEnemies[0].lastPosition.getX(),knownEnemies[0].lastPosition.getY()))
			}
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
	function move(){
		var stopX = true;
		var stopY = true;
		if(seenCheck.length>0){
			var headingControl = 0
			headingDest = seenCheck[0]
			headingDest = KleyMath.limitMod(headingDest,heading-Math.PI,heading+Math.PI);
			headingControl+=headingDest-heading;
			headingAccel +=headingControl/800
			headingAccel = KleyMath.limit(headingAccel,-headingControl/10,headingControl/10);
			alert=true
		}	
		else if(knownEnemies.length>0){
			var headingControl = 0
			var curDest = knownEnemies[0].lastPosition
			var x = curDest.getX()-position.getX()
			var y = curDest.getY()-position.getY()
			var cosA = x/(Math.sqrt(x*x+y*y));
			var tanA = y/x;
			headingDest = Math.atan(tanA);
			if(cosA>=0){
			}
			else{
				headingDest+=Math.PI
			}
			headingDest = KleyMath.limitMod(headingDest,heading-Math.PI,heading+Math.PI);
			headingControl+=headingDest-heading;
			headingAccel += headingControl/8
			if(headingControl<Math.PI/3 && headingControl>-Math.PI/6){
				headingAccel = KleyMath.limit(headingAccel,-headingControl/10,headingControl/10);

			}
		}
		if(intention.path.length!=0){
			stopX = false
			stopY = false
			
			var curposingrid = gameobjects.mapgrid.coordBelongsToCell(position.getX(),position.getY())
			//console.log(intention.path[0].getX(),intention.path[0].getY(),curposingrid.getX(),curposingrid.getY())

			/*
			for(var i = 0; i<intention.path.length; i++){
				console.log(intention.path[i].getX(),intention.path[i].getY())
			}*/
			var theading;
			var headingDest;
			var headingControl = 0;
			var curDest = gameobjects.mapgrid.getBiasedCellPosition(intention.path[0].getX(),intention.path[0].getY())
			
			var x = curDest.getX()-position.getX()
			var y = curDest.getY()-position.getY()
			var cosA = x/(Math.sqrt(x*x+y*y));
			var tanA = y/x;
			headingDest = Math.atan(tanA);
			if(cosA>=0){
			}
			else{
				headingDest+=Math.PI
			}
			headingDest = KleyMath.limitMod(headingDest,heading-Math.PI,heading+Math.PI);
			headingControl+=headingDest-heading;
			theading = heading + headingControl
			//console.log(intention.path[0].getX(),intention.path[0].getY(),curposingrid.getX(),curposingrid.getY())
			//console.log(headingControl)
			
			if(!alert){
				headingAccel += headingControl/800
				if(headingControl<Math.PI/3 && headingControl>-Math.PI/6){
					headingAccel = KleyMath.limit(headingAccel,-headingControl/10,headingControl/10);
				}
			}
			var vx = Math.sin(headingDest)*3
			var vy = Math.cos(headingDest)*3
			physicalAttribute.applyForceY(vx)
			physicalAttribute.applyForceX(vy)
			if(vx==0){
				stopX=true
			}
			if(vy==0){
				stopY=true
			}
			if(intention.path[0].getX() == curposingrid.getX() && intention.path[0].getY() == curposingrid.getY()){
				intention.path.splice(0,1)
			}
		}
		if(stopX){
			physicalAttribute.toZeroSpeedX();
		}
		if(stopY){
			physicalAttribute.toZeroSpeedY();
		}
	}
	function shoot(){
		if(gunCountDown==0){
			gunCountDown == new Date().getTime() - 200
		}
		if(gunCountDown<new Date().getTime() - 200){
			var bullet = new Bullet(position.getX(),position.getY(),allegiance,Point(position.getX(),position.getY()));
			if(panic){
				bullet.setSpeedHeading(Bullet.speed,gunheading+(Math.random()*Math.PI/3-Math.PI/6))
			}
			else{
				
			bullet.setSpeedHeading(Bullet.speed,gunheading+(Math.random()*Math.PI/8-Math.PI/16))
			}
			bullet.setAllegiance = allegiance;
			gameobjects.layer["Projectiles"].push(bullet);
			gunCountDown = new Date().getTime() + Math.random()*300;
		}
	}
	function process(){
		//console.log(knownEnemies.length)
		if(stats.health<1){
			isTrash = true
			throw "isTrash"
		}
		offensive = false
		see();
		//identify();
		reflex();
		if(!panic){
			think();
		}
		move();
		if(offensive){
			shoot()
		}
		heal()
		heading+=headingAccel;
		position.translate(physicalAttribute.getSpeed().x,physicalAttribute.getSpeed().y)
		refreshVariables();
		//mprocessintention
		if(intention.type == IntentionType.SEARCH){
			if(intention.expire > new Date().getTime()){
				if(intention.path.length == 0){
					//console.log("masuksinijuga")
					intention.path = seekRandomPath(position,heading,15,false,1)
				}
			}
		}
		var nullintention = false;
		if(!panic && !alert){
			if(intention.path.length==0){
				nullintention = true;
			}
		}
		if(intention.expire < new Date().getTime() && nullintention == true){
			intention.type = null;
		}
		if(intention.type==null){
			makeIntention()
		}
		/*
		console.log(
			Math.floor((intention.expire-(new Date().getTime()))/1000),
			"intention.type = ",intention.type,
			"intention.path = ",intention.path
		)*/
		//FUNCTION TAMBAHAN
		
	}
	function makeIntention(){
		var choice = Math.floor(Math.random()*100);
		//console.log(choice)
		if(choice<40){
			makeWander()
		}
		else{
			makeSearch();
		}
	}
	function makeWander(){
		intention.type = IntentionType.WANDER
		intention.path = [];
		intention.expire = new Date().getTime()+2000+Math.floor(Math.random()*5000) 
		intention.subject = null;
		seenCheck.push(Math.random()*Math.PI*2);
	}
	function makeSearch(){
		intention.type = IntentionType.SEARCH
		intention.path = []
		intention.expire =  new Date().getTime()+2000+Math.floor(Math.random()*10000) 
		intention.subject = null;
	}
	function refreshVariables(){
		heading = KleyMath.limitMod(heading,0,Math.PI*2)
		gunheading = KleyMath.limitMod(gunheading,0,Math.PI*2)
	}
	function heal(){
		if(stats.health<100){
			if(stats.conflict<new Date().getTime()){
				stats.health+=1	
			}
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
		public.attacked = function(num,bulpos){
			attacked(num,bulpos)
		}
		public.isTrash = function(){
			return isTrash;
		}
		public.draw = function(){
			draw()
		}
		public.process = function(){
			process();
		}
	return public;
}