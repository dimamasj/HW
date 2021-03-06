/**
 *
 *6. Напишите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список со отфильтрованными числами(строки будут удалены).
 * Пример:
 * [1,2,'a','b'] //[1,2]
 * [1,'a','b',0,15] //[1,0,15]
 *
 * */

//var array = [1,2,'a','b'];
var array = [1, 'a', 'b', 0, 15, '5'];

function sortNumbers(arr) {

    //если строковые числа считаются строкой и не выводятся
    return (arr.filter(function (item) {    // используем метод массива для фильтрации
        return typeof item === "number";    // возвращаем елемент, если его тип равен числу
    }));

    ////  если строковые числа тоже нужно выводить
    //return (arr.filter(function (item) { // используем метод массива для фильтрации
    //    return isNaN(item) === false;    // возвращаем элемент, если метод isNaN вернет false
    //}));
}

var sorted = sortNumbers(array);
console.log(sorted);