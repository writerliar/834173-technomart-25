var mapLink = document.querySelector(".mini-map");
var popupMap = document.querySelector(".map-popup");
var mapClose = document.querySelector(".btn-close");

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