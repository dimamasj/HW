/*
 *
 * 2. Написать функцию, которая определяет, является число описанием себя или нет.
 * https://en.wikipedia.org/wiki/Self-descriptive_number
 * Например для 3211000 или 2020 вернет true, должна работать для всех двенадцатизначных и менее знаков чисел
 *
 * */


selfDescription(42101000);

function selfDescription(number) {

    var strToArray = String(number).split('');  // создаем массив из полученного числа

    // перебираем массив чисел и сравниваем индекс с количеством равных ему элементов в массиве
    for (var i = 0; i < strToArray.length; i++) {
        var counter = 0; // создаем счетчик
        for (var q = 0; q < strToArray.length; q++) {
            if (strToArray[q] == i) {   //если значение элемента массива равно индексу "i", увеличивем счетчик на 1
                counter++;
            }
        }
        if (counter != strToArray[i]) { //проверяем равенство значения счетчика со значением элемента с индексом "i"
            console.log('Not Self-descriptive number');
            return;
        }
    }
    console.log('Self-descriptive number');
}
