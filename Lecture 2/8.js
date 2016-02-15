/**
 *
 * 8. Напишите функцию, которая находит все уникальные элементы в массиве
 *
 * */

var array = ['1', 2, 'test', 'qwe', 'lkjh', 'qwe', 'qwe', 'asdfg'];

function getUniqueItems(arr) {
    var newArray = [];
    arr = arr.sort(); // сортируем элементы массива как строки
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) { // одинаковые элементы будут стоять подряд, поэтому сравниваем соседние элементы
            newArray.push(arr[i]);                            // если элементы не равны, добавляем в новый массив
        }
    }
    return newArray;
}

var uniqueItems = getUniqueItems(array);
console.log(uniqueItems);