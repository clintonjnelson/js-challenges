// Create a simple http server using node. *
// This server should respond to a root-url request with a file called index.html.
// Do not use ExpressJS.
// Your code should have error checking and at least one callback.
// Put five or more html elements in your index.html.
// One of the elements should be a link to an external page.
// Things to research: node.js, callbacks, the fs module, the http module.

// Add native JS modules
var fs = require("fs");
var http = require("http");

// Declare/assign variables
var port = 3000;
var host = "localhost" || "www.example.com"
var allEndpoints = [ { path: "/", method: "GET" } ];

// Functions
//// Would probably use Object Literal to create the list of known endpoints...
//// But goal seems to be to display knowledge of using JS, so here's an alternate way:
function endpoint(path, method) {
  function Endpoint(path, method) {
    this.path = path;
    this.method = method;
  }
  allEndpoints.push( new Endpoint(path, method) );
}
function isReqUrlDefinedEndpoint(url) {
  var isDefined;
  allEndpoints.forEach(function(e, index, arr) {
    if(url === e.path) { isDefined = true; }
  });

  return isDefined;
}

// Specify/add known endpoints (name should correspond to a matching html file)
endpoint("/index", "GET");

// Start a http.server. On event, the function is passed.
var simpleNodeServer = http.createServer(function(req, resp) {

  // Server Functions
  function parseUrl(url) {
    if (url === "/") {
      return "index.html";
    } else {
      var urlArr =  url.split(".");
      return (urlArr[0].replace("/", "") + ".html");  // for "/index", returns "index.html"
    }
  }
  function writePage(status, content) {
    resp.writeHead(status, { "Content-Type": "text/html" });
    resp.write(content);
    resp.end();
  }
  function errorHTML(errorMsg) {
    return "<html><head></head><body><h3>" + errorMsg + "</h3></body></html>";
  }
  function errorHandling(validRequest, knownEndpoint, getRequest, errorCallback) {
    switch(false) {
      case !!validRequest:
        console.log("Request invalid!");
        writePage(400, errorCallback("We have no idea what you just sent our way..."));
        break;
      case !!knownEndpoint:
        console.log("Page Not Found");
        writePage(400, errorCallback("If this page ever existed, it had since vanished!"));
        break;
      case getRequest:
        console.log("Method: ", req.method);
        writePage(400, errorCallback("Sorry, we're unabashedly biased towards GET Requests."));
        console.log("Only GET Requests Allowed");
        break;
    }
  }

  // Check url request for known endpoint; if valid request, write content for response
  if ( req && isReqUrlDefinedEndpoint(req.url) && (req.method === "GET") ) {
    var respFile = parseUrl(req.url);

    // Grab the content of the requested file
    fs.readFile(respFile, function(error, data) {
      if (error) {
        console.log(error);
        throw error;
      }
      var pageContent = data;

      writePage(200, pageContent);
    });
  } else { errorHandling(req, isReqUrlDefinedEndpoint(req.url), (req.method === "GET"), errorHTML); }
});

// Start the server listening to any incoming request on //localhost:3000
// Pass a simple console notification callback that server is running
simpleNodeServer.listen(port, function consoleMemo() {
  console.log("Server working overtime on port: " + port);
});


