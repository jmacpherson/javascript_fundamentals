// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var locale = "the Universe and beyond";

var no_of_children = 17;

var partner = "Nuit";

var job_title = "Magician";

alert("You will be a " + job_title + " in " + locale + ", and you will be married to " + partner + " with " + no_of_children + " children.");

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var year = new Date();

year = year.getFullYear();

var birth_year = 1984;

var ageIfBirthdayPassed = year - birth_year

var ageIfBirthdayNotPassed = ageIfBirthdayPassed - 1;

alert("They are either " + ageIfBirthdayPassed + " or " + ageIfBirthdayNotPassed + ".");

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 27;
undefined
var maximumAge = 7000000;
undefined
var estimatedServingsOfPadThaiPerDay = 1;
undefined
var lifeTimeSupplyOfPadThai = (maximumAge - currentAge) * estimatedServingsOfPadThaiPerDay;
undefined
alert("You will need " + lifeTimeSupplyOfPadThai + " servings of Pad Thai to last you until the ripe old age of " + maximumAge + ".");
undefined

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 17;
undefined
var circumference = 2 * Math.PI * radius;
undefined
circumference
106.81415022205297
var area = (Math.PI * radius) * (Math.PI * radius)
undefined
area
2852.3156719148246

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var tempInC = 23;
undefined
var tempInF = ((tempInC * 9) / 5) + 32
undefined
tempInF
73.4
alert(tempInC + "˚C is " + tempInF + "˚F.");
undefined


var tempInF = 89;
undefined
var tempInC = ((tempInF - 32) * 5) / 9;
undefined
tempInC
31.666666666666668
alert(tempInF + "˚F is " + tempInC + "˚C.");
undefined
