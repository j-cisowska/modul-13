var os = require('os');

//odczytanie wartości z polskimi znakami
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();

function getTime() {
 var hours = Math.floor(time / 3600);
 var minutes = Math.floor(time / 60);
}




      /*  switch(instruction) {
              case '/info':

              break;

              default: process.stdout.write('Wrong instruction!\n');
}*/


    }
});
