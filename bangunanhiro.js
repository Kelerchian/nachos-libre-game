function PantiRapih(){
	var name = "Panti Rapih Hospital"
	var position = new Position(0,0);
	var width = 15;
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
		ctx.translate(position.getX(),position.getY())
		ctx.fillStyle="rgb(100,50,120)"
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

function VivoRestaurant(){
	var name = "Vivo Restaurant"
	var position = new Position(0,0);
	var width = 10;
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
		ctx.fillStyle="rgb(180,120,30)"
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

function TokoRico(){
	var name = "Toko Rico"
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
		ctx.translate(position.getX(),position.getY())
		ctx.fillStyle="rgb(30,190,90)"
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

function Rico(){
	var name = "Rico's House"
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
		ctx.translate(position.getX(),position.getY())
		ctx.fillStyle="rgb(78,18,129)"
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

function Sriwedari(){
	var name = "Sriwedari"
	var position = new Position(0,0);
	var width = 10;
	var height = 15;
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
		ctx.fillStyle="rgb(159,100,6)";
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

function GerejaKobar(){
	var name = "Gereja Kota Baru"
	var position = new Position(0,0);
	var width = 10;
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
		ctx.translate(position.getX(),position.getY())
		ctx.fillStyle="rgb(180,100,50)"
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

function Beringin(){
	var name = "Beringin"
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
		ctx.translate(position.getX(),position.getY())
		ctx.fillStyle="rgb(5,150,10)"
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

function BeringinBesar(){
	var name = "Beringin"
	var position = new Position(0,0);
	var width = 2;
	var height = 3;
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
		ctx.fillStyle="rgb(5,150,10)"
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

function AlunAlunKidul(){
	var name = "Alun-Alun Kidul"
	var position = new Position(0,0);
	var width = 8;
	var height = 15;
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
		ctx.fillStyle="rgb(10,230,20)"
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

function Indomaret(){
	var name = "Indomaret"
	var position = new Position(0,0);
	var width = 6;
	var height = 3;
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
		ctx.fillStyle="rgb(50,20,80)"
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

function TamanPintar(){
	var name = "Taman Pintar"
	var position = new Position(0,0);
	var width = 10;
	var height = 20;
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
		ctx.fillStyle="rgb(150,40,100)"
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

function TamanBudaya(){
	var name = "Taman Budaya"
	var position = new Position(0,0);
	var width = 8;
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
		ctx.translate(position.getX(),position.getY())
		ctx.fillStyle="rgb(180,180,180)"
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
		ctx.fillStyle="red"
		ctx.beginPath();
		ctx.rect(unit/8,unit/8,width*unit-unit/8*2,height*unit-unit/8*2);
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

function Gramedia(){
	var name = "Gramedia"
	var position = new Position(0,0);
	var width = 10;
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
		ctx.translate(position.getX(),position.getY())
		ctx.fillStyle="rgb(120,40,200)"
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
		ctx.fillStyle="white"
		ctx.beginPath();
		ctx.rect(unit/8,unit/8,width*unit-unit/8*2,height*unit-unit/8*2);
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

function UKDW(){
	var name = "Duta Wacana Christian University"
	var position = new Position(0,0);
	var width = 20;
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
		ctx.translate(position.getX(),position.getY())
		ctx.fillStyle="rgb(144,117,8)"
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
		ctx.fillStyle="rgb(15,15,155)"
		ctx.beginPath();
		ctx.rect(unit/8,unit/8,width*unit-unit/8*2,height*unit-unit/8*2);
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

function PopHotel(){
	var name = "Pop Hotel"
	var position = new Position(0,0);
	var width = 10;
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
		ctx.translate(position.getX(),position.getY())
		ctx.fillStyle="rgb(243,50,122)"
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
		ctx.fillStyle="rgb(213,4,171)"
		ctx.beginPath();
		ctx.rect(unit/8,unit/8,width*unit-unit/8*2,height*unit-unit/8*2);
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