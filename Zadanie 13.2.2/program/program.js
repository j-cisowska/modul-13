var os = require('os');

//odczytanie wartości z polskimi znakami
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();

function secondsToHms(time) {
    var components = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
];

var id = components.join("");
		
	time = Number(time);
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time % 3600 / 60);
    var seconds = Math.floor(time % 3600 % 60);

    var hoursDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}



      /*  switch(instruction) {
              case '/info':

              break;

              default: process.stdout.write('Wrong instruction!\n');
}*/


    }
});
