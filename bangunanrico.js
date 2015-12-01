function MuseumAffandi(){
	var name = "Museum Affandi"
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
		
		obj.setPosition(obj.getX()+horz,obj.getY()+vert);
		
	}
	
	function draw(){
		var my_gradient = ctx.createLinearGradient(100, 50, 300, 500);
		my_gradient.addColorStop(0, "#C72914");
		my_gradient.addColorStop(1, "#FF341A");
		ctx.fillStyle = my_gradient;
		ctx.translate(position.getX(),position.getY())
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
		ctx.lineWidth = 3;
      	ctx.strokeStyle = '#E36017';
      	ctx.stroke();
        
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

function Monjali(){
	var name = "Monumen Jogja Kembali"
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
		
		obj.setPosition(obj.getX()+horz,obj.getY()+vert);
		
	}
	
	function draw(){
		// var my_gradient = ctx.createLinearGradient(0, 0, 700, 500);
		// my_gradient.addColorStop(0, "#63C75B");
		// my_gradient.addColorStop(1, "#7EFF74");
		// ctx.fillStyle = my_gradient;
		ctx.fillStyle="#B1C7B1"
		ctx.shadowBlur=10;
		ctx.shadowColor="#2D332D";
		ctx.translate(position.getX(),position.getY())
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
		ctx.lineWidth = 3;
      	ctx.strokeStyle = '#CAE3CA';
      	ctx.stroke();
        
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

function LegendCafe(){
	var name = "Legend Cafe"
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
		
		obj.setPosition(obj.getX()+horz,obj.getY()+vert);
		
	}
	
	function draw(){
		// var my_gradient = ctx.createLinearGradient(0, 0, 700, 500);
		// my_gradient.addColorStop(0, "#63C75B");
		// my_gradient.addColorStop(1, "#7EFF74");
		// ctx.fillStyle = my_gradient;
		ctx.fillStyle="#9CC7C3"
		ctx.shadowBlur=10;
		ctx.shadowColor="#2D332D";
		ctx.translate(position.getX(),position.getY())
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
		ctx.lineWidth = 3;
      	ctx.strokeStyle = '#B1E3DF';
      	ctx.stroke();
        
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

function Jail(){
	var name = "Jail"
	var position = new Position(0,0);
	var width = 10;
	var height = 17;
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
		ctx.fillStyle="#242E2D"
		ctx.shadowBlur=10;
		ctx.shadowColor="#2D332D";
		ctx.translate(position.getX(),position.getY())
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
		ctx.lineWidth = 3;
      	ctx.strokeStyle = '#BBF0EB';
      	ctx.stroke();
        
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
		
		obj.setPosition(obj.getX()+horz,obj.getY()+vert);
		
	}
	
	function draw(){
		ctx.fillStyle="#EB5B39"
		ctx.shadowBlur=20;
		ctx.shadowColor="#572215";
		ctx.translate(position.getX(),position.getY())
		ctx.beginPath();
		ctx.rect(0,0,width*unit,height*unit);
		ctx.fill();
		ctx.lineWidth = 3;
      	ctx.strokeStyle = '#572215';
      	ctx.stroke();
        
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