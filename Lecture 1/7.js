/*
 *
 * 7. Написать функцию, которая на входе получает число, на выходе для 0 и 1 возвращает ’’”, для остальных чисел строку вида
 * для 6:
 * 22
 * 4444
 * 666666
 *
 * для 10:
 * 22
 * 4444
 * 666666
 * 88888888
 * 10101010101010101010
 *
 * для 5(берем ближайшее меньшее четное):
 * 22
 * 4444
 *
 * */


checkNum(10);

function checkNum(num) {

    //возвращаем пустую строку для 0 или 1
    if (num == 0 || num == 1) {
        console.log('');
        return;
    }

    // вывод четных чисел
    for (var i = 2; i <= num; i++) { // перебираем числа от 2 до num
        var x = ''; // создаем пустую строку
        if ((i % 2) == 0) { // проверяем число на четность
            for (var n = 1; n <= i; n++) {
                x += i; // добавляем в строку четное число столько раз, сколько равно его значение
            }
            console.log(x);
        }
    }
}