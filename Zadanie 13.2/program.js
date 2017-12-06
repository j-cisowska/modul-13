var os = require('os');

//odczytanie wartości z polskimi znakami
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();

        switch(instruction) {
              case '/info':
              process.stdout.write('OS: ' + process.env.OS + ', LANG: ' + process.env.LANG);
              break;
              case '/getOSinfo':
              var OSinfo = require('./modules/OSInfo');
              OSinfo.print();
              break;
              case '/exit':
              process.stdout.write('Quitting the app!\n');
              process.exit();
              break;
              default: process.stdout.write('Wrong instruction!\n');
}


    }
});