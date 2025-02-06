// Select the "Yes" button and add a click event
document.getElementById("yes").onclick = function() {
    alert("hehe i knew would choose yes babe ! 💕 iloveyouuu for eternity and more my ree my ranjuu my reeya my wifey my love my darling ani jane haina ta date ma masanga");
};

// Function to move the "No" button when hovered over
function moveButton() {
    let button = document.getElementById("no");

    // Generate random x and y positions within the window
    let x = Math.random() * (window.innerWidth - 200);
    let y = Math.random() * (window.innerHeight - 200);

    // Apply the new position to the button
    button.style.left = x + "px";
    button.style.top = y + "px";
}
let music = document.getElementById("bg-music");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Attach event listener to the "No" button
document.getElementById("no").onmouseover = moveButton;
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random float speed

    document.querySelector(".heart-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove hearts after 5 seconds
}

setInterval(createHeart, 500); // Create hearts every 0.5s
const loveQuotes = [
    "You're the missing piece to my heart. ❤️",
    "Every love story is beautiful, but ours is my favorite. 💕",
    "I love you not because of who you are, but because of who I am when I'm with you. 💞",
    "You make my world more beautiful. 🌎💖",
    "I would choose you over and over again. Infinity times. ♾️❤️",
    "Life with you is a dream come true. ✨"
];

function showLoveQuote() {
    const randomIndex = Math.floor(Math.random() * loveQuotes.length);
    document.getElementById("quote").innerText = loveQuotes[randomIndex];
}
const loveText = "From the moment I met you, my heart knew you were special. Every moment with you is magic, and I can't wait to create more beautiful memories together. 💖";
let i = 0;

function typeWriter() {
    if (i < loveText.length) {
        document.getElementById("love-letter").innerHTML += loveText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start the effect when the page loads
window.onload = typeWriter;
