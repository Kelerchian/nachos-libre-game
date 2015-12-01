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
	var weight = 30;
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

function seekRandomPath(currentPosition,deg,stepCount,findOpposite,focus){
	if(typeof focus != "number"){focus = 0}
	if(focus<0){focus = 0}
	var deg_ = deg;
	if(findOpposite){
		deg_+=Math.PI
	}
	var atas,kanan,kiri,bawah
	deg_ = KleyMath.limitMod(deg_,Math.PI/2-Math.PI,Math.PI/2+Math.PI)
	atas = KleyMath.absolute(1/(Math.PI/2-deg_+0.1))
	
	deg_ = KleyMath.limitMod(deg_,Math.PI-Math.PI,Math.PI+Math.PI)
	kiri = KleyMath.absolute(1/(Math.PI-deg_+0.1))
	
	deg_ = KleyMath.limitMod(deg_,Math.PI*3/2-Math.PI,Math.PI*3/2+Math.PI)
	bawah = KleyMath.absolute(1/(Math.PI*3/2-deg_+0.1))
	
	deg_ = KleyMath.limitMod(deg_,0-Math.PI,0+Math.PI)
	kanan = KleyMath.absolute(1/(0-deg_+0.1))
	
	for(var i = 0; i<focus; i++){
		var titiktengah = KleyMath.average(atas,kiri,bawah,kanan)
		atas = (atas+titiktengah)/2
		kiri = (kiri+titiktengah)/2
		bawah = (bawah+titiktengah)/2
		kanan = (kanan+titiktengah)/2
	}
	
	atas*=100
	kiri*=100
	bawah*=100
	kanan*=100
	var nowpos = gameobjects.mapgrid.coordBelongsToCell(currentPosition.getX(),currentPosition.getY())
	var initialpos = gameobjects.mapgrid.coordBelongsToCell(currentPosition.getX(),currentPosition.getY())
	var grid = gameobjects.mapgrid.getGrid()
	var width = gameobjects.mapgrid.getWidth()
	var height = gameobjects.mapgrid.getHeight()
	
	var label = ["atas","kiri","bawah","kanan"]
	var value = [atas,kiri,bawah,kanan]
	var lastmove = null;
	for(var i = 0; i<stepCount; i++){
		var templabel = label.slice(0,label.length)
		var tempvalue = value.slice(0,value.length)
		//KANAN
		if(nowpos.getX()==width-1 || lastmove == "kiri"){
			templabel.splice(3,0)
			tempvalue.splice(3,0)
		}
		else if(grid[nowpos.getX()+1][nowpos.getY()]==GridType.COLLISION){
			templabel.splice(3,0)
			tempvalue.splice(3,0)
		}
		//bawah
		if(nowpos.getY()==height-1 || lastmove == "atas"){
			templabel.splice(2,0)
			tempvalue.splice(2,0)
		}
		else if(grid[nowpos.getX()][nowpos.getY()+1]==GridType.COLLISION){
			templabel.splice(2,0)
			tempvalue.splice(2,0)			
		}
		//KIRI
		if(nowpos.getX()==0 || lastmove == "kanan"){
			templabel.splice(1,0)
			tempvalue.splice(1,0)
		}
		else if(grid[nowpos.getX()-1][nowpos.getY()]==GridType.COLLISION){
			templabel.splice(1,0)
			tempvalue.splice(1,0)
		}
		//ATAS
		if(nowpos.getY()==0 || lastmove == "bawah"){
			templabel.splice(0,0)
			tempvalue.splice(0,0)
		}
		else if(grid[nowpos.getX()][nowpos.getY()-1]==GridType.COLLISION){
			templabel.splice(0,0)
			tempvalue.splice(0,0)
		}
		if(tempvalue.length==0){
			break;
		}
		var nextMove;
		var max = 0;
		for(var j = 0; j<tempvalue.length; j++){
			max += tempvalue[j]
		}
		var random = Math.floor(Math.random()*max)
		max = 0
		for(var j = 0; j<tempvalue.length; j++){
			max += tempvalue[j]
			if(random<=max){
				nextMove = templabel[j];
				//console.log(nextMove)
				break;
			}
		}
		//console.log(templabel.length == tempvalue.length)
		if(nextMove=="atas"){
			nowpos.translate(0,-1)
		}
		else if(nextMove=="kanan"){
			nowpos.translate(1,0)
		}
		else if(nextMove=="kiri"){
			nowpos.translate(-1,0)
		}
		else if(nextMove=="bawah"){
			nowpos.translate(0,1)
		}
	}
	//console.log(initialpos.getX(),initialpos.getY(),nowpos.getX(),nowpos.getY())
	return compatFindPath(grid, initialpos, nowpos)
}

function compatFindPath(grid,pathStart,pathEnd){
	var tempresult = findPath(grid,
	 [pathStart.getX(),pathStart.getY()],
	  [pathEnd.getX(),pathEnd.getY()])
	var result = []
	for(var i = 0; i<tempresult.length; i++){
		result.push(Point(tempresult[i][0],tempresult[i][1]))
	}
	//console.log(result)
	return result
}