function GraveYard(){
	var name = "Grave Yard"
	var position = new Position(0,0);
	var width = 9;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Hiro(){
	var name = "Hiro's House"
	var position = new Position(0,0);
	var width = 6;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Burjo(){
	var name = "Burjo"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function PoliceOffice(){
	var name = "Police Office"
	var position = new Position(0,0);
	var width = 5;
	var height = 7;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Market(){
	var name = "Market"
	var position = new Position(0,0);
	var width = 6;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function VillaCrepes(){
	var name = "Villa Crepes"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function InternetCafe(){
	var name = "Internet Cafe"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function BookStore(){
	var name = "Book Store"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function McDonald(){
	var name = "Mc Donald"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function SerabiNotosuman(){
	var name = "Serabi Notosuman"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Dea(){
	var name = "Dea's House"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function GameCenter(){
	var name = "Game Center"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function UluBundar(){
	var name = "Ulu Bundar"
	var position = new Position(0,0);
	var width = 5;
	var height = 6;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Alan(){
	var name = "Alan's House"
	var position = new Position(0,0);
	var width = 5;
	var height = 6;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Amplaz(){
	var name = "Ambarukmo Plaza"
	var position = new Position(0,0);
	var width = 28;
	var height = 10;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Gawak(){
	var name = "Gawak's House"
	var position = new Position(0,0);
	var width = 5;
	var height = 6;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function JogjaPlazaHotel(){
	var name = "Jogja Plaza Hotel"
	var position = new Position(0,0);
	var width = 8;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function SwimmingPool(){
	var name = "Jogja Swimming Pool"
	var position = new Position(0,0);
	var width = 7;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Zoo(){
	var name = "Zoo"
	var position = new Position(0,0);
	var width = 5;
	var height = 9;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function DrugStore(){
	var name = "Drug Store"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function KFC(){
	var name = "KFC"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function PostOffice(){
	var name = "Post Office"
	var position = new Position(0,0);
	var width = 5;
	var height = 6;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Minimarket(){
	var name = "Minimarket"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Yuga(){
	var name = "Yuga's House"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function TraditionalMarket(){
	var name = "Traditional Market"
	var position = new Position(0,0);
	var width = 5;
	var height = 6;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Bank(){
	var name = "Bank"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Luxury(){
	var name = "Luxury Cafe"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Cinema(){
	var name = "Cinema"
	var position = new Position(0,0);
	var width = 18;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Mahas(){
	var name = "Mr. Mahas's House"
	var position = new Position(0,0);
	var width = 8;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Enath(){
	var name = "Enath Computer"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Cendana(){
	var name = "Cendana Restaurant"
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Museum(){
	var name = "Museum"
	var position = new Position(0,0);
	var width = 5;
	var height = 6;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function FoodCourt(){
	var name = "Food Court"
	var position = new Position(0,0);
	var width = 5;
	var height = 6;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function SafeHouse(){
	var name = "Safe House"
	var position = new Position(0,0);
	var width = 8;
	var height = 8;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function PizzaHut(){
	var name = "Pizza Hut"
	var position = new Position(0,0);
	var width = 8;
	var height = 8;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function TamanPelangi(){
	var name = "Taman Pelangi"
	var position = new Position(0,0);
	var width = 17;
	var height = 9;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
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

function Tugu(){
	var name = "Tugu"
	var position = new Position(0,0);
	var width = 2;
	var height = 2;
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
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(150,150,190)";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
        
        //building label 
        ctx.globalCompositeOperation = "exclusion";
        ctx.fillStyle="white";
        ctx.strokeStyle="black";
        ctx.textAlign="center";
        ctx.font = "bold small-caps 25px Goudy Old Style";
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

function Park(){
	var name = "Park"
	var position = new Position(0,0);
	var collisionModel;
	var unit = 100;
    var radius = 4;
	
	
	function affectDynamicCollision(obj){
		var angle
		var x = obj.getX()-position.getX();
		var y = obj.getY()-position.getY();
		var cosA = x/(Math.sqrt(x*x+y*y));
		var tanA = y/x;
		angle = Math.atan(tanA);
		if(cosA>=0){
		}
		else{
			angle+=Math.PI;
		}
		angle = KleyMath.limitMod(angle,-Math.PI,Math.PI)
		var horz = Math.cos(angle)
		var vert = Math.sin(angle)
		
		obj.getPosition().translate(horz,vert)
	}
	
	function draw(){
		ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="rgb(70,190,70)";
		ctx.beginPath();
		ctx.arc(0,0,radius*unit,0,Math.PI*2,false)
		ctx.lineWidth=9;
		ctx.fill();
        
        //building label 
        ctx.globalCompositeOperation = "difference";
        ctx.fillStyle="white";
        ctx.strokeStyle="black";
        ctx.textAlign="center";
        ctx.font = "bold small-caps 25px Goudy Old Style";
		//ATAS
		ctx.translate(0,-radius*unit);
		ctx.beginPath();
        ctx.textBaseline="top";
        ctx.fillText(name,0,0);
        ctx.strokeText(name,0,0);
        
        //BAWAH
        ctx.translate(0,radius*2*unit);
		ctx.beginPath();
        ctx.textBaseline="bottom";
        ctx.fillText(name,0,0);
        ctx.strokeText(name,0,0);
	}
	var public = {};
		public.getX = function(){
			return position.getX()
		}
		public.getY = function(){
			return position.getY()
		}
        public.getRadius = function(){
            return radius;
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

//hidden building

function hidden1(){
	var name = "hidden1"
	var position = new Position(0,0);
	var width = 1;
	var height = 77;
	var collisionModel;
	var unit = 100;
	
	
	function draw(){
        ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="black";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
	}
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

function hidden2(){
	var name = "hidden2"
	var position = new Position(0,0);
	var width = 74;
	var height = 1;
	var collisionModel;
	var unit = 100;
	
	function draw(){
        ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="black";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
	}
	
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

function hidden3(){
	var name = "hidden3"
	var position = new Position(0,0);
	var width = 1;
	var height = 76;
	var collisionModel;
	var unit = 100;
	
	
	function draw(){
        ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="black";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
	}
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

function hidden4(){
	var name = "hidden4"
	var position = new Position(0,0);
	var width = 73;
	var height = 1;
	var collisionModel;
	var unit = 100;
	
	function draw(){
        ctx.translate(position.getX(),position.getY());
		ctx.fillStyle="black";
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
	}
	
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