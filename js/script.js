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


var toby = "toby glitter";
var paedophiles = ["Gregg Pollock", "Derry Maher", undefined, "Gary Glitter", "Jimmy Saville", toby, 1];

var childKillers = ["Ian Brady", "Myra Hindley"];
var badPeople = [paedophiles, childKillers];
paedophiles[0] = undefined;

console.log(badPeople[0][0]);

