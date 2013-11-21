// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

function Recipe(name, servings, ingredients) {
  this.name = name;
  this.servings = servings;
  this.ingredients = ingredients;
  this.display = function (){
    console.log(this.name);
    console.log(this.servings);
    console.log(this.ingredients);
  };
};

greenSmoothie = new Recipe("Green Smoothie", "1", ["kale", "banana", "spirulina", "hemp", "maca", "juice", "almond milk"])
greenSmoothie.display();

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

function Book(title, author, alreadyRead) {
  this.title = title;
  this.author = author;
  this.alreadyRead = alreadyRead;
  this.display = function() {
    if (alreadyRead) {
      console.log("You have already read " + this.title + " by " + this.author + ".");
    } else {
      console.log("You have not yet read " + this.title + " by " + this.author + ".");
    };
  };
};

var library = {
  books: [],
  addBook: function(book) {
    this.books.push(book);
  },
  display: function() {
    for (var i = 0; i < this.books.length; i++) {
      this.books[i].display();
    }
  }
};

library.addBook(new Book("Snow Crash", "Neal Stephenson", false));
library.display();

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var favouriteMovie = {
  title: "The Neverending Story",
  duration: 95,
  stars: ["Atreyu", "Artax", "Falcor"],
  display: function(){
    console.log(this.title + " lasts for " + this.duration + ".");
    console.log("Stars: " + this.stars.join(", ") + ".");
  }
};

favouriteMovie.display();