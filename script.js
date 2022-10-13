function openCloseNav(x) {
    var nav = document.querySelector("nav");
    if (nav.style.width != "auto") {
        x.classList.add("change");
        nav.style.width = "auto";
    } else {
        x.classList.remove("change");
        nav.style.width = "0";
    }
}

//function Message() {
   // let msg = "Merci pour votre message, nous revenons vers vous dans les plus brefs délais !";
   // console.log(msg);
   // alert(msg);
//}