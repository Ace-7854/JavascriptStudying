//** TIP  SWITCH TO EDITOR VIEW, pull JS tab to left, and open console, bottom left

// !!!! You Might be comfortable with the fundamentals, so feel free to skip down to Objects & Classes !!!!

// Stuck? Read the docs first, then ask me for help!
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

//******************* FUNDAMENTALS **************************************

//**STEP 1**: create a variable called `myName` and set it to the value of your actual name

// WRITE CODE BELOW THIS COMMENT
let myname = "Edi";
console.log(myname + " - myname");

//**STEP 2**: create a new variable called "age" and set it to your age. Print the type of this variable to the console.

// WRITE CODE BELOW THIS COMMENT
let age = 19;
console.log(age + " - is age");

//**STEP 3**: Set a new variable called sentence to a string that reads like: My name is Sam and I am 21 Years Old. Use String Interpolation to achieve this. Print this to the console when you are done.

// WRITE CODE BELOW THIS COMMENT
let sentence = "My name is " + myname + " and i am " + age + " Years Old";
console.log(sentence);

//**STEP 4**: create an IF/ELSE statement that logs the myName variable and the string " is an adult" if your age variable is 18 or over OR myName + " is not an adult" if your age variable is below 18 years old.

// WRITE CODE BELOW THIS COMMENT
if (age > 17) {
	console.log(myname + " is an adult");
} else {
	console.log(myname + " is not an adult");
}

//**STEP 5**: write another IF/ELSE statement that evaluates to true if the day is Tuesday.

// WRITE CODE BELOW THIS COMMENT
let day = "Tuesday";

if (day === "Tuesday") {
	console.log(true);
}
//**STEP 6**: Copy and Paste your Step 5 code below. Modify it so it uses the Ternary Operator

// WRITE CODE BELOW THIS COMMENT
day == "Tuesday" ? console.log(true) : console.log(false);
//**STEP 7**: Write a function called: daysOnEarth that returns the number of days that someone has been on the planet for. Hint: this function should take one parameter.

// WRITE CODE BELOW THIS COMMENT
function daysOnEarth(years = 10) {
	return years * 365;
}

daysOnEarth(66);

//**STEP 8**: Add a default parameter to your function in Step 7
//DONE
//**STEP 9**: Write a function of your choice using the arrow notation
// WRITE CODE BELOW THIS COMMENT
const daysOnEarthNV = (years) => {
	return years * 365;
};
//**STEP 10**: Write two more function using the arrow notation format.

// WRITE CODE BELOW THIS COMMENT
let logItem = (log) => {
	console.log(log);
};
let addNewItem = (item) => {
	console.log(item);
};

logItem("Error on line 32");
addNewItem("TicTacs");
//******************* CLASSES **************************************
//******************************************************************

//**STEP 1**: Create a class that represents any 'Animal' you choose
class Dog {
	constructor(breed, size) {
		this.breed = breed;
		this.size = size;
	}
}

//**STEP 2**: Make two seperate instances of your 'Animal' class
const Daisy = new Dog("Breed", "Size");
const Billy = new Dog("a breed", "2cm");

//**STEP 3**: Make a class that represents a 'Car', add some properties, some getters/setters, and two more functions of your choice

class Car {
	constructor(make, year) {
		this._make = make; //_ is private property
		this._year = year;
	}
	set make(make) {
		this._make = make;
	}
	set year(year) {
		this._year = year;
	}
	get make() {
		return this._make;
	}
	get year() {
		return this._year;
	}
}

//**STEP 4**: Make two seperate instances of your 'Car' class
const car1 = new Car("BMW", 1994);
const car2 = new Car("AUDI", 1996);
//******************* OBJECTS **************************************
//******************************************************************

const exampleObject = {
	exampleKey: "exampleValue",
	exampleKey2: "exampleValue2"
};

console.log(exampleObject.exampleKey);
console.log(exampleObject["exampleKey2"]);

//**STEP 1**: Look at the exampleObject literal, create an object literal representing you! Have at least 5 properties (e.g., name, hometown, favourite chocolate bar...etc)

const ObjectLiteral = {
	name: "Edi",
	hometown: "bournemouth",
	favouriteChocolate: "Milk Bar",
	favouriteGames: "Valorant",
	currentlyStudying: "Software Engineering",
	lovesMusic: true
};
//**STEP 3**: Log the entire object literal to the console.
console.log(ObjectLiteral);

//**STEP 4**: Log each individual properties from Step 1 using the dot notation or bracket notation.
console.log(ObjectLiteral.name);
console.log(ObjectLiteral.hometown);
console.log(ObjectLiteral.favouriteChocolate);
console.log(ObjectLiteral.favouriteGames);
console.log(ObjectLiteral.lovesMusic);

//**STEP 5**: create an object literal with exactly one function that takes one parameter
const me = {
	greet(p_name) {
		console.log(`Hey ${p_name}, nice to meet you`);
	}
};
me.greet("John");

//**STEP 6**: create an object literal that represents a movie character, give it some properites and a few functions that say famous quotes when called.
const mChar = {
	name: "Iron Man",
	ability: "Money/Sarcasm/Pissing off the government/CA",
	fighting: "Adaptable",
	court: "5 million $$ playboy",
	mCharDesc() {
		console.log(
			`${mChar.name} is a ${mChar.court}. Abilities range include ${mChar.ability}. Has a very ${mChar.fighting} fighting style.`
		);
	}
};

mChar.mCharDesc();

//**STEP 7**: Write another object literal that represents a food item. Give it a quantitiy and price (as if it were a product on a website)

const foodItem = {
	quantity: 2576,
	price: 32.56
};

console.log(foodItem);
//************* LOOPS *****************
//******************************************************************

//**STEP *1* Create a FOR loop that runs from 0 to 9.
for (let i = 0; i < 10; i++) {
	console.log(i);
}

//**STEP *2* Create a loop that runs WHILE i is less than 10.
let i = 0;
while (i < 10) {
	console.log(i);
	i++;
}

//**STEP *3* Create a loop that runs WHILE long as i is less than 10, but increase i by 2 each time.
i = 0;
while (i < 10) {
	console.log(i);
	i += 2;
}

//**STEP *4* Uncomment and Finish the loop below. Replace the ??? with code.

i = 99;
while (i > 0) {
	console.log(i + " bottles of beer on the wall");
	i--;
}

//**STEP *4* Modify the loop above so it is a DO WHILE loop
i = 99;
do {
	console.log(i + " bottles of beer on the wall");
	i--;
} while (i > 0);

//**STEP *5* Write a nested FOR LOOP
for (let i = 0; i < 2; i++) {
	for (let j = 0; j < 10; j++) {
		console.log(`i:${i},j:${j}`);
	}
}

//************* ARRAYS *****************
//******************************************************************

//**STEP *1*: What is the second element of this array? Print it to the console.

let lotteryNumbers = [44, 48, 22, 3, 4, 78];
console.log(lotteryNumbers[1]);

//**STEP *2*: Print the 0th element of this array to the console.
let hotelFloors = [
	"Ground Floor",
	"First Floor",
	"Second Floor",
	"Third Floor",
	"Executive Floor"
];

console.log(hotelFloors[0]);

//**STEP *3*: Add 3 animals to the array intialization below
let animals = ["Cat", "Dog", "Giraffe"];

//**STEP *4*: Print the whole array to the console
console.log(animals);

//**STEP *5*: Print the length of the animals array to the console
console.log(animals.length);

//**STEP *6*: Using push (see  link), add another animal to the array
animals.push("Elephant");
console.log(animals);

//**STEP *7*: Declare and initialize an array called 'Planets' with 5 string values
let planets = ["Mars", "Jupiter", "Mercury", "Venus", "Uranus"];

//**STEP *8*: Console.log each item in the 'Planets' array on a seperate line
for (let i = 0; i < planets.length; i++) {
	console.log(planets[i]);
}
//**STEP *9*: Using a loop, iterate through this array and console.log all of the people.
// WRITE CODE BELOW THIS COMMENT

let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
	console.log(people[i]);
}

//**STEP *10*: On the 'people' array above, use a new function you've found from reading the Arrays MDN pages.
console.log(people.indexOf("Devon"));
//finds the index of an item in an array but we can also ->
people.push("Devon");
console.log(people);
console.log(people.indexOf("Devon", 3));
// if we have one at index 2 we can start from the index after to find the next Devon
