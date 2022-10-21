// RUN FUNCTIONS

window.onload = function() {
    askName();
    preferences();
}

// PAGE IDENTIFICATION / NAVIGATION ========================================

let currentPage = Number(document.querySelector("#pageIdentify").innerHTML)

toPreviousLink = document.getElementById("toPrevious");
toNextLink = document.getElementById("toNext");

toPreviousLink.setAttribute("href", `https://michaelpkr.github.io/30DAYSOFCODE/day${currentPage - 1}.html`)
toNextLink.setAttribute("href", `https://michaelpkr.github.io/30DAYSOFCODE/day${currentPage + 1}.html`)

// DARKMODE=======================================================================

console.log(document.getElementById("darkModeButton").innerHTML)

function darkModeSwitch() {
    let element = document.body;
    element.classList.toggle("dark");


    if (document.getElementById("darkModeButton").innerHTML === "☽") {
        document.getElementById("darkModeButton").innerHTML = "☼";

    } else if (document.getElementById("darkModeButton").innerHTML = "☼") {
        document.getElementById("darkModeButton").innerHTML = "☽"
    }

}

// NAME PERSONALIZATION ================================================

function askName() {
    let username = localStorage.getItem('username');
    if (!username) {
        username = prompt("Please enter your name:");
    }
    if (username != null) {
        document.getElementById("greeting").innerHTML = `Hey ${username},`
        localStorage.setItem('username', username);
    } else {
        document.getElementById("noUser").innerHTML = "Welcome, Stranger!";
    }
}

//   PREFERENCES MODAL ====================================================

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// PREFERENCES

// BANNER COLOR SELECTOR

function preferences() {
    let currentColor = localStorage.getItem("color")
    document.getElementById("navManipulation").classList.add(currentColor)
    let currentTextColor = localStorage.getItem("currentTextColor")
    document.getElementById("textManipulation").classList.add(currentTextColor)
}

let red = document.getElementById("red")
red.onclick = function() {
    let currentColor = localStorage.getItem("color")
    document.getElementById("navManipulation").classList.remove(`${currentColor}`)
    document.getElementById("navManipulation").classList.add("red")
    localStorage.setItem('color', "red");
}

let blue = document.getElementById("blue")
blue.onclick = function() {
    let currentColor = localStorage.getItem("color")
    document.getElementById("navManipulation").classList.remove(`${currentColor}`)
    document.getElementById("navManipulation").classList.add("blue")
    localStorage.setItem('color', "blue");
}

let yellow = document.getElementById("yellow")
yellow.onclick = function() {
    let currentColor = localStorage.getItem("color")
    document.getElementById("navManipulation").classList.remove(`${currentColor}`)
    document.getElementById("navManipulation").classList.add("yellow")
    localStorage.setItem('color', "yellow");
}

let green = document.getElementById("green")
green.onclick = function() {
    let currentColor = localStorage.getItem("color")
    document.getElementById("navManipulation").classList.remove(`${currentColor}`)
    document.getElementById("navManipulation").classList.add("green")
    localStorage.setItem('color', "green");
}

let black = document.getElementById("black")
black.onclick = function() {
    let currentColor = localStorage.getItem("color")
    document.getElementById("navManipulation").classList.remove(`${currentColor}`)
    document.getElementById("navManipulation").classList.add("black")
    localStorage.setItem('color', "black");
}

// TEXT COLOR SELECTOR

let textred = document.getElementById("textred")
textred.onclick = function() {
    let currentTextColor = localStorage.getItem("currentTextColor")
    document.getElementById("textManipulation").classList.remove(`${currentTextColor}`)
    document.getElementById("textManipulation").classList.add("textred")
    localStorage.setItem('currentTextColor', "textred");
}

let textblue = document.getElementById("textblue")
textblue.onclick = function() {
    let currentTextColor = localStorage.getItem("currentTextColor")
    document.getElementById("textManipulation").classList.remove(`${currentTextColor}`)
    document.getElementById("textManipulation").classList.add("textblue")
    localStorage.setItem('currentTextColor', "textblue");
}

let textyellow = document.getElementById("textyellow")
textyellow.onclick = function() {
    let currentTextColor = localStorage.getItem("currentTextColor")
    document.getElementById("textManipulation").classList.remove(`${currentTextColor}`)
    document.getElementById("textManipulation").classList.add("textyellow")
    localStorage.setItem('currentTextColor', "textyellow");
}

let textgreen = document.getElementById("textgreen")
textgreen.onclick = function() {
    let currentTextColor = localStorage.getItem("currentTextColor")
    document.getElementById("textManipulation").classList.remove(`${currentTextColor}`)
    document.getElementById("textManipulation").classList.add("textgreen")
    localStorage.setItem('currentTextColor', "textgreen");
}

let textblack = document.getElementById("textblack")
textblack.onclick = function() {
    let currentTextColor = localStorage.getItem("currentTextColor")
    document.getElementById("textManipulation").classList.remove(`${currentTextColor}`)
    document.getElementById("textManipulation").classList.add("textblack")
    localStorage.setItem('currentTextColor', "textblack");
}

let textwhite = document.getElementById("textwhite")
textwhite.onclick = function() {
    let currentTextColor = localStorage.getItem("currentTextColor")
    document.getElementById("textManipulation").classList.remove(`${currentTextColor}`)
    document.getElementById("textManipulation").classList.add("textwhite")
    localStorage.setItem('currentTextColor', "textwhite");
}

// APPLICATIONS

document.getElementById("getPokemon").addEventListener("click", getPokemon)

document.getElementById("getRandomPokemon").addEventListener("click", getRandomPokemon)


function getPokemon() {

    let pokemon = document.querySelector("input").value.toLowerCase()
    let pokemonId = pokemon

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById("pokemonname").innerText = (data.species.name)
            document.getElementById("pokemontype").innerText = `Pokemon Type: ${(data.types[0].type.name)}`
            document.getElementById("pokemonheight").innerText = `Height: ${(data.height)}`
            document.getElementById("pokemonweight").innerText = `Height: ${(data.weight)}`
            document.querySelector("img").src = (data.sprites.front_default)
            document.querySelector("h3").innerText = (data.height)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}

function getRandomPokemon() {

    let pokemonId = Math.floor(Math.random() * 898)

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById("pokemonname").innerText = (data.species.name)
            document.getElementById("pokemontype").innerText = `Type: ${(data.types[0].type.name)}`
            document.getElementById("pokemonheight").innerText = `Height: ${(data.height)}`
            document.getElementById("pokemonweight").innerText = `Height: ${(data.weight)}`
            document.querySelector("img").src = (data.sprites.front_default)
            document.querySelector("h3").innerText = (data.height)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}

// let pokemonId = function randomPokemonId(){
//     let pokemonId = Math.floor(Math.random() * 898)
// }