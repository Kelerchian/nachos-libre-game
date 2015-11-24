function Gamedata(gameobjects,input,activeCamera){
	
	gameobjects.mapgrid.setUnit(100)
	gameobjects.mapgrid.isToBeDrawn = false;                   //DEBUG: menyalakan mapgrid pada graphic
	gameobjects.addTopLayer("PlayerChar");               //DEBUG: menyalakan mapgrid pada graphic
	gameobjects.addTopLayer("Projectiles");
	gameobjects.addTopLayer("Buildings");
	gameobjects.addTopGFilter("Night");
	
	
	//CANVAS FILTER
	gameobjects.gFilter["Night"].push(
			new GFilter(GFilterMode.DARKEN,"rgb(20,30,79)",0.5)
		);
	
	//PLAYER CHARACTER
    var playerChar = createPlayerCharacter("PlayerCharacter",0,0,0,input);
	playerChar.setInput(input,activeCamera);
	gameobjects.layer["PlayerChar"].push(playerChar)
	
	
	activeCamera.bindToObject(playerChar);
	//BUILDING
	gameobjects.layer["Buildings"].push(buildingSpawner(new BangunanTes(),Point(11,5),gameobjects.mapgrid))
    //gameobjects.layer["Buildings"].push(buildingSpawner(new BangunanBar(),Point(16,16),gameobjects.mapgrid))
	
	
	
	
	function process(){
		//var a = gameobjects.mapgrid.coordBelongsToCell(playerChar.getX(),playerChar.getY());
		//console.log(a.getX()+":"+a.getY());
	}
	function processAfterGraphic(){
		//Isi process di sini hanya yang perlu dilakukan setelah objects di draw per frame
	}
	var public = {};
		public.processData = function(){
			process();
		}
		public.processPostGraphic = function(){
			processAfterGraphic();
		}
	return public;
}