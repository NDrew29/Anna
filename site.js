const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const annaImage = document.getElementById("annaImage");
const flashText = document.getElementById("flashText");

const STORAGE_KEY = "annaButtheadCount";

let count = 0;

// Load from storage
function loadCount() {
  const saved = localStorage.getItem(STORAGE_KEY);
  count = saved ? parseInt(saved, 10) : 0;
  updateDisplay();
}

// Save to storage
function saveCount() {
  localStorage.setItem(STORAGE_KEY, count);
}

// Update display
function updateDisplay() {
  counterEl.textContent = count;
}

// Increment
incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
  saveCount();

  // Shake image
  annaImage.classList.add("shake");
  setTimeout(() => {
    annaImage.classList.remove("shake");
  }, 400);

  // Flash overlay text
  flashText.classList.add("flash-active");
  setTimeout(() => {
    flashText.classList.remove("flash-active");
  }, 500);
});

// Decrement
decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
    saveCount();
  }
});

// Reset
resetBtn.addEventListener("click", () => {
  if (confirm("Reset the Butthead counter?")) {
    count = 0;
    updateDisplay();
    saveCount();
  }
});

// Initialize
loadCount();
