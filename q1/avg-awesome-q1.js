// JAVASCRIPT CODING CHALLENGE
// Write a function that takes an array of data in the below format.
// Assume that this function is run in a browser.
// It should update atag with id="awesome-index" with the average awesome-index of all programmers.
// Your solution should continue to work even if more people are added to the array.
// Write two versions, one using lodash (or underscore) and jQuery,
  // and one using only Javascript utilities native to the browser.

//// Note: jQuery should be loaded in the site if it isn't already:
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
//// Note Also: "lodash" package should be loaded for use with the following script:
// Alternatively, script may be added to the html:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"></script>
// Alternatively, script may be run to bring in Lodash capabilities:
// $.getScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js");



var testArray = [
  {
    name: 'Bob',
    occupation: 'programmer',
    awesomeIndex: 7,
  },
  {
    name: 'Alice',
    occupation: 'programmer',
    awesomeIndex: 9,
  },
  {
    name: 'Zaphod',
    occupation: 'President of the Galaxy'
  }
];

var extras = [
  // add even more people objects to testArray!
  {
    name: 'Bill',
    occupation: 'programmer',
    awesomeIndex: 1,
  },
  {
    name: 'Alexia',
    occupation: 'programmer',
    awesomeIndex: 3,
  },
  {
    name: 'Leroy',
    occupation: 'Ruler of the front yard'
  }
];

// Test it out
var expandedTest = testArray.concat(extras);
var origTest = avgAwesomeIndex(testArray);
var newTest = avgAwesomeIndex(expandedTest);



// Version1 - Lodash Version
// make a browser client function
// function should update a tag with id="awesome-index"

// Calculation average awesomeIndex of people objects that are programmers.
// Params: peopleArray: array of people objects
//         lodash: boolean to use lodash or not; defaults/corrects to false
function avgAwesomeIndex(peopleArray, lodash) {
  var isLodashLoaded = (typeof _ === "function");
  var lodashBool = (lodash && isLodashLoaded ) || false;
  var totalAwesome, avgAwesome, numProgs;
  totalAwesome = avgAwesome = numProgs = 0;
  switch(true) {

    case lodashBool:
      _.each(peopleArray, function(p, index, wholeArray){
        if(p.occupation === "programmer") {
          totalAwesome += p.awesomeIndex;
          numProgs++;
        }
      });
      break;

    default:
      for(var person, i = 0, tot = peopleArray.length; i < tot; i++) {
        p = peopleArray[i];
        if(p.occupation === "programmer") {
          totalAwesome += p.awesomeIndex;
          numProgs++;
        }
      }
  }

  avgAwesome = totalAwesome / numProgs;
  console.log("Average Awesome Index of Programmers: " + avgAwesome);
  $("#awesome-index").text(avgAwesome);
  // return avgAwesome;
}
