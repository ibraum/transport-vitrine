let menu_button = document.querySelector(".menu-hidden-button");
let menu_hidden = document.querySelector("#menu-hidden");
let close_button = document.querySelector("#close");


menu_button.addEventListener('click', () => {
    menu_hidden.style.setProperty("display", "block", "important");
})

close_button.addEventListener('click', () => {
    menu_hidden.style.setProperty("display", "none", "important");
})