function display_menu() {
    const element = document.getElementById("responsive_nav");
    if (element.style.display == "block") {
        element.style.display = "none";
    }
    else {
        element.style.display = "block";
    }
}