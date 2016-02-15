/**
 *
 * 9. Напишите функцию, которая удаляет из массива все повторяющиеся элементы
 *
 * */


var array = ['1', 2, 'test', 'qwe', 'lkjh', 'строка', 'строка', 'qwe', 'qwe', 'asdfg'];

function delRepeatItems(arr) {

    //  выбираем по очереди каждый элемент массива и сравниваем с оставшимися элементами
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) { // сравниваем индекс
            arr.splice(i--, 1); // удаляем элемент из массива и уменьшаем счетчик итераций на 1
        }
    }
    return arr;
}

var newArray = delRepeatItems(array);
console.log(newArray);

