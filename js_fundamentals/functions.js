// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(no_of_children, partner, locale, job_title){
  alert("You will be a " + job_title + " in " + locale + ", and you will be married to " + partner + " with " + no_of_children + " children.");
};

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear,currentYear){var ageIfBDayPast = currentYear - birthYear;
  var ageIfBDayComing = ageIfBDayPast - 1;
  alert("You are either " + ageIfBDayPast + " or " + ageIfBDayComing + " years old.");
};
undefined
calculateAge(1986,2073);
undefined
calculateAge(-733,51000);
undefined
calculateAge(-100758,893278);
undefined

function calculateAge(birthYear){
  var currentYear = new Date().getFullYear();
  var ageIfBDayPast = currentYear - birthYear;
  var ageIfBDayComing = ageIfBDayPast - 1;
  alert("You are either " + ageIfBDayPast + " or " + ageIfBDayComing + " years old.");
};
undefined
calculateAge(-100758);
undefined

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age,amountPerDay){
  const MAX_AGE = 7000000;
  var amountNeededForRemainingLife = (MAX_AGE - age) * amountPerDay;
  alert("You will need " + amountNeededForRemainingLife + " to last you until the ripe old age of " + MAX_AGE + ".");
};
undefined
calculateSupply(27,80);
undefined

function calculateSupply(age,amountPerDay,unit,food){
  const MAX_AGE = 7000000;
  var amountNeededForRemainingLife = (MAX_AGE - age) * amountPerDay;
  alert("You will need " + amountNeededForRemainingLife + " " + unit + " of " + food + " to last you until the ripe old age of " + MAX_AGE + ".");
};
undefined
calculateSupply(27,80,"grams","spice");

// Bonus

function calculateSupply(age,amountPerDay,unit,food){
  const MAX_AGE = 7000000;
  var amountNeededForRemainingLife = Math.floor((MAX_AGE - age) * amountPerDay);
  alert("You will need " + amountNeededForRemainingLife + " " + unit + " of " + food + " to last you until the ripe old age of " + MAX_AGE + ".");
};
undefined
calculateSupply(27,80.9307,"grams","spice");
undefined

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".

function calcCircumference(radius){
  var circumference = Math.PI * (2 * radius);
  alert("The circumference is " + circumference);
};
undefined
calcCircumference(17)
undefined

// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcArea(radius){
  var area = Math.PI * Math.pow(radius, 2);
  alert("The area is " + area);
};
undefined
calcArea(17);
undefined

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

var tempC = 23;
function celsiusToFahrenheit(tempInC){ var tempInF = ((tempInC * 9) / 5) + 32;alert(tempInC + "˚C is " + tempInF + "˚F");};
undefined
celsiusToFahrenheit(tempC);
undefined


// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function fahrenheitToCelsius(tempInF){ var tempInC = ((tempInF - 32) * 5) / 9;alert(tempInF + "˚F is " + tempInC + "˚C");};
undefined
var tempF = 89;
undefined
fahrenheitToCelsius(tempF);
undefined