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

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const msg = `Merci ${name}, je reviens vers vous très prochainement!`;
    alert(msg);
});