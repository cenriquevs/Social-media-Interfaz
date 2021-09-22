const Mode = document.querySelector('#cambio');

Mode.addEventListener('click', ()  => {
    document.body.classList.toggle('oscuro');
    Mode.classList.toggle('active');

    if(document.body.classList.contains('oscuro')){
        localStorage.setItem('negro', 'true');
    }else{
        localStorage.setItem('negro', 'false');
    }
});

if(localStorage.getItem('negro') === 'true'){
    document.body.classList.add('oscuro');
    Mode.classList.add('active');
} else{
    document.body.classList.remove('oscuro');
    Mode.classList.remove('active');
}