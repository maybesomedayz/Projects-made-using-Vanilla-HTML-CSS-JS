const body = document.querySelector('body');
const h2 = document.querySelector('h2');

// body.style.backgroundColor = "green";

function setColor(colorName) {
    body.style.backgroundColor = colorName;
    h2.innerText = "";
}

function randomRgbColor() {
    let red = Math.round(Math.random() * 255); 
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;

    body.style.backgroundColor = color;
    h2.innerText = `RGB Value : ${color}`;
}
