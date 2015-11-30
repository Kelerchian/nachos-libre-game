function Gamedata(gameobjects,input,activeCamera){
	
	gameobjects.mapgrid.setUnit(100)
	gameobjects.mapgrid.isToBeDrawn = false;                   //DEBUG: menyalakan mapgrid pada graphic
	gameobjects.addTopLayer("Steppable");
	gameobjects.addTopLayer("PlayerChar");               //DEBUG: menyalakan mapgrid pada graphic
	gameobjects.addTopLayer("Mafia");
	gameobjects.addTopLayer("Hostage");
	gameobjects.addTopLayer("Cops");
	gameobjects.addTopLayer("Projectiles");
	gameobjects.addTopLayer("Buildings");
	gameobjects.addTopGFilter("Night");
	
	
	//CANVAS FILTER
	gameobjects.gFilter["Night"].push(
			new GFilter(GFilterMode.DARKEN,"rgb(20,30,79)",0.2)
		);
	
	//PLAYER CHARACTER
    var playerChar = createPlayerCharacter("PlayerCharacter",900,400,0,input);
	playerChar.setInput(input,activeCamera);
	gameobjects.layer["PlayerChar"].push(playerChar)
	
	
	//COP TEST
	var copTes = createCop("cop",800,350,0);
	gameobjects.layer["Cops"].push(copTes);
	
	activeCamera.bindToObject(playerChar);
	
    
    //BUILDING
	
    gameobjects.layer["Buildings"].push(buildingSpawner(new GraveYard(),Point(1,1),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building1(),Point(10,1),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building2(),Point(16,1),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new PoliceOffice(),Point(23,3),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Market(),Point(3,8),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building3(),Point(11,8),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building4(),Point(16,8),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new BookStore(),Point(1,15),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building5(),Point(6,15),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building6(),Point(11,15),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building7(),Point(18,15),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building8(),Point(23,12),gameobjects.mapgrid))
    
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building9(),Point(32,5),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building10(),Point(37,5),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Amplaz(),Point(46,3),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building11(),Point(32,11),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new JogjaPlazaHotel(),Point(41,15),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building12(),Point(49,15),gameobjects.mapgrid))
    
	gameobjects.layer["Buildings"].push(buildingSpawner(new Zoo(),Point(32,27),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new DrugStore(),Point(41,24),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building13(),Point(46,24),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new PostOffice(),Point(55,24),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Minimarket(),Point(41,29),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building14(),Point(46,29),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new TraditionalMarket(),Point(55,30),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building15(),Point(32,38),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building16(),Point(37,38),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Cinema(),Point(42,38),gameobjects.mapgrid))
    
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building17(),Point(5,24),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building18(),Point(13,24),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Building19(),Point(18,24),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Museum(),Point(23,27),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new FoodCourt(),Point(23,33),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new SafeHouse(),Point(13,31),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new UKDW(),Point(5,31),gameobjects.mapgrid))
    
	gameobjects.layer["Buildings"].push(buildingSpawner(new Tower(),Point(29,21),gameobjects.mapgrid))
	gameobjects.layer["Steppable"].push(circleSteppableSpawner(new Park(),Point(30,22),gameobjects.mapgrid))
    
    //hidden building
	gameobjects.layer["Buildings"].push(buildingSpawner(new hidden1(),Point(0,0),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new hidden2(),Point(1,0),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new hidden3(),Point(60,1),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new hidden4(),Point(1,43),gameobjects.mapgrid))
    
	
	function process(){
		var a = gameobjects.mapgrid.coordBelongsToCell(playerChar.getX(),playerChar.getY());
		console.log(a.getX()+":"+a.getY());
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