// Taking the module for creating a server //
var h=require('http');

// creating a server //
var server=h.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("<h1>Hello from Node JS</h1>");
	res.end();
});

// assigning port to the server //
server.listen(9000);
console.log("Server started at port 9000");