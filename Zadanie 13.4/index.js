var fs = require('fs');

fs.readFile('./book.txt', 'utf-8', function(err, data) {
    console.log('Cała książka');
    console.log(data);
    fs.writeFile('./book-chapter.txt', '\nProin in orci efficitur, vulputate nibh in, volutpat nibh. Sed sodales non massa sit amet rutrum. Mauris nisl est, efficitur sed porttitor non, eleifend vehicula orci.', function(err) {
        if (err) throw err;
        console.log('Zapisano!');
        fs.readFile('./book-chapter.txt', 'utf-8', function(err, data) {
            console.log('Jeden rozdiał!')
            console.log(data);
        });
    });
});