function showMessage() {
    document.getElementById("birthdayMessage").innerHTML =
        "💖 Dear Faith, always believe in yourself, keep learning, keep growing and never stop chasing your dreams. May this new chapter bring you happiness, success, peace, love and beautiful memories. Happy Birthday to me! 🎂✨";
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "20px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const fall = confetti.animate(
            [
                { transform: "translateY(0) rotate(0deg)" },
                {
                    transform:
                        "translateY(100vh) rotate(360deg)"
                }
            ],
            {
                duration: 2000 + Math.random() * 2000,
                easing: "linear"
            }
        );

        fall.onfinish = () => {
            confetti.remove();
        };
    }
}
window.onload = function() {
    createConfetti();
};
function toggleMusic() {
    const music = document.getElementById("birthdayMusic");
    const button = document.getElementById("musicButton");

    if (music.paused) {
        music.play()
            .then(() => {
                button.innerHTML = "⏸️ Pause Birthday Music";
            })
            .catch((error) => {
                console.log("Music could not play:", error);
            });
    } else {
        music.pause();
        button.innerHTML = "🎵 Play Birthday Music";
    }
}

const birthdayMusic = document.getElementById("birthdayMusic");

birthdayMusic.addEventListener("ended", function() {
    document.getElementById("musicButton").innerHTML =
        "🎵 Play Birthday Music";
});




    const music = document.getElementById("birthdayMusic");
    music.play();
}



function popBalloon(balloon) {
    balloon.innerHTML = "💥";
    balloon.style.transform = "scale(1.4)";

    setTimeout(function() {
        balloon.style.display = "none";
    }, 300);
}
function cakeMessage() {
    alert("🎂 One more year of growth, blessings and beautiful memories! Happy Birthday, Faith! ❤️✨");
}
window.addEventListener("load", function() {
    const music = document.getElementById("birthdayMusic");

    music.play().catch(function() {
        document.body.addEventListener("click", function() {
            music.play();
        }, { once: true });
    });
});
