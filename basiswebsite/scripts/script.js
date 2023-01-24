let audioControl = document.querySelector(".audioControl");
let audio = document.querySelector("audio");

let audioState = false;

audioControl.addEventListener("click", () => {
    if (audio.paused) {
        audio.play()
        audioState = true;
        audioControl.style.backgroundImage = "url('images/muziekaan.png')";

    } else {
        audio.pause()
        audioState = false;
        audioControl.style.backgroundImage = "url(images/muziekuit.png)";
    }
})

console.log(audioControl);

var openButton = document.querySelector("header button:nth-of-type(2)");

openButton.addEventListener("click", openMenu);

function openMenu() {  
  
  var deNav = document.querySelector("nav");

  deNav.classList.add("toonMenu");
}

var sluitButton = document.querySelector("nav button");

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}

