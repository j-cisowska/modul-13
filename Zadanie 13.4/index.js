var fs = require('fs');

 fs.readdir(__dirname, 'utf-8', function(err, files) {
    if (err) return;
	console.log('Zawartość folderu!');
	files.forEach(function(f) {
        console.log('File: ' + f);
    });

	 fs.writeFile('./info/zawartosc-katalogu.txt', files.toString(), function(err) {
        if (err) throw err;
        console.log('Zapisano plik txt z zawartością folderu!');
        fs.readFile('./info/zawartosc-katalogu.txt', 'utf-8', function(err, data) {
            console.log('Takie pliki są w folderze')
            console.log(data);
        });
    });
	

});