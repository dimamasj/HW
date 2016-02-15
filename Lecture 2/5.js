/**
 *
 * 5. Написать функцию, которая принимает одну строку (слово) в качестве аргумента.
 *  Эта функция должна возвращать упорядоченный массив, содержащий индексы всех прописных букв в строке.
 *
 * */


//var indexCapitalLetters = getIndexCapitalLetters('ЯкоТоРаЯ');
var indexCapitalLetters = getIndexCapitalLetters('Re!@#Ad %$#% #$& TesT');

console.log(indexCapitalLetters);

function getIndexCapitalLetters(str) {

    var strToArray = str.split(''); // преобразуем строку в массив
    var capitalArray = [];

    for (var i = 0; i < strToArray.length; i++) {
        if (isNaN(strToArray[i]) && strToArray[i] == strToArray[i].toUpperCase()) {   // проверяем, не является ли элемент числом (не преобразуется к числу) и сравниваем i-й элемент массива (букву) с ним же в верхнем регистре
            if ((strToArray[i].search(/[,.!?;:()&%$#@+=-]/) === -1)) {                // проверяем элемент массива на совпадение со знаками препинания
                capitalArray.push(i);                                                 // добавляем индекс в новый массив
            }
        }
    }
    return capitalArray;
}

