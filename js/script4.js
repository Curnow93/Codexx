//js best practices

var isArthur = false;
var isClown = false;
var weapon = isArthur ? "Excalibur" : "Longsword";
console.log(weapon);
var item = isClown ? "Red nose" : "Nothing";
console.log(item);
var isRat = true;
var isKing = true;
console.log("Current rat: " + (isRat && isKing ? "Templeton" : "Not king rat."));
var isCriminal = true;
var isDerry = true;

isDerry && isCriminal ? function(){
alert("Welcome Derry!");
console.log("Welcome Derry!");
}()
:
function(){
alert("You're not Derry...");
}();

var prisonSentence;
var isGuilty = true;

isDerry && isCriminal ? (prisonSentence = 18): (prisonSentence = 0);
console.log(prisonSentence);

var armory = {
	addSword: function(sword){
		this.swords = this.swords || [ ];
		this.swords.push(sword);
	}
};
	
armory.addSword("Scimitar" && "Longsword");
armory.addSword("Axe" && "Crossbow");
armory.addSword("Knife");
armory.addSword("Pickaxe");

for(var i = 0, x = armory.addSword.length; i <= x; i++){
	console.log(armory.swords[i]);
}

function signalFlare(ID, startingLogs){
	this.fireID = ID;
	this.logsLeft = startingLogs;
}

signalFlare.prototype = {

addLogs: function(numLogs){
	this.logsLeft += numLogs;
},
lightFire: function(){
	alert("Whooosh!");
},
smokeSignal: function(){
	if(this.logsLeft < this.message.length / 10){
	alert("not enough fuel to light this");
	}
}

}

var fireOne = new signalFlare(1, 30);

fireOne.addLogs(8);

console.log(fireOne);

console.time("Time to add");

console.time("Time to declare");

var list = document.querySelector(".menu"),
newList = ["Home", "Menu", "Services", "About"],
fragment = document.createDocumentFragment(),
element;
console.timeEnd("Time to declare");

for (var i = 0, x = newList.Length; i < x; i++){
	element = document.createElement("li");
	element.appendChild(document.createTextNode(newList[i]));
	fragment.appendChild(element);
}
list.appendChild(fragment);

console.timeEnd("Time to add");

/*var noBPtest = new speedTest(noBP, listForTests);
var noBP = function(){
var rightNow = +new Date();
console.log(rightNow);

var newSection = ["<figure class='img-container'>", "<img src='../img/brady.jpg' rel='image' alt='psychopathcentral'>", "<figcaption>","<h2>Psychopath Central</h2>", "</figcaption>", "<time>","</time>", "</figure>"],

page = newSection.join("\n"),
portfolio = document.getElementsByClassName("portfolio");

}*/

function speedTest(testImplement, testParams, repetitions){
	this.repetitions = repetitions || 10000;
	this.testImplement = testImplement;
	this.testParams = testParams;
	this.average = 0;
}

speedTest.prototype = {

startTest: function(){

var beginTime, endTime, sumTimes = 0;
for(var i = 0,x = this.repetitions; i < x; i++){
	beginTime = +new Date();
	this.testImplement(this.testParams);
	endTime = +new Date();
	sumTimes += endTime - beginTime;
}
this.average = sumTimes / this.repetitions;

console.log("Average repetition:" + this.average);
}
}

try{
	var newHallOfFame = ["Dark Frostring", "Render Tallborn"];
	if(list === undefined){
		throw new ReferenceError();
	}
	if((list instanceof Array) === false){
		throw new TypeError();
	}

list.concat(newHallOfFame);
}
catch(error){
alert("fuck" + error);
if (error instanceof ReferenceError){
alert(error + "\n" + "This is a reference error.");
}
else if (error instanceof TypeError){
alert(error + "\n" + "This is a type error.");
}
}
finally{
console.log("Weather");
}

console.log(0.1 + 0.1);
