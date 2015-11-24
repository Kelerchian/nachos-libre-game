var Test = {}
	Test.generateString = function(n){
		if(typeof n != "number"){
			n=5
		};
		var rString = "";
		for(var i = 0; i < n; i++){
			rString = rString + String.fromCharCode(Math.random()*94+31)
		}
		return rString;
	}
	Test.logSomething = function(n){
		if(typeof n != "number"){
			n = Math.floor(Math.random()*15+1)
		}
		console.log(Test.generateString(n))
	}

var CollisionType = {
	STATIC: 1,
	DYNAMIC: 2,
	GRABBABLE: 3,
	VOLUME: 4,
	DEFAULT: 1
}

var CollisionModelType = {
	CIRCLE: 1,
	SQUARE: 2
}

var Physics = {}
	Physics.collide = function (obj1, obj2) {
		if(obj1==obj2){
			return
		}
		function getColPosSquareSquare(square1, square2) {
			var x1 = square1.getX() + square1.getCollisionModel().getModel().x;
			var y1 = square1.getY() + square1.getCollisionModel().getModel().y;
			var w1 = square1.getCollisionModel().getModel().w;
			var h1 = square1.getCollisionModel().getModel().h;
	
			var x2 = square2.getX() + square2.getCollisionModel().getModel().x;
			var y2 = square2.getY() + square2.getCollisionModel().getModel().y;
			var w2 = square2.getCollisionModel().getModel().w;
			var h2 = square2.getCollisionModel().getModel().h;
	
			if (Math.abs(x1 - x2) > (w1 + w2) / 2) {
				return false;
			}
			if (Math.abs(y1 - y2) > (h1 + h2) / 2) {
				return false;
			}
	
			var x2dikanan = x2 > x1 ? true : false;
			var y2dibawah = y2 > y1 ? true : false;
	
			var colRangeX = Math.abs(x1 - x2) * w1 / (w1 + w2);
			var colRangeY = Math.abs(y1 - y2) * h1 / (h1 + h2);
	
			var colX = x2dikanan == true ? (x1 + colRangeX) : (x1 - colRangeX);
			var colY = y2dibawah == true ? (y1 + colRangeY) : (y1 - colRangeY);
	
			return new Position(colX, colY);
		}
		function getColPosSquareCircle(square, circle) {
			
			var xs = square.getX() + square.getCollisionModel().getModel().x;
		
			var ys = square.getY() + square.getCollisionModel().getModel().y;
			var ws = square.getCollisionModel().getModel().w;
			var hs = square.getCollisionModel().getModel().h;
			var colliding = false;
	
			var xc = circle.getX() + circle.getCollisionModel().getModel().xOffset;
			var yc = circle.getY() + circle.getCollisionModel().getModel().yOffset;
			var rc = circle.getCollisionModel().getModel().radius;
			
			ctx.save()
			ctx.beginPath()
			ctx.rect(xs, ys, ws, hs);
			if (ctx.isPointInPath(xc, yc)) {
				colliding = true;
			}
			ctx.restore()
			
			var xcdikanan = xc > xs + ws/2 ? true : false;
			var ycdibawah = yc > ys + hs/2 ? true : false;
	
			var colRangeX = Math.abs(xs + ws/2 - xc) * ws / (ws + rc);
			var colRangeY = Math.abs(ys + hs/2 - yc) * hs / (hs + rc);
	
			var colX = xcdikanan == true ? (xs + colRangeX) : (xs - colRangeX);
			var colY = ycdibawah == true ? (ys + colRangeY) : (ys - colRangeY);
			
			var calcCircle = new Circle (xc,yc,rc);
			if (colliding == true) {
				return new Position(colX, colY)
			}
			if (Physics.isCollideLimitedLineCircle(new LineFunc(Point(xs,ys), Point(xs+ws,ys)), calcCircle)!=false) {
				return new Position(colX, colY)
			}
			if (Physics.isCollideLimitedLineCircle(new LineFunc(Point(xs+ws,ys), Point(xs+ws,ys+hs)), calcCircle)!=false) {
				return new Position(colX, colY)
			}
			if (Physics.isCollideLimitedLineCircle(new LineFunc(Point(xs+ws,ys+hs), Point(xs,ys+hs)), calcCircle)!=false) {
				return new Position(colX, colY)
			}
			if (Physics.isCollideLimitedLineCircle(new LineFunc(Point(xs,ys+hs), Point(xs,ys)), calcCircle)!=false) {
				return new Position(colX, colY)
			}
			return false;
	
		}
		function getColPosCircleCircle(circle1, circle2) {
			var x1 = circle1.getX() + circle1.getCollisionModel().getModel().xOffset;
			var y1 = circle1.getY() + circle1.getCollisionModel().getModel().yOffset;
			var r1 = circle1.getCollisionModel().getModel().radius;
			
			var x2 = circle2.getX() + circle2.getCollisionModel().getModel().xOffset;
			var y2 = circle2.getY() + circle2.getCollisionModel().getModel().yOffset;
			var r2 = circle2.getCollisionModel().getModel().radius;
	
			var rangeX = Math.abs(x2 - x1);
			var rangeY = Math.abs(y2 - y1);
			var range = Math.sqrt(rangeX * rangeX + rangeY * rangeY);
			if (range < r1 + r2) {
				var x2dikanan = x2 > x1 ? true : false;
				var y2dibawah = y2 > y1 ? true : false;
	
				var colRangeX = rangeX * r1 / (r1 + r2);
				var colRangeY = rangeY * r1 / (r1 + r2);
	
				var colX = x2dikanan == true ? (x1 + colRangeX) : (x1 - colRangeX)
				var colY = y2dibawah == true ? (y1 + colRangeY) : (y1 - colRangeY)
	
				return new Position(colX, colY);
			}
			else {
				return false;
			}
		}
		var modtype1 = obj1.getCollisionModel().getModel().type;
		var modtype2 = obj2.getCollisionModel().getModel().type;
		var coltype1 = obj1.getCollisionModel().getCollisionType();
		var coltype2 = obj2.getCollisionModel().getCollisionType();
		var position;
		
		function getColPos(){
			if (modtype1 == CollisionModelType.CIRCLE && modtype2 == CollisionModelType.CIRCLE) {
				return getColPosCircleCircle(obj1, obj2);
			}
			if (modtype1 == CollisionModelType.SQUARE && modtype2 == CollisionModelType.CIRCLE) {
				return getColPosSquareCircle(obj1, obj2);
			}
			if (modtype1 == CollisionModelType.CIRCLE && modtype2 == CollisionModelType.SQUARE) {
				return getColPosSquareCircle(obj2, obj1);
			}
			if (modtype1 == CollisionModelType.SQUARE && modtype2 == CollisionModelType.SQUARE) {
				return getColPosSquareSquare(obj1, obj2);
			}
		}
		position = getColPos();
		
		if(position!=false && position!= null){
			if(coltype1 == CollisionType.STATIC){
				if(coltype2 == CollisionType.STATIC){
					return
				}
				else if(coltype2 == CollisionType.DYNAMIC){
					while(position!=false){
						obj1.affectDynamicCollision(obj2);
						position = getColPos()
					}
				}
				else if(coltype2 == CollisionType.GRABBABLE){
					obj2.affectStaticCollision(obj1);
				}
				else if(coltype2 == CollisionType.VOLUME){
					return
				}
			}
			else if(coltype1 == CollisionType.DYNAMIC){
				if(coltype2 == CollisionType.DYNAMIC){
					return
				}
				else if(coltype2 == CollisionType.GRABBABLE){
					return
				}
				else if(coltype2 == CollisionType.VOLUME){
					return
				}
			}
			else if(coltype1 == CollisionType.GRABBABLE){
				if(coltype2 == CollisionType.GRABBABLE){
					return
				}
				else if(coltype2 == CollisionType.VOLUME){
					return
				}
			}
			else if(coltype1 == CollisionType.VOLUME){
				if(coltype2 == CollisionType.VOLUME){
					return
				}
			}
		}
		else{
			return;
		}
	}
	
	Physics.isCollideLineCircle = function(line, circle) {
		if (linePointDistance(line, Point(circle.getX(), circle.getY())) <= circle.getR()) {
			return true;
		}
		else {
			return false;
		}
	}
	
	Physics.isCollideLimitedLineCircle = function(limitedline, circle) {
		var pt1 = limitedline.getPtA();
		var pt2 = limitedline.getPtB();
		var left,
			right,
			top,
			bottom;
		
		if (pt1.getX() > pt2.getX()) {
			right = pt1.getX()
			left = pt2.getX()
		}
		else {
			right = pt2.getX()
			left = pt1.getX()
		}
		
		if (pt1.getY() > pt2.getY()) {
			bottom = pt1.getY()
			top = pt2.getY()
		}
		else {
			bottom = pt2.getY()
			top = pt1.getY()
		}
		
		var inhorz = false,
			invert = false;
			
		var outofbound = true;
		
		if(circle.getX() <= right && circle.getX() >= left && (circle.getY()-circle.getR() <= bottom && circle.getY()+circle.getR() >= top) ){
			inhorz = true;
		}
		if(circle.getY() <= bottom && circle.getY() >= top && (circle.getX()-circle.getR() <= right && circle.getX()+circle.getR() >= left) ){
			invert = true;
		}
		
		if(inhorz || invert){
			outofbound = false;
		}
		
		if(outofbound == true){
			ctx.beginPath()
			ctx.arc(circle.getX(),circle.getY(),circle.getR(),0,Math.PI*2,false)
			if(ctx.isPointInPath(pt1.getX(),pt1.getY())){
				outofbound = false
			}
			if(ctx.isPointInPath(pt2.getX(),pt2.getY())){
				outofbound = false
			}
		}
		
		if(outofbound == true){
			return false;
		}
		/*
		if (circle.getX() - circle.getR() > right) {
			return false
		}
		if (circle.getX() + circle.getR() < left) {
			return false
		}
		if (circle.getY() + circle.getR() < top) {
			return false;
		}
		if (circle.getY() - circle.getR() > bottom) {
			return false;
		}
		*/
		return Physics.isCollideLineCircle(limitedline, circle)
	}	


function CollisionModel(collisiontype) {
	try { for (var i in CollisionType) { if (collisiontype == CollisionType[i]) { throw null; } } collisiontype = CollisionType.DEFAULT } catch (e) { }
	var model = {}
	model.type = null
	var public = {};
	public.buildSquareModel = function (w, h, xleft, ytop) {
		model = {};
		model.type = CollisionModelType.SQUARE;
		model.w = w;
		model.h = h;
		model.x = xleft;
		model.y = ytop;
	}
	public.buildCircleModel = function (radius, xOffset, yOffset) {
		if (typeof xOffset != "number") { xOffset = 0; }
		if (typeof yOffset != "number") { yOffset = 0; }
		if (typeof radius != "number") { radius = 0; }
		model = {}
		model.type = CollisionModelType.CIRCLE;
		model.radius = radius;
		model.xOffset = xOffset;
		model.yOffset = yOffset;
	}
	public.getCollisionType = function () {
		return collisiontype;
	}
	public.getModel = function () {
		return model;
	}
	return public;
}

function LineFunc(ptA, ptB) {
	var b = ptA.getY() - ptB.getY();
	var a = ptA.getX() - ptB.getX();
	var c = ptA.getY() * b - ptA.getX() * a;
	var public = {}
	public.getA = function () {
		return a;
	}
	public.getB = function () {
		return b;
	}
	public.getC = function () {
		return c;
	}
	public.getPtA = function () {
		return ptA;
	}
	public.getPtB = function () {
		return ptB;
	}
	public.getPointIfY = function (y) {
		if(a==0){
			return Point(ptA.getX(),y);
		}
		return Point((public.getB() * y - public.getC()) / public.getA(), y);
	}
	public.getPointIfX = function (x) {
		if(b==0){
			return Point(x,ptA.getY());	
		}
		return Point(x, (public.getA() * x + public.getC()) / public.getB())
	}
	return public;
}

function linePointDistance(line, point) {
	var vert = point.getY() - line.getPointIfX(point.getX()).getY();
	var horz = point.getX() - line.getPointIfY(point.getY()).getX();
	var miring = Math.sqrt(vert * vert + horz * horz);
	var Luasx2 = Math.abs(vert * horz);
	return Luasx2 / miring;
}

function Point(x, y) {
	return new Position(x, y);
}

function Circle(x, y, r) {
	var public = {}
	public.getX = function () {
		return x;
	}
	public.getY = function () {
		return y;
	}
	public.getR = function () {
		return r;
	}
	public.getArea = function () {
		return Math.PI * r * r / 2;
	}
	public.getCircumference = function () {
		return 2 * Math.PI * r;
	}
	public.draw = function () {
		ctx.save();
		ctx.beginPath()
		ctx.arc(x, y, r, 0, Math.PI * 2, false);
		ctx.strokeStyle = "black";
		ctx.stroke()
		ctx.restore()
	}
	return public
}

