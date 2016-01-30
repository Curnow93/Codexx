var aquarium = {
	Nemo: { type: "fish", species: "clownfish", length: 3.7 },
	Marlin: { type: "fish", species: "clownfish", length: 4.1 },
	Dory: { type: "fish", species: "blue tang", length: 6.2 },
	Peach: { type: "echinoderm", species: "starfish", length: 5.3 },
	"Coral Castle": { type: "environment", material: "coquina", moves: false },
	"Dragon Statue": { type: "environment", material: "plastic", moves: false },
	addCritter: function ( name, type, species, length ){	
		this[name] = {type: type, species: species, length: length};
	},
	addToy: function (name, type, length){
		this[name] = {type: type, length: length};
	}
};

aquarium.addCritter("Dory", "Fish", "Bubblefish", 4.3);
aquarium.takeOut = function(name){
	this[name].name = name;
	var temp = this[name];
	delete this[name];
	return temp;
};

var fishOutOfWater = aquarium.takeOut("Marlin");

console.log(fishOutOfWater);


//for in loop searches each object in aquarium
aquarium.countFish = function(){
	var numFish = 0;
	for ( var key in this ) {
		if ( this[key].type == "fish" ) {
			numFish++;
		}
	}
	return numFish;
}
console.log(numFish);
aquarium.countFish();

