var os = require('os');

//odczytanie wartości z polskimi znakami
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();

        switch(instruction) {
              case '/info':
              process.stdout.write('OS: ' + process.env.OS + ', LANG: ' + process.env.LANG);
              break;
              case '/getTime':
              var timeNow = require('../times/time');
			  timeNow.print();
              break;
              case '/exit':
              process.stdout.write('Quitting the app!\n');
              process.exit();
              break;
              default: process.stdout.write('Wrong instruction!\n');
}


    }
});
