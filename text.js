const infosPratiques = document.querySelector ("#infos")
infosPratiques.computedStyleMap.fontSize = "1px"
const button = document.querySelector(".interrupteur")
button.addEventListener("click"), () => {
    console.log("Le bouton a été clické")
    button.style.background = "red"

}