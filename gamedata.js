function Gamedata(gameobjects,input,activeCamera){
	
	gameobjects.mapgrid.setUnit(100)
	gameobjects.mapgrid.isToBeDrawn = false;                   //DEBUG: menyalakan mapgrid pada graphic
    gameobjects.addTopLayer("Stepable");
	gameobjects.addTopLayer("PlayerChar");               //DEBUG: menyalakan mapgrid pada graphic
	gameobjects.addTopLayer("Mafia");
	gameobjects.addTopLayer("Hostage");
	gameobjects.addTopLayer("Cops");
	gameobjects.addTopLayer("Projectiles");
	gameobjects.addTopLayer("Buildings");
	gameobjects.addTopGFilter("Night");
	
	
	//CANVAS FILTER
    /*
	gameobjects.gFilter["Night"].push(
			new GFilter(GFilterMode.DARKEN,"rgb(20,30,79)",0.2)
		);
	gameobjects.gFilter["Night"].push(
			new GFilter(GFilterMode.SATURATION,"rgb(180,180,180)",0.5)
		);*/
    
    
    //BUILDING
	
    //bangunanhiro.js
	
    gameobjects.layer["Buildings"].push(buildingSpawner(new PantiRapih(),Point(1,1),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new VivoRestaurant(),Point(16,1),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new Indomaret(),Point(18,8),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new GerejaKobar(),Point(5,15),gameobjects.mapgrid))
    gameobjects.layer["Stepable"].push(rectangleSteppableSpawner(new AlunAlunKidul(),Point(17,15),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new Beringin(),Point(17,15),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new Beringin(),Point(23,15),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new Beringin(),Point(17,28),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new Beringin(),Point(23,28),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new BeringinBesar(),Point(18,21),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new BeringinBesar(),Point(22,21),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new UKDW(),Point(26,1),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new TokoRico(),Point(29,15),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new Rico(),Point(29,20),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new PopHotel(),Point(36,15),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new Gramedia(),Point(5,23),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new TamanPintar(),Point(50,5),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new TamanBudaya(),Point(64,1),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new Sriwedari(),Point(64,13),gameobjects.mapgrid))
    
    //bangunanrico.js
    gameobjects.layer["Buildings"].push(buildingSpawner(new Jail(),Point(62,57),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new LegendCafe(),Point(56,48),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new Market(),Point(66,48),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new Monjali(),Point(64,28),gameobjects.mapgrid))
    gameobjects.layer["Buildings"].push(buildingSpawner(new MuseumAffandi(),Point(50,25),gameobjects.mapgrid))
    
    
    //bangunandea.js
    gameobjects.layer["Buildings"].push(buildingSpawner(new GraveYard(),Point(1,34),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Hiro(),Point(10,34),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Burjo(),Point(16,34),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new PoliceOffice(),Point(23,36),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Market(),Point(3,41),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new VillaCrepes(),Point(11,41),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new InternetCafe(),Point(16,41),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new BookStore(),Point(1,48),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new McDonald(),Point(6,48),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new SerabiNotosuman(),Point(11,48),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Dea(),Point(18,48),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new GameCenter(),Point(23,45),gameobjects.mapgrid))
    
	gameobjects.layer["Buildings"].push(buildingSpawner(new UluBundar(),Point(32,38),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Alan(),Point(37,38),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Amplaz(),Point(46,36),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Gawak(),Point(32,44),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new JogjaPlazaHotel(),Point(41,48),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new SwimmingPool(),Point(49,48),gameobjects.mapgrid))
    
	gameobjects.layer["Buildings"].push(buildingSpawner(new Zoo(),Point(32,60),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new DrugStore(),Point(41,57),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new KFC(),Point(46,57),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new PostOffice(),Point(55,57),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Minimarket(),Point(41,62),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Yuga(),Point(46,62),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new TraditionalMarket(),Point(55,63),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Bank(),Point(32,71),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Luxury(),Point(37,71),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Cinema(),Point(42,71),gameobjects.mapgrid))
    
	gameobjects.layer["Buildings"].push(buildingSpawner(new Mahas(),Point(5,57),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Enath(),Point(13,57),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Cendana(),Point(18,57),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Museum(),Point(23,60),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new FoodCourt(),Point(23,66),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new SafeHouse(),Point(13,64),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new PizzaHut(),Point(5,64),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new TamanPelangi(),Point(29,25),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Tugu(),Point(23,32),gameobjects.mapgrid))
    
	gameobjects.layer["Stepable"].push(circleSteppableSpawner(new Park(),Point(30,55),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new Tugu(),Point(29,54),gameobjects.mapgrid))
    
    //hidden building
	gameobjects.layer["Buildings"].push(buildingSpawner(new hidden1(),Point(0,0),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new hidden2(),Point(1,0),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new hidden3(),Point(74,1),gameobjects.mapgrid))
	gameobjects.layer["Buildings"].push(buildingSpawner(new hidden4(),Point(1,76),gameobjects.mapgrid))
    
	
	//PLAYER CHARACTER
    var playerChar = createPlayerCharacter("PlayerCharacter",(17-15)*100,(12-15)*100,0,input);
	playerChar.setInput(input,activeCamera);
	gameobjects.layer["PlayerChar"].push(playerChar)
	
	
	//COP TEST
	var copTes = createCop("cop",(15-15)*100,(19-15)*100,0);
	gameobjects.layer["Cops"].push(copTes);
	
	var hostageTes = createHostage("hostage",(34-15)*100,(12-15)*100)
	gameobjects.layer["Hostage"].push(hostageTes)
	
	var guardian1 = createMafia("Guardian_1",gameobjects.mapgrid.getCellCenter(17,11,0).getX(),gameobjects.mapgrid.getCellCenter(18,11,0).getY())
	var guardian2 = createMafia("Guardian_2",gameobjects.mapgrid.getCellCenter(23,11,0).getX(),gameobjects.mapgrid.getCellCenter(18,11,0).getY())
	gameobjects.layer["Mafia"].push(guardian1)
	gameobjects.layer["Mafia"].push(guardian2)
	activeCamera.bindToObject(playerChar);
    
	
	function process(){
		
		var a = gameobjects.mapgrid.coordBelongsToCell(playerChar.getX(),playerChar.getY());
		//console.log(playerChar.getX()+":"+playerChar.getY());
		
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