// Checks for an element within other elements; Returns true/falsy
// Takes params:
  // "things" - array
  // "thing"  - element of type in array

module.exports = function thingsHasThing(things, thing) {
  var returnVal;
  things.forEach(function(element, index, fullArray) {
    if (thing === element) { returnVal = true; }
  });
  return returnVal;
}
