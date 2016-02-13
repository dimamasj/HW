/*
 *
 * 5. Создать простую функцию - валидатор пароля, на входе она получает строку и возвращает true, если все условия выполнены и false, если нет.
 * Должны выполняться следующие условия:
 * минимум одна буква в верхнем регистре
 * минимум одна в нижнем
 * минимум одно число
 * должно быть минимум 8 знаков
 *
 * */

validation('paSsWord132');

function validation(password) {

    var strToArray = password.split('');

    //проверяем длину строки
    if (password.length < 8) {
        console.log(false);
        return;
    }

    // проверяем, есть ли хоть одна буква в нижнем регистре
    if (password == password.toUpperCase()) {
        console.log(false);
        return;
    }

    // проверяем, есть ли хоть одна буква в верхнем регистре
    if (password == password.toLowerCase()) {
        console.log(false);
        return;
    }

// проверяем на существование числа в пароле
    for (var i = 0; i <= strToArray.length; i++) {
        if (isNaN(strToArray[i]) == false) {    //только isNaN числового значения будет false
            console.log(true);
            return
        }
    }
    console.log(false)
}
