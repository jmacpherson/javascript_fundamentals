// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1,num2){if(num1 > num2){console.log("The greater number is " + num1);}else if(num2 > num1){console.log("The greater number is " + num2);}else{console.log("The numbers are equal");};};
undefined
greaterNum(17,17);
The numbers are equal VM7631:2
undefined
greaterNum(17,19);
The greater number is 19 VM7631:2
undefined
greaterNum(17,111);
The greater number is 111 VM7631:2
undefined
greaterNum(17,11);
The greater number is 17 VM7631:2
undefined

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(language){if(language === "es"){return "Hola a todos.";}else if(language === "fr"){return "Bonjour tout le monde.";}else if (language === "de"){return "Hallo, Welt.";}else{return "Hello, World.";};};
undefined
helloWorld("es");
"Hola a todos."
helloWorld("fr");
"Bonjour tout le monde."
helloWorld("de");
"Hallo, Welt."

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score){if(score >= 80){return "A";}else if (score >= 70){return "B";}else if(score >= 60){return "C";}else if (score >= 50){return "D";}else{return "F";};};
undefined
assignGrade(93);
"A"
assignGrade(53);
"D"
assignGrade(33);
"F"
assignGrade(63);
"C"
assignGrade(73);
"B"

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, num){if(num===1){return num + " " + noun;}else{return num + " " + noun + "s"};};
undefined
pluralize("cat",73);
"73 cats"
pluralize("cat",1);
"1 cat"


