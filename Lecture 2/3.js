/**
 *
 * 3.	При разработке веб-сайта, вы обнаружите, что у некоторых пользователей есть проблемы входа в систему.
 *  Поискав по коду, вы обнаружили, что все логины, заканчивающиеся на "_" создают проблемы. Итак, вы хотите,
 *  написать функцию, которая принимает массив пар логина и электронной почты, и выводит массив всех пар
 *  логин-электронная почта входного массива, которые заканчиваются на "_".
 *
 * */

var users = [
    {
        login: 'login_',
        email: 'login@mail.com'
    },
    {
        login: 'vasiliy',
        email: 'vasiliy@mail.com'
    },
    {
        login: 'test_',
        email: 'test@mail.by'
    }
];

function getTroubleUsers(userArray) {
    return ( userArray.filter(function (user) {
        return user.login.lastIndexOf('_') + 1 === user.login.length;
    }));
}

var troubleUser = getTroubleUsers(users);
console.log(troubleUser);