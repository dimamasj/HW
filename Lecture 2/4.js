/**
 *
 * 4. Напишите функцию, которая принимает массив чисел и возвращает пропущенное число
 * Пример:
 * [0, 5, 1, 3, 2, 9, 7, 6, 4]  // returns 8
 * [9, 2, 4, 5, 7, 0, 8, 6, 1]  // returns 3
 *
 * */

//var numbers = [0, 5, 1, 3, 2, 9, 7, 6, 4];
//var numbers = [-9, -2, -5, -7, -3, -8, 0, -6, -1, 1];
var numbers = [9, 2, 4, 5, 7, 0, 8, 6, 1];


function getMissingNumber(arr) {

    // получаем отсортированный массив чисел от меньшего к большему
    var sortedArray = arr.sort(function (a, b) {
        return (a > b)
    });

    // сравниваем каждое последующее число с предыдущим
    for (var i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] + 1 !== sortedArray[i + 1]) { // предыдущее число + 1 должно быть равно следующему числу в массиве
           return sortedArray[i] + 1;                    // если они не равны, значит число пропущено
        }
    }
}

var missingNumber = getMissingNumber(numbers);
console.log(missingNumber);
