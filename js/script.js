var link = document.querySelector(".call-feedback-popup");
var popupFeedback = document.querySelector(".feedback-popup");
var closeFeedback = document.querySelector(".feedback-close");
var form = document.querySelector(".feedback-form");
var userName = document.querySelector("[name=name]");
var email = document.querySelector("[name=email]");
var message = document.querySelector("[name=message]");
var mapLink = document.querySelector(".mini-map");
var popupMap = document.querySelector(".map-popup");
var mapClose = document.querySelector(".map-close");

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

closeFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("popup-show");
    popupFeedback.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
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

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("popup-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("popup-show");
});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
        if (popupMap.classList.contains("popup-show")){
            evt.preventDefault();
            popupMap.classList.remove("popup-show");
        }
    }
});