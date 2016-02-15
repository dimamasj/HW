/**
 *
 * 7. Напишите функцию, которая возвращает n наибольших элементов из входящего массива
 *
 * Пример:
 * func(2, [7,6,5,4,3,2,1]) //[6,7]
 *
 * */

//numbers(2, [7, 6, 5, 4, 3, 2, 1]);

function getNumbers(num, arr) {

    var sortedArray = arr.sort(function (a, b) { // сортируем массив от большего к меньшему
        return (a < b);
    });

    return sortedArray.slice(0, num);   //возвращаем новый массив с указанным количеством элементов
}

//var numbers = getNumbers(2, [7, 6, 5, 4, 3, 2, 1]);
var numbers = getNumbers(4, [1, 6, 9, 10, 65, 23, 7, 99]);
console.log(numbers);