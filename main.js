var link = document.querySelector(".menu__list-btn-link");
var popup = document.querySelector(".modal__login");
var close = popup.querySelector(".modal__close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");


link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
    if (storage) {
        login.value = storage;
    }
});
close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        console.log("Введи данные");
    }else {
        localStorage.setItem("login", login.value);
    }
});
