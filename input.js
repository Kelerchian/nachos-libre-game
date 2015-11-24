function Input(canvas,activeCamera){
	var mouse = {};
		mouse.isDown = false;
		mouse.isDrag = false;	//ALERT: belum jadi dragnya
		mouse.X = false;
		mouse.Y = false;
		mouse.downX = false;
		mouse.downY = false;
		mouse.upX = false;
		mouse.upY = false;
		mouse.dragX = false;
		mouse.dragY = false;
	
	var keyboard = {};
		keyboard.key = []
	
	addEventListener('mousedown',function(e){
		var x = e.pageX - canvas.getOffsetLeft() - canvas.getWidth()/2
		var y = e.pageY - canvas.getOffsetTop() - canvas.getHeight()/2
		if(outOfHorizontalBound(x) || outOfVerticalBound(y)){
			if(Input.allowMouseOutOfBound){
				mouse.downX = x;
				mouse.downY = y;
				mouse.isDown = true;
			}
			else{
				if(Input.alertMouseOutOfBound){
					console.warn("mouseOutOfBound")
				}
			}
		}
		else{
			mouse.isDown = true;
		}
		if(Input.inputPrinter){
			if(Input.inputPrinterActual){
				x+=activeCamera.getX();
				y+=activeCamera.getY();
			}
			console.log(x,y)
		}
	},true)
	
	addEventListener('mouseup',function(e){
		var x = e.pageX - canvas.getOffsetLeft() - canvas.getWidth()/2
		var y = e.pageY - canvas.getOffsetTop() - canvas.getHeight()/2
		mouse.isDown = false;
		if(outOfHorizontalBound(x) || outOfVerticalBound(y)){
			if(Input.allowMouseOutOfBound){
				mouse.upX = x;
				mouse.upY = y;
			}
			else{
				if(Input.alertMouseOutOfBound){
					console.warn("mouseOutOfBound")
				}
			}
		}
	},true)
	
	addEventListener('mousemove',function(e){
		var x = e.pageX - canvas.getOffsetLeft() - canvas.getWidth()/2
		var y = e.pageY - canvas.getOffsetTop() - canvas.getHeight()/2
		if(outOfHorizontalBound(x) || outOfVerticalBound(y)){
			if(Input.allowMouseOutOfBound){
				mouse.X = x;
				mouse.Y = y;
			}
			else{
				if(Input.alertMouseOutOfBound){
					console.warn("mouseOutOfBound")
				}
			}
		}
		else{
			mouse.X = x;
			mouse.Y = y;
		}
	},true)
	
	addEventListener('keydown',function(e){
		keyboard.key[e.keyCode]=true;
	},true)
	
	addEventListener('keyup',function(e){
		keyboard.key[e.keyCode]=false;
	},true)
	
	function outOfVerticalBound(num){
		if(num<-canvas.getHeight()/2 || num>canvas.getHeight()/2){
			return true;
		}
		else{
			return false;
		}
	}
	function outOfHorizontalBound(num){
		if(num<-canvas.getWidth()/2 || num>canvas.getWidth()/2){
			return true;
		}
		else{
			return false;
		}
		
	}
	
	
	var public = {};
		public.getMouse = function(){
			return mouse;
		}
		public.getKeyboard = function(){
			return keyboard;
		}
		public.mouseClickScreen = function(xLeft,yUp,xRight,yDown){
			if(mouse.isDown = false){
				return false;
			}
			if(xLeft>xRight){
				var temp = xLeft;
				xLeft = xRight;
				xRight = temp;
			}
			if(yUp>yDown){
				var temp = yUp;
				yUp = yDown;
				yDown = temp;
			}
			if(outOfHorizontalBound(mouse.downX) || outOfVerticalBound(mouse.downY)){
				return false;
			}
			if (mouse.downX > xLeft && mouse.downX < xRight && mouse.downY > yUp && mouse.downY < yDown ){
				
				if(outOfHorizontalBound(mouse.upX) || outOfVerticalBound(mouse.upY)){
					return false;
				}
				
				if(mouse.upX > xLeft && mouse.upX < xRight && mouse.upY > yUp && mouse.upY < yDown){
					mouse.downX = -1;
					mouse.downY = -1
					return true;
				}
			}
			return false;
			
		}
		public.mouseClickActual = function(xLeft,yUp,xRight,yDown){
			
			xLeft = xLeft - activeCamera.getX();
			xRight = xRight - activeCamera.getX();
			yUp = yUp - activeCamera.getY();
			yDown = yDown - activeCamera.getY();
			
			return public.mouseClickScreen(xLeft,yUp,xRight,yDown)
		}
	return public;
}
Input.inputPrinter = false;
Input.inputPrinterActual = true;
Input.allowMouseOutOfBound = false;
Input.alertMouseOutOfBound = false;

function KeyboardReader(keyboard){
	var key = keyboard.key
	var keyBind = []
	var keyCondition = []
	var idle;
	var public = {}
		public.bindKeyCode = function(keyCode, commandFunction){
			keyBind[keyCode] = commandFunction
		}
		public.addCondition = function(keyCodeConditions, then){
			var newCon = {}
				newCon.condition = keyCodeConditions
				newCon.thenDo = then
			keyCondition.push(newCon);
		}
		public.read=function(){
			for(var i in keyBind){
				if(key[i]!=undefined){
					if(key[i]==true){
						keyBind[i]();
					}
				}
			}
			for(var i in keyCondition){
				var condition = true
				for(var j in keyCondition[i].condition){
					
					var tempStatus;
					if(key[keyCondition[i].condition[j].if] == undefined){
						tempStatus = false;
					}
					else{
						tempStatus = key[keyCondition[i].condition[j].if];
					}
					
					if(tempStatus != keyCondition[i].condition[j].is){
						condition = false;
					}
					
				}
				if(condition==true){
					keyCondition[i].thenDo()
				}	
			}
		}
		public.getBind=function(){
			return keyBind;
		}
	return public;
}

function getKeyCodeCondition(keyCode, isActive){
	var cond = {};
		cond.if = keyCode;
		cond.is = isActive;
	
	return cond;
}