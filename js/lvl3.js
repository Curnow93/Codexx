//L3 function expressions

//function declarations - builds in memory
function sumOfSquares(a, b){
	return a*a + b*b;
}

//function expression - executes when reached
var diff = function diffOfSquares(a, b){
	return a*a - b*b;
};

//anonymous function
var times = function(a, b){
	return (a*a) * (b*b);
};

function squaredSquares(input){
	return input * input;
}

diff(9, 3); //calls function expression
sumOfSquares(4, 4); //calls function declaration
squaredSquares(diff(9,2)); //inputs result from expression to declaration

//mapping function expressions

var numbers = [12, 3, 4, 6, 8, 6, 9];
var squared = numbers.map(squaredSquares); //map passes in each number in array to squaredSquares returning itself squared.
var altMapCubed = numbers.map(function(arrayCell){
	return arrayCell * arrayCell * arrayCell;
}); //passes in each cell to a function that cubes it

console.log(altMapCubed);
console.log(squared);

numbers.push(8, 4, 5, 6); //adds new numbers to the end of an array
var first = numbers.shift(); //shift takes away and returns the first item of the array

//using .shift() to give passenger fast pass to ride

var allPasses = [["Wizard Coaster", 20], ["Potter Cave", 30], ["Toad Twister", 35]];
var fastPasses = ["Wizard Coaster", "Potter Cave", "Toad Twister"];

function ticketMachine(fast, all, pick){
	if(all[0][0] == pick){ //checks first cell 1 of cell 1 in array matches ticket choice
		var fastTicket = fast.shift(); //stores first cell of array in variable
		return function(){
		alert("Quick!, your fast pass ticket to " + fastTicket + "!");
		}
	}
	else{
		for(var i = 0; i < all.length; i++){ //loops through allPasses
			if(all[i][0] == pick){	//to check if the first cell of each cell is choice
				return function(){
					alert("Here is your ticket to " + all[i][0] + 						" your waiting time is " + all[i][1] + " minutes.");
				}
			}
		}
	}
}

var choice1 = "Potter Cave"; //first ticket - normal
var choice2 = "Wizard Coaster"; //second ticket - fast pass
var choice3 = "Toad Twister";
var ticket1 = ticketMachine(fastPasses, allPasses, choice1); //builds ticket
var ticket2 = ticketMachine(fastPasses, allPasses, choice2);
ticket2(); //calls ticket
ticketMachine(fastPasses, allPasses, choice2)(); //IIFE, calls functions with assigning it
ticketMachine(fastPasses, allPasses, choice3)();

//closures

function coveTicketMaker(transport){
	var passengerNum = 0;
	return function(name){
	passengerNum++;
		alert("Here is your ticket by " + transport + ". \n welcome to cold closures cove " + name + ".\n You're passenger number " + passengerNum);
	}
}//holds name and transport in the inner function

var subMarineTicket = coveTicketMaker("Submarine");
//(name) is not defined yet...
subMarineTicket("Steven"); //argument is passed into inner function and saved

function torpedo(name, passengerArray){
	var torpedoAssignment;
	for (var i = 0; i < passengerArray; i++){
		if(passengerArray[i] == name){
			torpedoAssignment = function(){
				alert("Ahoy, " + name + " man your post at torpedo #" + (i+1));
			};
		}
	}
	return torpedoAssignment;	
}

var subPassengers = ["Oreo", "Fudge", "Choco", "Coffee", "Cocoa"];
torpedo("Choco", subPassengers);

//hoisting

function numberSquared(num){
	var squared = function(){ //squared is undefined, function declaration is hoisted
		return num * num;
	};
	function print(){
		alert(squared);
	}
}
/*^this^ runs like this:
function numberSquared(num){
	var squared = undefined;
	function print(){
		alert(squared);
	}
	squared = function(){
		return num * num;
	};
}*/

//function expressions do not get hoisted whereas function declarations do.

function numberCubed(num){
	return cube;
	var cube = function(){
		return num * num * num;
	};
} // does not work as function expression is not hoisted.

//objects

var pouchItems = ["Teeth", "Flashlight", "Knife"];
var fairies = {color: "blue", height: 20, width: 10, mana: 8, pouch: pouchItems};
console.log(fairies.mana); //use dot notation to access properties
fairies.pouch.push("Gun");
console.log(fairies.pouch);
console.log(fairies["color"]); //object can be treated like an array but with strings
fairies["# of stops"] = 4; //no property is found so it creates one.
console.log(fairies["# of stops"]);
delete fairies.width;
fairies["# of books"] = 0;
console.log(fairies);

function addBook(item, name, writer){
	item["# of books"]++;
	item["book" + item["# of books"]] = {title: name, author: writer};
}

addBook(fairies, "Harry Potter", "JK Rowling");
console.log(fairies.book1);
console.log(fairies["# of books"]);

//object of objects

var aquarium = {
nemo: {type: "fish", species: "clownfish", length: 3.3},
dory: {type: "fish", species: "blue tang", length: 4.5},
corn: {type: "food", length: 20},
marlin: {type: "fish", species: "clownfish", length: 6},
castle: {type: "object", material: "glass", length: 15},
addCritter: function(name, type, species, length){
	this[name] = {type: type, species: species, length: length};
}
};

aquarium.addCritter(aquarium, "melvin", "fish", "clownfish", 7);
console.log(aquarium); 

aquarium.takeOut = function(name){
	this[name].name = name;
	var temp = this[name];
	delete this[name];
	return temp;
};

var fishOutOfWater = aquarium.takeOut("marlin");
console.log(fishOutOfWater);

//for in loop

aquarium.countFish = function(){
	var numFish = 0;
	for (var key in this){
		if(this[key].type == "fish"){
		numFish++;
		}
	}
	return numFish;
}
//for in loop searches each key in it's object then increments numFish if the type is fish


