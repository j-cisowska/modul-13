function secondsToMinutes(seconds) {

var mins = (seconds/60).toFixed(0);
var secs = seconds - (mins*60);
return mins + ' min ' + secs + ' sec ';
  
}
console.log(secondsToMinutes(125));

function secondsToHours(seconds) {

seconds = seconds.toFixed(0);

var hrs = Math.floor(seconds / 3600);
var mins = Math.floor(seconds % 3600 / 60);
var secs = Math.floor(seconds % 3600 % 60);
return hrs + ' hr ' + mins + ' min ' + secs + ' sec ';

}
console.log(secondsToHours(3700));


