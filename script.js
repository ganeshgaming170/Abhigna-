/* =================================
   BIRTHDAY WEBSITE
   ABHIGNA ❤️
================================= */


/* -------------------------
   SCREEN SWITCHING
------------------------- */

const screens = document.querySelectorAll(".screen");

function showScreen(id) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


/* -------------------------
   START BUTTON
------------------------- */

const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");

startBtn.addEventListener("click", () => {

    // Try to start music
    music.play().catch(() => {});

    showScreen("countdown");

    startCountdown();

});


/* -------------------------
   COUNTDOWN
------------------------- */

function startCountdown() {

    const number = document.getElementById("countNumber");

    let count = 3;

    number.innerText = count;

    const interval = setInterval(() => {

        count--;

        if (count > 0) {

            number.innerText = count;

            // Restart animation
            number.style.animation = "none";

            void number.offsetWidth;

            number.style.animation =
                "countAnimation 1s ease";

        }

        else {

            clearInterval(interval);

            setTimeout(() => {

                showScreen("birthday");

            }, 700);

        }

    }, 1000);
}


/* -------------------------
   CONTINUE BUTTON
------------------------- */

document
    .getElementById("continueBtn")
    .addEventListener("click", () => {

        showScreen("message");

        startTyping();

    });


/* -------------------------
   TYPING MESSAGE
------------------------- */

const message =
    "Abhigna, may your smile always stay bright, your dreams become reality, and every new year of your life bring you something beautiful. ❤️";

let typingStarted = false;

function startTyping() {

    if (typingStarted) return;

    typingStarted = true;

    const textElement =
        document.getElementById("typingText");

    let index = 0;

    function type() {

        if (index < message.length) {

            textElement.innerHTML +=
                message.charAt(index);

            index++;

            setTimeout(type, 45);

        }

    }

    type();
}


/* -------------------------
   CAKE BUTTON
------------------------- */

document
    .getElementById("cakeBtn")
    .addEventListener("click", () => {

        showScreen("cakeSection");

    });


/* -------------------------
   CAKE CLICK
------------------------- */

const cake =
    document.querySelector(".cake");

cake.addEventListener("click", () => {

    // Remove flames
    document
        .querySelectorAll(".flame")
        .forEach(flame => {

            flame.style.display = "none";

        });

    // Confetti
    createConfetti();

    // Small delay
    setTimeout(() => {

        showScreen("final");

    }, 2200);

});


/* -------------------------
   CONFETTI
------------------------- */

function createConfetti() {

    const container =
        document.getElementById("confetti");

    container.innerHTML = "";

    const symbols = [
        "✨",
        "💖",
        "🎉",
        "⭐",
        "💕",
        "✦"
    ];

    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add(
            "confetti-piece"
        );

        piece.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.fontSize =
            (Math.random() * 15 + 8) + "px";

        piece.style.animationDuration =
            (Math.random() * 2 + 3) + "s";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        container.appendChild(piece);

    }

}


/* -------------------------
   MUSIC BUTTON
------------------------- */

const musicBtn =
    document.getElementById("musicBtn");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        music.pause();

        musicBtn.innerText = "🔇";

        musicPlaying = false;

    }

    else {

        music.play().catch(() => {});

        musicBtn.innerText = "🔊";

        musicPlaying = true;

    }

});


/* -------------------------
   CLICK ANYWHERE
   FOR LITTLE SPARKLES
------------------------- */

document.addEventListener("click", (event) => {

    if (
        event.target.tagName === "BUTTON" ||
        event.target.closest(".cake")
    ) {
        return;
    }

    const sparkle =
        document.createElement("div");

    sparkle.innerText = "✦";

    sparkle.style.position = "fixed";

    sparkle.style.left =
        event.clientX + "px";

    sparkle.style.top =
        event.clientY + "px";

    sparkle.style.color = "white";

    sparkle.style.pointerEvents = "none";

    sparkle.style.zIndex = "500";

    sparkle.style.fontSize = "18px";

    sparkle.style.animation =
        "sparkleClick .8s ease forwards";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);

});


/* -------------------------
   SPARKLE ANIMATION
------------------------- */

const sparkleStyle =
document.createElement("style");

sparkleStyle.innerHTML = `

@keyframes sparkleClick {

    0% {
        transform: scale(.2);
        opacity: 0;
    }

    40% {
        transform: scale(1.5);
        opacity: 1;
    }

    100% {
        transform:
            translateY(-40px)
            scale(0);
        opacity: 0;
    }

}

`;

document.head.appendChild(sparkleStyle);
