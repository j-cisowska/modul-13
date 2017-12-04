var fs = require('fs');

var getFiles = function() {
fs.readdir('./Zadanie 13.4', 'utf-8', function(err, files) {
    if (files.length) {
		fs.writeFile('info/copy.txt', files, function(err) {
        if (err) throw err;
        console.log('Zapisano!');
        fs.readFile('info/copy.txt', 'utf-8', function(err, data) {
            console.log('Nowy plik')
            });
		});
	});
	else { 
	return console.log(files);   
		};
}
/*fs.writeFile('info/copy.txt', files, function(err) {
        if (err) throw err;
        console.log('Zapisano!');
        fs.readFile('info/copy.txt', 'utf-8', function(err, data) {
            console.log('Nowy plik')
            console.log(data);
        });
    }); */
	
	
	//console.log('Zawartość folderu!');
	
	
	/*var fs = require('fs');

 
 fs.readdir(__dirname, 'utf-8', function(err, files) {
    if (err) return;
	files.forEach(function(f) {
        console.log('File: ' + f);
    });

	 fs.writeFile('./info/third.js', files.toString(), function(err) {
        if (err) throw err;
        console.log('Zapisano!');
        fs.readFile('./info/third.js', 'utf-8', function(err, data) {
            console.log('Dane po zapisie')
            console.log(data);
        });
    });
	

}); */