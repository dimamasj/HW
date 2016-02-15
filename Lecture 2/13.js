/**
 *
 * 13. Реализовать функцию createObject(arrOfKeys, arrOfData), которая принимает аргументами два массива,
 * и возвращает объект, в котором названия ключей это строки из массива arrOfKeys,
 * а значения - элементы из массива arrOfData. В ключ, стоящий на первом месте массива arrOfKeys
 * должно быть записано значение, стоящее на первом месте arrOfData. Если данных меньше, чем ключей,
 * заполняй значения ключей как undefined.
 *
 * Пример работы:
 * createObject(['foo'], ['bar']); // {foo: 'bar'}
 * createObject(['foo', 'extra'], ['bar']); // {foo: 'bar', extra: undefined}
 *
 * */

function createObject(arrOfKeys, arrOfData) {
    var newObject = {};
    for (var i = 0; i < arrOfKeys.length; i++) {
        newObject[arrOfKeys[i]] = arrOfData[i]; // записываем свойства в новый обьект, где ключ = элументу из первого массива и значение = элементу из второго массива
    }
    return newObject;
}
/***
 * не устанавливаем значение ключей как undefined, так как они устанавливаются автоматически.
 */


var compositeObject = createObject(['foo'], ['bar']);
//var compositeObject = createObject(['foo', 'extra'], ['bar']);
console.log(compositeObject);