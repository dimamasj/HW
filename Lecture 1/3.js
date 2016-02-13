/*
 *
 * 3. Функция doubleCheck(str), которая определяет, есть ли в строке два подряд идущих одинаковых символа или нет.
 *
 * */

doubleCheck('TerRrTT');

//Вариант 1:
function doubleCheck(str) {

    //var str = str.toLowerCase(); // если не важен регистр
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) { // сравниваем два символа, идущих подряд
            console.log(str[i] + ' ' + str[i + 1]);
            return;
        }
    }
}


//Вариант 2:
//function doubleCheck(str) {
//
//    //var str = str.toLowerCase(); // если не важен регистр
//    var strToArray = str.split(''); // делаем массив из строки
//    for (var i = 0; i < strToArray.length; i++) {
//
//        // сравниваем два соседних элемента
//        if (strToArray[i] == strToArray[i + 1]) { // сравниваем их
//            console.log(strToArray[i] + ' ' + strToArray[i + 1]);
//            return;
//        }
//    }
//}