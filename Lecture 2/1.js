/**
 *
 * 1. Написать функцию, которая принимает дату (ГГГГ. ММ. ДД) и возвращает значение следующего вида
 * Год : год
 * Месяц: название месяца
 * День : день недели
 *
 * */

var date = '2083. 9. 12';



function getNewDate(date) {

    var newDate = new Date(date); // создаем обьект даты из строки
    var year = newDate.getFullYear(); // получаем год
    var month = newDate.getMonth(); // получаем номер месяца
    var day = newDate.getDay(); // получаем номер дня недели

    // массив с названием месяцев
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];

    // массив с названием дней недели
    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return {
        year : year,
        month : monthName[month],
        weekday : weekday[day]
    }
}

console.log(getNewDate(date));