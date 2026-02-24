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

    if(back[i].style.display == "flex") {
        unflip_card(i)
    }
    else {
        front[i].style.display = "none";
        back[i].style.display = "flex";
    }
}
function unflip_card(i) {
    const front = document.getElementsByClassName("front_card");
    const back = document.getElementsByClassName("back_card");
    front[i].style.display = "flex";
    back[i].style.display = "none";
}

function change_image(i) {
    let element = document.getElementById("img_colaborar");
    if (i == 1) {
        element.setAttribute("src", "Images/colaborar1.png")
        element.setAttribute("alt", "batch_solver")
    }else if(i == 2) {
        element.setAttribute("src", "Images/colaborar2.png")
        element.setAttribute("alt", "filter")
    }
    else if(i == 3) {
        element.setAttribute("src", "Images/colaborar3.png")
        element.setAttribute("alt", "optimization")
    }
    else if(i == 4) {
        element.setAttribute("src", "Images/colaborar4.png")
        element.setAttribute("alt", "feedback")
    }
    element.classList.add("fade_animation");
}
function reset_animation() {
    let element = document.getElementById("img_colaborar");
    element.classList.remove("fade_animation");
}