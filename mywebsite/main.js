const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["Hello, my name is Fabian. I am a software developer. Let me tell you about me: " ];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;


function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
});




