var link = document.querySelector(".call-feedback-popup");
var popupFeedback = document.querySelector(".feedback-popup");
var close = document.querySelector(".btn-close");
var form = document.querySelector(".feedback-form");
var userName = document.querySelector("[name=name]");
var email = document.querySelector("[name=email]");
var message = document.querySelector("[name=message]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
   evt.preventDefault();
   popupFeedback.classList.add("popup-show");

   if (storage) {
       email.value = storage;
       userName.value = storage;
       message.focus();
   } else {
       userName.focus();
   }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.remove("popup-show");
    popupFeedback.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!email.value || !userName.value || !message.value){
        evt.preventDefault();
        popupFeedback.classList.remove("popup-error");
        popupFeedback.offsetWidth = popupFeedback.offsetWidth;
        popupFeedback.classList.add("popup-error");
    } else {
        if (isStorageSupport){
            localStorage.setItem("email", email.value);
            localStorage.setItem("userName", name.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupFeedback.classList.contains("popup-show")){
            popupFeedback.classList.remove("popup-show");
            popupFeedback.classList.remove("popup-error");
        }
    }
});