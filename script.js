function openCloseNav(x) {
    let nav = document.querySelector("nav");
    if (nav.style.width != "auto") {
        x.classList.add("change");
        nav.style.width = "auto";
    } else {
        x.classList.remove("change");
        nav.style.width = "0";
    }
}

function Message() {
const msg = "Merci pour votre curiosité !";
alert (msg);
}