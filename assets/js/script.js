const body = document.querySelector("body")
const h1 = document.querySelector("h1")
const description = document.querySelector("#description>p")
const timeRemaining = document.querySelector(".eventDate>var")
const inputName = document.querySelector("#name")
const inputEmail = document.querySelector("#email")
const inputPass = document.querySelector("#pass")
const gameSelect = document.querySelector("#game")
let gameChoiced = ""

// importing login button in case someone wants to use it
const loginButton = document.querySelector(".loginButton")
const registerButton = document.querySelector("#registerButton")

const date1 = new Date()
const date2 = new Date();
date2.setFullYear(2022)
date2.setMonth(11)
date2.setDate(10)

timeRemaining.innerText = date2 - date1 > 0?`${parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10) + 1} days to the event`:"the event is over"

h1.addEventListener("mouseenter", e => {
    const sumInterval = setInterval(() => {
        if (description.style.height != "105px"){
            const descHeight = description.style.height.replace("px", "")
            description.style.height = Number(descHeight) + 5 + "px"
        }
    }, 5);
    setTimeout(() => {
        clearInterval(sumInterval)
    }, 300);
})

h1.addEventListener("mouseleave", e => {
    const subInterval = setInterval(() => {
        if (description.style.height != "0px"){
            const descHeight = description.style.height.replace("px", "")
            description.style.height = Number(descHeight) - 5 + "px"
        }
        setTimeout(() => {
            clearInterval(subInterval)
        }, 300);
    }, 5);
})

gameSelect.onchange = e => gameChoiced = gameSelect.value

registerButton.onclick = e => {
    e.preventDefault()
    const name = inputName.value
    const email = inputEmail.value
    const pass = inputPass.value
    //you can use this values and the gameChoiced to make a request to some api  
    if(name && email && pass && gameChoiced){
        console.log(`name: ${name}\nemail: ${email}\npassword: ${pass}\ngame choiced: ${gameChoiced}`)
    } else { alert("missing values!") }
}