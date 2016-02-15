/**
 *
 * 11. Написать функцию contains(where, what). Если все элементы массива what содержатся в массиве where,
 * функция должна возвращать true. Пустой массив является подмножеством любого массива.
 * Порядок вхождения элементов в массив не имеет значения.
 *
 * Примеры:
 * contains([1,2,3], [3,2]); // true
 * contains([1,2,3], [3,2,1,2,3]); // true
 *
 * */

function contains(where, what) {

    for (var i = 0; i < what.length; i++) {
        if (where.indexOf(what[i]) === -1) {    // проверяем наличие индекса в массиве where по значению элемента what
            return false;
        }
    }
    return true;
}


//var result = contains([1, 2, 3], [3, 2, 9]); // false
var result = contains([1, 2, 3], [3, 2, 1, 2, 3]); // true
console.log(result);