// Build Library Model with values for testing

// Set Constructor Functions
var Book = require("./book.js"),
  Shelf = require("./shelf.js"),
  Library = require("./library.js");


var book1 = new Book("js way", "Jen N", "drama");
var book2 = new Book("js and beyond", "Eeshan Kumar", "drama");
var book3 = new Book("js overnight", "Clint Nelson", "drama");
var book4 = new Book("callback hell", "Cole Nevins", "horror");
var book5 = new Book("js online", "Joe Plumb", "romance");
var book6 = new Book("js events", "Dave Randerson", "action");
var book7 = new Book("js perfecton", "Grace Hulse", "action");

var shelf1 = new Shelf("shelf1", "drama", book1); // pass genre string
var shelf2 = new Shelf("shelf2", [ "horror", "romance" ], book4); // pass genre array
var shelf3 = new Shelf("shelf3", "romance", book5); // pass one book
var shelf4 = new Shelf("shelf4", "action", [book6, book7]); // pass book array

var library1 = new Library(shelf1);
var library2 = new Library([shelf1, shelf2, shelf3, shelf4]);

////// A test suite would be really nice here.....
// Try adding books to shelf1 (valid) - Passes
shelf1.addBook(book2);
shelf1.addBook(book3);

// Try adding shelf2 to library1 (valid) - Passes
library1.addShelf(shelf2);

// Try adding existing shelf (invalid) - Passes
library2.addShelf(shelf1);

// Try removing book from shelf1 (valid) - Passes
shelf1.removeBook("js way");

// Try removing book that doesn't exist (invalid) - Passes
shelf1.removeBook("wrong book");

// Try removing shelf1 from library2 (valid) - Passes
library2.removeShelf("shelf1");

// Try removing shelf4 that isn't in library1 (invalid) - Passes
library1.removeShelf(shelf4);
