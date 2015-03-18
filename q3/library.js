// Library Module - Has shelves & methods for shelves

// Requires comparison function module
var thingsHasThing = require("./thingbools.js");

module.exports = function Library(shelves) {
  //////////////// Properties /////////////////
  this.shelves = (shelves instanceof Array) ? shelves : [ shelves ];
  this.shelfNames = function() {  // returns array of strings of all shelf names
    var returnVal = [];
    for(var i = 0; i < this.shelves.length; i++) {
      returnVal.push(this.shelves[i].name);
    }
    return returnVal;
  };

  //////////////// Methods /////////////////
  // Takes a shelf & pushes it to the this.shelves array
  this.addShelf = function(shelf) {
    if ( !thingsHasThing(this.shelfNames(), shelf.name) ) {
      this.shelves.push(shelf);
      console.log("Shelf named " + shelf.name + " has been added.");
    } else { console.log("There's already a shelf by that name. Shelf could not be added. Please change shelf name."); }
  };

  // Takes a shelf name string & removes shelf from the this.shelves array if matches; Returns removed shelf.
  this.removeShelf = function(shelfName) {
    if (thingsHasThing(this.shelfNames(), shelfName)) {
      this.shelves.forEach( function(element, index, origArray) {
        if (shelfName === element.name) {
          var returnVal = origArray.splice(index, 1);
          console.log("Shelf named " + returnVal[0].name + " has been removed.");
          return returnVal[0];
        }
      });
    } else { console.log("Shelf could not be removed. Please check that you entered a valid shelf name match."); }
  };
};
