// Shelf Module; Has books and methods for books

// Requires comparison function module
var thingsHasThing = require("./thingbools.js");

// Returns constructor function for Shelf.
// Takes a:
  // "name" - string
  // "genres" - string or array of strings
  // "books" - book or array of books
module.exports = function Shelf(name, genres, books) {

  //////////////// Properties /////////////////
  this.name = name;
  this.genres = (genres instanceof Array) ? genres : [ genres ];  // Can contain multiple genres
  this.books = (books instanceof Array) ? books : [ books ];  // Can contain many books - even duplicates
  // Returns array of strings of book titles on shelf (independent of "available")
  this.bookTitles = function() {
    var bookTitles = [];
    for(var i = 0; i < this.books.length; i++) {
      bookTitles.push(this.books[i].title);
    }
    return bookTitles;
  };
  // Returns array of books that have "available" property set to true
  this.availableBooks = function() {
    var availableBooks = [];
    this.books.forEach( function(element, index, fullArray) {
      if(element.available) { availableBooks.push(element); }
    });
    return availableBooks;
  }

  //////////////// Methods /////////////////
  // Takes a book object and adds to the this.books array IF genre matches shelf
  this.addBook = function(book) {
    if (thingsHasThing(this.genres, book.genre)) {
      this.books.push(book);
      console.log("Book entitled " + book.title + " has been added.");
    } else { console.log("Wrong genre for this shelf. Book could not be added."); }
  };
  // Takes a book name string & removes book from the this.books array if matches; Returns removed book.
  this.removeBook = function(title) {
    if (thingsHasThing(this.bookTitles(), title)) {
      this.books.forEach( function(element, index, origArray) {
        if (title === element.title) {
          var returnVal = origArray.splice(index, 1);
          console.log("Book entitled " + returnVal[0].title + " has been removed.");
          return returnVal[0];
        }
      });
    } else { console.log("Book could not be removed. Please check that you entered a valid title match.") }
  };
};
