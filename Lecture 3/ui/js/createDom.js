// в данной работе хотел как-то организовать код,
// чтобы не городить все в одно полотно.


var body = document.body;

// массив строк с текстов (константа )) )
var TEXT = ['Ipsum is simply dummy text of the printing and ' +
'typesetting industry. Lorem Ipsum has been the i',
    'the cites of the word in classical literature, discovered the' +
    ' undoubtable source. Lorem Ipsum comes from',
    't is a long established fact that a reader will be distracted by' +
    ' the readable content of a ',
    'here are many variations of passages of Lorem Ipsum available, ' +
    'but the majority have suffered alteration',
    'The generated Lorem Ipsum is therefore always free ' +
    'from repetition, injected humour, or non-characteristic',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' +
    ' accusantium doloremque laudantium, totam rem'
];

// функция изменения стилей блока
function changeText(parent) {
    parent.style.fontStyle = 'italic';
    parent.firstChild.style.color = 'yellow';
    parent.lastChild.style.color = 'yellow';
}

// функция удаления отрибутов
function removeAttr(parent) {
    var length = parent.childNodes.length - 1; // длина псевдомассива
    for (var i = 0; i < length; i++) {
        if (parent.childNodes[i].hasAttribute('isDeleted')) {
            parent.removeChild(parent.childNodes[i]);
        }
    }
}

// функция изменения стилей соседних элементов по id='flag'
function changeSiblingBg() {
    var flag = document.getElementById('flag');
    flag.nextSibling.style.background = 'red';
    flag.previousSibling.style.background = '#674B28';
}

// функция для изменения текста в списке
function changeListText(parent) {
    var odd = parent.querySelectorAll('li:nth-child(odd)');
    odd[0].innerHTML = 'New Text';
    odd[1].innerHTML = 'New Text 2';
    odd[2].innerHTML = 'New Text 3';
}


function setListAttributes(parent) {
    var even = parent.querySelectorAll('li:nth-child(even)'),
        length = even.length - 1;
    for (var i = 0; i < length; i++) {
        even[i].setAttribute('newAttribute', 'true');
    }
    console.log(parent.querySelectorAll('li:nth-child(odd)'));
}


// изменение положения элементов навигации на странице
function changeBtnPosition() {
    var nav = document.getElementsByTagName('nav');
    nav[0].childNodes[0].offsetTop = '100px';
    nav[0].childNodes[1].clientTop = '100px';
    nav[0].childNodes[2].scrollTop = '100px';
}

// функция добавления стилей для элемента
function addStyles(element) {
    var styles = '';
    for (var key in element) {
        styles += key + ':' + element[key] + ';';
    }
    return styles;
}

// создаем элемент обертку
var wrap = document.createElement('div');
wrap.className = 'wrap';

// создаем элемент header
var header = document.createElement('header');
header.style.cssText = addStyles({ // добавляем стили созданному элементу
    'padding': '20px',
    'background': '#666',
    'position': 'relative'
});

// создаем элемент для основного контента
var mainContent = document.createElement('main');
mainContent.style.cssText = addStyles({ // добавляем стили созданному элементу
    'display': 'flex',
    'justifyContent': 'space-between',
    'padding': '25px',
    'background': '#ccc'
});

// создаем блок списка
var list = document.createElement('ul');

// создаем элемент для левого контента
var contentLeft = document.createElement('div');
contentLeft.style.cssText = addStyles({ // добавляем стили созданному элементу
    'width': '75%',
    'background': '#404441',
    'padding': '50px 25px',
    'display': 'inline-block',
    'margin-left': '25px'
});
contentLeft.className = 'main-content';

setTimeout(function () {

    // создаем элемент логотип
    var logoBlock = document.createElement('div');
    logoBlock.style.cssText = addStyles({ // добавляем стили созданному элементу
        'width': '250px',
        'display': 'inline-block'
    });

    // создаем элемент logo
    var logo = document.createElement('img');
    logo.style.cssText = addStyles({ // добавляем стили созданному элементу
        'max-width': '100%', 'height': 'auto'
    });
    logo.setAttribute('src', 'ui/img/test.jpg'); // устанавливаем атрибуте src
    logoBlock.appendChild(logo);

    var nav = document.createElement('nav');
    nav.style.cssText = addStyles({ // добавляем стили созданному элементу
        'max-width': '750px',
        'display': 'inline-block',
        'vertical-align': 'bottom',
        'margin-left': '150px'
    });

    for (var i = 0; i < 4; i++) {
        var btnElement = document.createElement('a');
        btnElement.className = 'nav-link';
        btnElement.innerHTML = 'btn ' + i;
        nav.appendChild(btnElement);
    }

    // добавляем созданные ноды в основной контент
    header.appendChild(logoBlock);
    header.appendChild(nav);
    wrap.appendChild(header);
    body.appendChild(wrap)


}, 2000);

setTimeout(function () {

    // создаем дату
    var time = new Date();
    var normalizeTime = time.toLocaleTimeString();
    var clock = document.createElement('div');
    clock.style.cssText = addStyles({ // добавляем стили созданному элементу
        'position': 'absolute',
        'top': '50px',
        'right': '50px'
    });
    clock.innerHTML = normalizeTime;
    header.appendChild(clock);

}, 4000);

setTimeout(function () {

    var asideBlock = document.createElement('aside');
    asideBlock.className = 'aside-block';

    // создаем элементы списка и записываем текст в эти элементы
    for (var i = 1; i < 7; i++) {
        var createLi = document.createElement('li');
        createLi.innerHTML = 'list' + i;
        list.appendChild(createLi);
    }

    //добавляем блоки вида <p></p> с текстом
    for (var j = 0; j < 6; j++) {
        var contentText = document.createElement('p');
        contentText.innerHTML = TEXT[j];
        contentLeft.appendChild(contentText);
    }

    // добавляем атрибут id для второго блока
    contentLeft.childNodes[1].setAttribute('id', 'flag');
    // устанавливаем дополнительные атрибуты для блока 3
    contentLeft.childNodes[2].setAttribute('isDeleted', 'true');
    // устанавливаем дополнительные атрибуты для блока 4
    contentLeft.childNodes[3].setAttribute('isDeleted', 'true');

    // добавляем созданные ноды в основной контент
    asideBlock.appendChild(list);
    contentLeft.appendChild(contentText);
    mainContent.appendChild(asideBlock);
    mainContent.appendChild(contentLeft);
    wrap.appendChild(mainContent);

}, 6000);


setTimeout(function () {
    changeText(contentLeft); // изменяем вид текста основного контента
}, 8000);


setTimeout(function () {

    // выбираем элемент на странице
    var newList = document.getElementsByTagName('ul');

    //Вариант 1 :
    //копирование всех элементов в новый массив
    var listRevers = []; // пустой массив для перевернутого списка
    for (var i = 0; i < newList[0].childNodes.length; i++) {
        // добавляем полученные элементы в новый массив
        listRevers.push(newList[0].childNodes[i].outerHTML);
    }
    // переворачиваем массив и записываем в DOM
    list.innerHTML = listRevers.reverse().join(' ');


    ////Вариант 2 :
    //// производим манипуляции с самим DOM
    //for (var i = 0; i < newList[0].childNodes.length; i++) {
    //    newList[0].insertBefore(newList[0].childNodes[i], newList[0].childNodes[0]);
    //}


}, 10000);

setTimeout(function () {

    // создаем элемент footer
    var footer = document.createElement('footer');
    footer.style.cssText = addStyles({ // добавляем стили созданному элементу
        'background': '#404441',
        'padding': '25px',
        'margin': '0 25px'
    });

    // добавляем блоки с текстом в footer
    for (var i = 0; i < 2; i++) {
        var footerInnerBlock = document.createElement('p');
        footerInnerBlock.innerHTML = TEXT[i];
        footer.appendChild(footerInnerBlock);
    }

    wrap.appendChild(footer);

}, 12000);


setTimeout(function () {
    removeAttr(contentLeft); // удаляем элементы с атрибутом isDeleted
}, 14000);


setTimeout(function () {
    changeSiblingBg(); // изменяем соседние элементы
}, 16000);

setTimeout(function () {
    changeListText(list); // меняем текст в левом списке основного контента
}, 18000);

setTimeout(function () {
    setListAttributes(list); // устанавливаем новые атрибуты
}, 20000);


setTimeout(function () {
    //меняем позицию элементов (не получилось толком увидеть результат (( )
    changeBtnPosition(list);
}, 20000);


// интересует мнение по поводу создания мини конструктора для элемента.
// в которой прилетает object со всеми параметрами и на выходе выдает готовый элемент
//
// пример :
//function createElement() {
//
//    var element;
//
//    for (var i = 0; i < arguments.length; i++) {
//
//        if (arguments[i].tag) {
//            element = document.createElement(arguments[i].tag);
//        }
//
//        if (arguments[i].classes) {
//            element.className = arguments[i].classes;
//        }
//
//        if (arguments[i].styles) {
//            element.style.cssText = addStyles(arguments[i].styles);
//        }
//
//        if (arguments[i].attr) {
//            element.setAttributes = addAttributes(arguments[i].styles);
//        }
//    }
//    return element;
//}
//
//function  addStyles () {
//    ...
//   return;
//}
//
//function  addAttributes () {
//    ...
//   return;
//}
//
// пример создания элемента
//var header = createElement({
//    'tag': 'img',
//    'styles': {'maxWidth': '100%', 'height': 'auto'},
//    'class': 'class-1 class-2'}
//});
