/*
 *
 * 8. Написать скрипт, который на входе получает число-количество бутылок пива, и возвращает песню вида:
 * 99 bottles of beer on the wall, 99 bottles of beer.
 * Take one down and pass it around, 98 bottles of beer on the wall.
 * 98 bottles of beer on the wall, 98 bottles of beer.
 * Take one down and pass it around, 97 bottles of beer on the wall.
 * // и так далее, до конца
 * 1 bottle of beer on the wall, 1 bottle of beer.
 * Take one down and pass it around, no more bottles of beer on the wall.
 * No more bottles of beer on the wall, no more bottles of beer.
 * Go to the store and buy some more, 99 bottles of beer on the wall.
 *
 * */

Song(20);

function Song(num) {
    var song = '';  // создаем пустую строку для целой песни
    for (var i = num; i > 0; i--) { //  уменьшаем количество бутылок
        var bottle = i - 1; // уменьшаем значение на 1 для сохранения значения "i"
        if (i == 1) {
            song += i + " bottle of beer on the wall, 1 bottle of beer. \n" +
                "Take one down and pass it around, no more bottles of beer on the wall.\n" +
                "No more bottles of beer on the wall, no more bottles of beer.\n" +
                "Go to the store and buy some more, " + num + " bottles of beer on the wall.\n";
        } else {
            song += i + " bottles of beer on the wall, " + i + " bottles of beer. \n" +
                "Take one down and pass it around, " + bottle + " bottles of beer on the wall.\n"; // конкатенируем текст для получения песни в виде одной строки
        }
    }
    console.log(song);
}
