var fs = require('fs');
var http = require('http');

 var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    if (request.method === 'GET' && request.url === '/welcome') { 
        fs.readFile('site/index.html', function(site, html) {
        response.write(html);
        response.end();
    });
    } else {
            response.statusCode = 404;
            response.write('<img src="https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png" alt="Error 404" title="Error">');
            response.end();
    }
});

server.listen(8080);
