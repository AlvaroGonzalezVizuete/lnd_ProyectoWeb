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
    const element = document.getElementsByClassName("front_card");
    element[i].style.display = "none";
}
function unflip_card(i) {
    const element = document.getElementsByClassName("front_card");
    element[i].style.display = "flex";
}