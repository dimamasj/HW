/**
 * 12. Есть структура вида:
 * [{
 * delta: 5,
 * value: 5
 * }, {
 * delta: -3,
 * value: 2
 * }, {
 * delta: 5,
 * value: 7
 * }, {
 * delta: 0,
 * value: 7
 * }]
 * Она подчиняется следющему правилу: каждый последующий объект массива содержит объект со свойствами delta и value.
 * delta - разница значений value с предыдущим объектом.
 * У тебя есть экземпляр структуры, и достоверно известно, что один (и только один) из элементов имеет неверное
 * значение delta и value, и что этот элемент не является ни первым, ни последним. Необходимо написать функцию
 * fixStruct(struct), которая изменяет неверное значение таким образом, чтобы его delta и value снова подчинялись
 * правилу, описанному выше.
 *
 * Пример работы:
 * var struct = [{
 * delta: 0,
 * value: 1
 * }, {
 * delta: 0,
 * value: 0
 * }, {
 * delta: 3,
 * value: 5
 * }];
 * console.log(fixStruct(struct));
 * /* [{
 * delta: 0,
 * value: 1
 * }, {
 * delta: 1,
 * value: 2
 * }, {
 * delta: 3,
 * value: 5
 * }]
 *
 * */


var struct = [{
    delta: 0,
    value: 1
}, {
    delta: 0,
    value: 0
}, {
    delta: 3,
    value: 5
}];
console.log(fixStruct(struct));

function fixStruct(struct) {
    for (var i = struct.length - 1; i > 1; i--) {
        if (struct[i - 1].value !== struct[i].value - struct[i].delta) {        // сравниваем value предыдущего элемента с разницей value и delta текущего элемента
            struct[i - 1].value = struct[i].value - struct[i].delta;            // присваиваем значение текущему элементу
            struct[i - 1].delta = struct[i - 1].value - struct[i - 2].value;    // присваиваем дельту текущему элементу
            return struct;
        }
    }
}