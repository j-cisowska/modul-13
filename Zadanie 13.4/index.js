var fs = require('fs');

fs.readFile('./index.js', 'utf-8', function(err, data) {
    console.log('Plik index.js');
    console.log(data);
    fs.writeFile('info/index.js', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!');
        fs.readFile('info/index.js', 'utf-8', function(err, data) {
            console.log('Skopiowany plik index.js!')
            console.log(data);
        });
    });
});

fs.readFile('./package.json', 'utf-8', function(err, data) {
    console.log('Plik package.json');
    console.log(data);
    fs.writeFile('info/package.json', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!');
        fs.readFile('info/package.json', 'utf-8', function(err, data) {
            console.log('Skopiowany plik package.json!')
            console.log(data);
        });
    });
});