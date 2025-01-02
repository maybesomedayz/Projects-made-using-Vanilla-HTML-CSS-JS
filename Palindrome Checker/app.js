const input = document.querySelector('input');
const h2 = document.querySelector('h2');
const btn = document.querySelector("button");


function reverseString(str) {
    return str.split("").reverse().join("");
}


btn.onclick = function() {
    const value = input.value;
    const reverse = reverseString(value);

    if(value === reverse) {
        h2.innerText = `P A L I N D R O M E 🤯`;
        h2.style.color = "#4CC9FE";
        h2.style.fontWeight = "700";
        h2.style.fontSize = "60px";
        h2.style.fontFamily = "Rubik Gemstones", "serif";
    }   else {
        h2.innerText = `NOT A PALINDROME 😢`;
        h2.style.color = "#FA7070";
        h2.style.fontWeight = "700";
        h2.style.fontSize = "50px";
    }
}

input.addEventListener('input', () => {
    h2.innerText = input.value || 'Look here to check if it is Palindome or Not.';
    h2.style.color = "whitesmoke";
    h2.style.fontSize = "50px";
    h2.style.fontWeight = "400";
    h2.style.fontFamily = "Poppins", "serif";
})