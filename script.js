const hamb = document.querySelector("#hamb")
const popup = document.querySelector("#popup")
const menu = document.querySelector("#menu").cloneNode(1)
const body = document.body;
const video_text = document.querySelector("#video_text")


hamb.addEventListener("click", hambHandler)

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active")
    body.classList.toggle("noscroll")
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}


document.querySelector("#video_play").onclick = play;

let video;
let display;

video = document.querySelector("#video1")

function play(){
    video.play();
    video_text.style.cssText = "display:none";
}




const scroll_form = document.querySelector("#scroll_form")
const form = document.querySelector("#form")


function scrollTo(form){
    window.scroll({
        left: 0,
        top: form.offsetTop,
        behavior: 'smooth'
    })
}

scroll_form.addEventListener("click",() => {
    scrollTo(form);
})