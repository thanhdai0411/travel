var getBtn = document.querySelector('.dropbtn');

getBtn.onclick = function () {
    document.querySelector('.dropdown-mobi').classList.toggle('open');
};

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdown = document.querySelector('.dropdown-mobi');
        if (dropdown.classList.contains('open')) dropdown.classList.remove('open');
    }
};

function handleClickRegister(x) {
    var formRegister = document.querySelector('#register');
    var formLogin = document.querySelector('#login');
    var formBtn = document.querySelector('.form__btn-submit');
    var btnLogin = document.querySelector('.form__title-login');
    formRegister.style.display = 'block';
    formLogin.style.display = 'none';
    formBtn.style.display = 'none';
    btnLogin.classList.add('active');
    x.classList.remove('active');
}

function handleClickLogin(x) {
    var formRegister = document.querySelector('#register');
    var formLogin = document.querySelector('#login');
    var formBtn = document.querySelector('.form__btn-submit');
    var btnRegister = document.querySelector('.form__title-register');
    formLogin.style.display = 'block';
    formRegister.style.display = 'none';
    formBtn.style.display = 'flex';
    btnRegister.classList.add('active');
    x.classList.remove('active');
}

function openLogin(x) {
    var containerForm = document.querySelector('.container-form ');
    containerForm.style.display = 'flex';
}

window.addEventListener('click', function (e) {
    var containerForm = document.querySelector('.container-form ');
    if (e.target == containerForm) {
        containerForm.style.display = 'none';
    }
});
