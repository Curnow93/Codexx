console.log((1 == true)*10 + "\n \"Cats\"\/\"Dogs\"".length);

var trainPiss = 4;

trainPiss += 4;
trainPiss *= 10;
console.log(trainPiss);

function makeSquare(a, b, c){

var width = a;
var height = b;
var depth = c;
var cube = a * b * c;
return cube;

}
var cube1 = makeSquare(3, 4, 8);
var cube2 = makeSquare(3, 3, 3);
var cube3 = makeSquare(5, 5, 5);
var cubeSum = cube1 + cube2 + cube3;
console.log(cube1, cube2, cube3, cubeSum);


var toby = "Toby Davies",
people = ["Gregg Pollock", "John Maher", undefined, "John Doe", "David Beckham", toby, 1];

var criminals = ["Ian Brady", "Myra Hindley"];
var badPeople = [people, criminals];
criminals[0] = undefined;

console.log(badPeople[0][0]);

var fastPassQueue = ["Wizzy Spinner", "Wizard Coaster", "Dirty Wizard"];
var parkRides = [["Wizard Coaster", 10], ["Wizzy Spinner", 20], ["Dirty Wizard", 30]];
var wantsRide = "Wizzy Spinner";

function buildTicket(allRides, fastRides, pick){
if (fastRides[0] == pick){
	var passengerNumber = 0;
	var fastTicket = fastRides.shift();
	return function(name){
		passengerNumber++;
		console.log("Your fast pass ticket to " + fastTicket + " " + name +"!.\nYou are 			passenger #" + passengerNumber);
	}
}
else{
	for(var i = 0; i < allRides.length; i++){
		if(allRides[i][0] == pick){
			return function(){
	console.log("Your ticket to " + allRides[i][0] + " will cost £" + allRides[i][1]);
			};
		}
	}
}
}

var ticket = buildTicket(parkRides, fastPassQueue, wantsRide);
console.log(ticket("steven"));


