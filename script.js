function openCloseNav(x) {
    let nav = document.querySelector("nav");
    if (nav.style.width != "100%") {
        x.classList.add("change");
        nav.style.width = "100%";
    } else {
        x.classList.remove("change");
        nav.style.width = "0";
    }
}

function Message() {
const msg = "Merci pour votre curiosité !";
alert (msg);
}