// Book Module

// Returns constructor function for Book.
// Takes three strings: "title", "author", "genre"
module.exports = function Book(title, author, genre) {

  //////////////// Properties /////////////////
  this.title = title;
  this.author = author || "Anonymous";
  this.genre = genre;
  this.available = true;

  //////////////// Methods /////////////////
  this.checkout = function() {
    this.available = false;
    console.log("The book is now checked out.")
  };
  this.checkout = function() {
    this.available = true;
    console.log("The book is now checked in.")
  };
};
