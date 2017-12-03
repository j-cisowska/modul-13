var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/welcome') {
        fs.readFile('site/index.html', function(site, html) {
        response.write(html);
        response.end();
    });
    } else {
            response.statusCode = 404;
            response.write('<img src="https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png" alt="Error 404">');
            response.end();
    }
});

server.listen(8080);


/*fs.readFile('templates/start.html', function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });
	
	
	response.write('<h1>Welcome!</h1>');
        response.end(); */
