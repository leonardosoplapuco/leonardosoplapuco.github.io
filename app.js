//DarkMode
const dark = document.querySelector('.dark__button')
const body = document.querySelector('body')

load();

dark.addEventListener('click', e =>{
    body.classList.toggle('dark-mode');
    store(body.classList.contains('dark-mode'));
});

function load(){
    const darkmode = localStorage.getItem('dark-mode');

    if(!darkmode){
        store('false');
    }
    else if(darkmode == 'true'){
        body.classList.add('dark-mode')
    }
}

function store(value){
    localStorage.setItem('dark-mode', value);
}

//Nav
proBtn = document.querySelector('.proyects__button')
skillBtn = document.querySelector('.skills__button')
Btn = document.querySelector('.nav__button')
proContainer = document.querySelector('.block__content__items section')

skillBtn.addEventListener('click', function(){
    Btn.classList.add('nav__button__right')
    proContainer.classList.add('section__active')
})

proBtn.addEventListener('click', function(){
    Btn.classList.remove('nav__button__right')
    proContainer.classList.remove('section__active')
})