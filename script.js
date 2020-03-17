function menuLink() {
const MENU = document.getElementById('menu');
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
    event.target.classList.add('nav_active');
});
}
menuLink() // вызываем ф-цию иначе скрипт не будет работать на странице

// MENU.classList.remove('active')  - удалили селектор у соответсвующего элемента
// MENU.removeAttribute('class') - у элемента будет удален атрибут class со всеми значениями (селекторами)




const PORTFOLIO_LIST = document.getElementById("portfolio-list"); 
// Активные табы
function menuTab() {
    PORTFOLIO_LIST.addEventListener('click', (event) => {
        event.preventDefault();
        if ( event.target.tagName === "A") {
        PORTFOLIO_LIST.querySelectorAll('a').forEach(el => el.classList.remove('li-active'));
        event.target.classList.add('li-active');
        }
    });
    }
    menuTab();



// Если выбирать по селектору document.querySelector('portfolio__items') НЕ РАБОТАЕТ! ПОЧЕМУ? - ТОЧКУ СТАВИМ ('.portfolio__items')
const PORTFOLIO = document.getElementById('portfolio')
const IMG = document.querySelector('img')
//Почему не работает el.classList.remove('portfolio_link') - МОЖЕТ обводка задается для img? - да для самого внутреннего элемента 
// Так как размеры img и a совпадают можно перекинуть событие на а ссылке а задать h - 100% и inline-block

function imgBorder() {
PORTFOLIO.addEventListener('click', (event) => {
    if (event.target.tagName === "IMG") {
        event.preventDefault();
        PORTFOLIO.querySelectorAll('.portfolio__items img').forEach(el => el.classList.remove('img-border'));
        event.target.classList.add('img-border');
    }
})
}
imgBorder() 

// Перемешиваем картинки  
function imgRandom() {
    PORTFOLIO_LIST.addEventListener("click", (event) => {
        //Как сделать, чтобы повторно не срабатывало 2клик подряд срабатывает!!
        if ( event.target.tagName === "A" && !event.target.querySelector('li-active')) {
            for (let i = 0; i < 4; i++) {
                PORTFOLIO.prepend(PORTFOLIO.lastElementChild);
            }
        }
      });
  }
  imgRandom();
//!event.target.classList.contains("portfolio-active") - проверяем что событие не попало на таб на который уже нажали




// Отправка формы
//Кнопки
const BUTTON = document.getElementById('form-btn');
const CLOSE_BUTTON = document.getElementById('form-btn-close');
function formPost() {
BUTTON.addEventListener('click', (event) => {
    
    const subject = document.getElementById('subject').value.toString();
    const project = document.getElementById('project').value.toString();
    if(document.getElementById('name').value && document.getElementById('email').value) {
        event.preventDefault(); //- останавливаем событие, т.е. отправка формы не произойдет
        // Поля input 
    document.getElementById('result').innerText = 'СООБЩЕНИЕ ОТПРАВЛЕНО';

    if(subject) {
        document.getElementById('res_subject').innerText = 'Тема: ' + subject;
    } else {
        document.getElementById('res_subject').innerText = 'Без темы';
    }
    if(project) {
        document.getElementById('res_project').innerText = 'Описание: ' + project;
    } else {
        document.getElementById('res_project').innerText = 'Без описания';
    }

    // задаем видимость pop up окошка и его фона
    document.getElementById('message-block').classList.remove('hidden');
    }
});

CLOSE_BUTTON.addEventListener('click', () => {
    // document.getElementById('result_email', 'result_subject').innerText = ""; - очищаем форму

    // удаляем видимость pop up окошка и его фона добавляем класс hidden
    document.getElementById('message-block').classList.add('hidden');
    // Делаем очистку формы после ее заполнения 
    document.querySelector("form").reset();
});
}
formPost();


// Активный дисплей 
const DISPLAY_VERTICAL = document.querySelector('.display__vertical');
const DISPLAY_HORIZONTAL = document.querySelector('.display__horizontal');
/* для одного варианта если нужно соотнести с кнопкой например клики используем classList.toggle
function clickPhone(phone) {
    let count = 0;
    phone.addEventListener('click', (event) => {
            if (count == 0)  {
                event.target.classList.add('display-color');
                count++;
            } else {
                event.target.classList.remove('display-color');
                count--;
            }
    })
};
clickPhone(DISPLAY_VERTICAL);
clickPhone(DISPLAY_HORIZONTAL);
*/

function clickPhone(phone) {
    phone.addEventListener('click', (event) => {
        phone.classList.toggle('display-color')
    })
};
clickPhone(DISPLAY_VERTICAL);
clickPhone(DISPLAY_HORIZONTAL);


// Активные кнопкм
const BUTTON1 = document.querySelector('.phone_btn1');
const BUTTON2 = document.querySelector('.phone_btn2');

function clickBUTTUN(BTN, DISPLAY) {
    BTN.addEventListener("click", () => {
            DISPLAY.classList.toggle('display-color')
        })
    };
clickBUTTUN(BUTTON1, DISPLAY_VERTICAL);
clickBUTTUN(BUTTON2, DISPLAY_HORIZONTAL);

/*
// Слайдер 
const SLIDER_section = document.querySelector('.slider');
const BTN_arroy_left = document.querySelector('.button-slider-left');
const BTN_arroy_right = document.querySelector('.button-slider-right');
/*
function clickArroy(BTN_arr, SL_sec) {
    BTN_arr.addEventListener("click", () => {
        if (SL_sec.style.backgroundColor = '#f06c64'){
            SL_sec.style.backgroundColor = '#ffffff';
            SL_sec.style.boxShadow = '#648BF0;';
        } else if (SL_sec.style.backgroundColor = 'rgb(255, 255, 255);') {
            SL_sec.style.backgroundColor = '#f06c64'
        }
        })
    };
    clickArroy(BTN_arroy_left, SLIDER_section)
    clickArroy(BTN_arroy_right, SLIDER_section)

*/


      // Slider
  const SLIDER_section = document.querySelector(".slider");
  const ARROW_LEFT = document.querySelector('.button-slider-left');;
  const ARROW_RIGHT = document.querySelector('.button-slider-right');
  let slides = document.querySelectorAll('.sl');

  let current = 0;

function clickArroy() {
    for (let i = 0; i < slides.length; i++ ) {
        slides[i].classList.add('opa');
    }
    slides[current].classList.remove('opa');
}
//clickArroy() ; // делаем авто клик, чтобы слайдер работал с ПЕРВОГО клика пользователя
// клик по левой кнопке
function ArrBtn(ARROW, ) {
    ARROW.onclick = function() {
        if (current - 1 == -1) {
            current = slides.length-1;
            SLIDER_section.style.backgroundColor = "#648bf0";
            SLIDER_section.classList.add("shadow_color");
        } else {
            current--;
            SLIDER_section.style.backgroundColor = "#f06c64";
            SLIDER_section.classList.remove("shadow_color");

        }
        clickArroy(); // вызываем ф-цию которая выше slider (All - add.('opacity0')) / slides[current] remove('opacity0') ДЕЛАЕМ ВИДИМЫМ
    }
}
ArrBtn(ARROW_LEFT);
ArrBtn(ARROW_RIGHT);




