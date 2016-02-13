/*
 *
 * 4. Написать функцию, которая считает сумму всех чисел между двумя переданными, включая их самих.
 * Можно передавать отрицательные числа. Если передать два одинаковых числа, выдаст одно из них.
 *
 * */

getSum(2, 7);

function getSum(num1, num2) {

    var sum = 0;
    var numMin = num1;
    var numMax = num2;

    // проверка на тип
    if (typeof num1 != "number" || typeof num2 != "number") {
        console.log('Some argument is not a number');
        return;
    }

    // проверяем равны ли они друг другу
    if (num1 == num2) {
        console.log(num1);
        return;
    }

    // меняем местами значения, если первое число больше второго
    if (num1 > num2) {
        numMin = num2;
        numMax = num1;
    }

    for (var i = numMin; i <= numMax; ++i) {
        sum += i;   // суммируем все числа между переданными
    }
    console.log(sum);
}