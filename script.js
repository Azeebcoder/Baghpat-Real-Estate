let links = document.querySelector(".navigation-bar-links");
let button = document.querySelector(".menu-bar");
let menu = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-xmark");

button.addEventListener("click", ()=>{
    if(menu.style.display=="flex" || menu.style.display ==""){
        close.style.display = "flex";
        menu.style.display = "none";
    }
    else{
        close.style.display = "none";
        menu.style.display = "flex";
    }
    links.classList.toggle("show-in-mobile");
})