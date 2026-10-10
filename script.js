const celebrateBtn = document.getElementById("celebrateBtn");
const celebrationLayer = document.getElementById("celebrationLayer");
const surpriseText = document.getElementById("surpriseText");
const birthdayAudio = document.getElementById("birthdayAudio");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
const musicLabel = document.getElementById("musicLabel");

const confettiColors = ["#f27da9", "#a17be8", "#ffcc78", "#9bd8d0", "#f4a7cf", "#7fa7e8", "#ffffff"];
const balloonColors = ["#f48db5", "#a48aee", "#ffcc83", "#9bd9d0", "#8bb9ed", "#e6a7dc"];

function launchConfetti() {
  const rect = celebrateBtn.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  // A colorful burst starts right from the button.
  for (let i = 0; i < 115; i++) {
    const bit = document.createElement("span");
    bit.className = "confetti";
    bit.style.left = `${originX + (Math.random() - .5) * 80}px`;
    bit.style.top = `${originY + (Math.random() - .5) * 24}px`;
    bit.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    bit.style.borderRadius = Math.random() > .5 ? "50%" : "2px";
    bit.style.setProperty("--duration", `${2.1 + Math.random() * 2.1}s`);
    bit.style.setProperty("--drift", `${(Math.random() - .5) * 420}px`);
    bit.style.setProperty("--spin", `${Math.random() * 1200 - 600}deg`);
    bit.style.transform = `rotate(${Math.random() * 360}deg)`;
    celebrationLayer.appendChild(bit);
    bit.addEventListener("animationend", () => bit.remove(), { once: true });
  }

  // Balloons float up from the bottom edge.
  for (let i = 0; i < 17; i++) {
    const balloon = document.createElement("span");
    balloon.className = "balloon";
    const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.setProperty("--balloon-color", color);
    balloon.style.background = `radial-gradient(circle at 30% 25%, #ffffff88, ${color} 48%, ${color})`;
    balloon.style.left = `${2 + Math.random() * 94}%`;
    balloon.style.width = `${34 + Math.random() * 24}px`;
    balloon.style.height = `${45 + Math.random() * 28}px`;
    balloon.style.setProperty("--duration", `${5.5 + Math.random() * 4}s`);
    balloon.style.animationDelay = `${Math.random() * 1.3}s`;
    balloon.innerHTML = '<span class="balloon-heart">♡</span>';
    celebrationLayer.appendChild(balloon);
    balloon.addEventListener("animationend", () => balloon.remove(), { once: true });
  }

  // A few tiny stars add a soft, dreamy touch.
  ["✦", "✧", "♡", "✦", "✧"].forEach((symbol, i) => {
    const note = document.createElement("span");
    note.className = "floating-note";
    note.textContent = symbol;
    note.style.left = `${12 + i * 18}%`;
    note.style.color = confettiColors[i % confettiColors.length];
    note.style.setProperty("--duration", `${4.5 + Math.random() * 2}s`);
    note.style.animationDelay = `${Math.random() * .8}s`;
    celebrationLayer.appendChild(note);
    note.addEventListener("animationend", () => note.remove(), { once: true });
  });
}

celebrateBtn.addEventListener("click", () => {
  launchConfetti();
  surpriseText.textContent = "Make a wish — today is your moment! ♡";
  celebrateBtn.innerHTML = '<span class="button-star">✨</span> Birthday Magic! <span class="button-arrow">♡</span>';
  // If the audio file is present, try to start it after this user gesture.
  if (birthdayAudio.querySelector("source").getAttribute("src")) {
    birthdayAudio.play().then(updateMusicButton).catch(() => {});
  }
});

function updateMusicButton() {
  const playing = !birthdayAudio.paused;
  musicIcon.textContent = playing ? "♫" : "♪";
  musicLabel.textContent = playing ? "Music on" : "Play music";
  musicToggle.setAttribute("aria-label", playing ? "Pause birthday music" : "Play birthday music");
}
musicToggle.addEventListener("click", () => {
  if (birthdayAudio.paused) {
    birthdayAudio.play().then(updateMusicButton).catch(() => {
      musicLabel.textContent = "Add MP3 first";
      setTimeout(updateMusicButton, 1800);
    });
  } else {
    birthdayAudio.pause();
    updateMusicButton();
  }
});
birthdayAudio.addEventListener("play", updateMusicButton);
birthdayAudio.addEventListener("pause", updateMusicButton);
