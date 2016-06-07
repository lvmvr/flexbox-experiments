// var http = require('http');

// const port = '8080';
// var fs = require('fs');

// fs.readFile('index.html', function (err, html) {
//   if (err) {
//       throw err; 
//   }  
// 	var server = http.createServer(function(req, res) {
// 		res.writeHeader(200, {"Content-Type": "text/html"});
// 		res.write(html);
// 		res.end();
// 	}).listen(port, function(){
// 		console.log("Server listening on: http://localhost:%s", port);
// 	});
// });

var http = require('http'),
    fs = require('fs');
const port = 8080;

http.createServer(function (req, res) {

    if(req.url === 'index.html'){ //req.url has the pathname, check if it conatins '.html'

      fs.readFile('index.html', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });

    }

    if(req.url === './scripts.js'){ //req.url has the pathname, check if it conatins '.js'

      fs.readFile('script.js', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });

    }

    if(req.url === './styles.css'){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile('style.css', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });

    }

}).listen(port, function(){
	console.log("Server running at http://localhost:%s", port);
});