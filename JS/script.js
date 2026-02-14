function display_menu() {
    const element = document.getElementById("responsive_nav");
    if (element.style.display == "block") {
        element.style.display = "none";
    }
    else {
        element.style.display = "block";
    }
}
function flip_card(i) {
    const front = document.getElementsByClassName("front_card");
    const back = document.getElementsByClassName("back_card");
    front[i].style.display = "none";
    back[i].style.display = "block"
}
function unflip_card(i) {
    const front = document.getElementsByClassName("front_card");
    const back = document.getElementsByClassName("back_card");
    front[i].style.display = "flex";
    back[i].style.display = "none"
}