/*
 *
 * 1.Написать функцию, которая возвращает следующий ближайший квадрат переданного числа или -1, если такого нет
 *   findNextSquare(121) --> 144
 *   findNextSquare(625) --> 676
 *   findNextSquare(114) --> -1
 *
 * */

console.log(findNextSquare(121));

function findNextSquare(num) {

    var square = Math.sqrt(num);  // вычисляем квадратный корень

    // получаем квадрат следующего числа
    if (parseInt(square) == square) {   // сравниваем полученное число с ним же, но "обрезаным" до первой точки
        var nextSqrt = Math.pow(square + 1, 2);   // возводим в квадрат следующее натуральное число
        return (nextSqrt);
    }
    else {
        return ('-1'); // возвращаем -1 если целого квадратного корня нет
    }
}
