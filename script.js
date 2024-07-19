let poke = [];

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/ditto";

async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    // Gradient erstellen
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "red");

    // Mit Gradient füllen
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
});