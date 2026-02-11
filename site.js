const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const imageWrapper = document.getElementById("imageWrapper");

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

// Update UI
function updateDisplay() {
  counterEl.textContent = count;
}

// Show image for 3 seconds
function flashImage() {
  imageWrapper.classList.remove("hidden");

  setTimeout(() => {
    imageWrapper.classList.add("hidden");
  }, 3000);
}

// Increment
incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
  saveCount();
  flashImage();
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
  if (confirm("Reset counter?")) {
    count = 0;
    updateDisplay();
    saveCount();
  }
});

// Initialize
loadCount();
