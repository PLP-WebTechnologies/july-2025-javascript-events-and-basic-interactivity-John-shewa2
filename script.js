/* ================================
   Part 1: JavaScript Event Handling 
   and Interactive Elements
================================= */

// Show message when button is clicked
const message = document.getElementById("message");
const showMessageBtn = document.getElementById("showMessageBtn");

showMessageBtn.addEventListener("click", () => {
  message.style.display = "block";
  message.textContent = "You clicked the button!";
});

// =================================================================

// Change color on hover over a specific area
const hoverArea = document.getElementById("hoverBox");

// When the mouse enters the area background changes to light blue
hoverArea.addEventListener("mouseenter", () => {
  hoverArea.style.backgroundColor = "#3187a3ff"; // light blue
});

// When the mouse leaves the area background reverts to original color
hoverArea.addEventListener("mouseleave", () => {
  hoverArea.style.backgroundColor = "#fff"; // original color
});

// =================================================================

// Key input detection and display
const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");

// Show live typing (on keyup) 
keyInput.addEventListener("keyup", (e) => {
  keyOutput.textContent = `You typed: ${keyInput.value}`;
});

// Show which key was pressed (on keydown)
keyInput.addEventListener("keydown", (e) => {
  keyOutput.textContent = `Key pressed: ${e.key}`;
});

// =================================================================

/* ================================
   Part 2: Building Interactive Elements
================================= */

// A light/dark mode toggle : changes background and text colors
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
// =================================================================

// A simple click counter game: counts clicks and has a reset button
let score = 0;

const scoreDisplay = document.getElementById("score");
const clickBtn = document.getElementById("clickBtn");
const resetBtn = document.getElementById("resetBtn");

// Increase score on button click: updates display
clickBtn.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});

// Reset score: Resets the displayed score to 0
resetBtn.addEventListener("click", () => {
  score = 0;
  scoreDisplay.textContent = score;
});
// =================================================================
// collapsable box with hide/show and highlight features
const box = document.getElementById("box");
const toggleHighlightBtn = document.getElementById("toggleHighlightBtn");
const toggleVisibilityBtn = document.getElementById("toggleVisibilityBtn");

// Toggle highlight style on the box
toggleHighlightBtn.addEventListener("click", () => {
  box.classList.toggle("highlight");
});

// Hide/Show the box
toggleVisibilityBtn.addEventListener("click", () => {
  box.classList.toggle("hidden");
});

// =================================================================
// Dropdown menu that shows selected option
const fruitSelect = document.getElementById("fruitSelect");
const selectedFruit = document.getElementById("selectedFruit");

// Detect changes in dropdown and update display
fruitSelect.addEventListener("change", () => {
  const fruit = fruitSelect.value;
  if (fruit) {
    selectedFruit.textContent = `You selected: ${fruit}`;
  } else {
    selectedFruit.textContent = "You selected: None";
  }
});
// =================================================================

// A tabbed content interface 
// declare variables
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
// Add click event to each tab button
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetTab = btn.getAttribute("data-tab");

    // Remove active class from all buttons and contents by iterating through them
    tabButtons.forEach((button) => button.classList.remove("active"));

    // Hide all tab contents by adding hidden class by iterating through them
    tabContents.forEach((tab) => tab.classList.add("hidden"));

    // Activate clicked button and show its content
    btn.classList.add("active");
    document.getElementById(targetTab).classList.remove("hidden");
  });
});

// =================================================================

/* ================================
   Part 3: Form Validation
================================= */
//define variables
const form = document.getElementById("practiceForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formFeedback = document.getElementById("formFeedback");

// Form submission event: prevents default submission and validates inputs
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from submitting
  let valid = true;

  // Reset messages: clear previous error/success messages
  emailError.textContent = "";
  passwordError.textContent = "";
  formFeedback.textContent = "";

  // Validate Email (simple regex): checks for basic email format
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Validate Password (min 6 chars, at least one number): checks length and digit presence
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (!password.value.match(passwordPattern)) {
    passwordError.textContent =
      "Password must be at least 6 characters long and include a number.";
    valid = false;
  }

  // Success message: if all validations pass, show success and reset form
  if (valid) {
    formFeedback.textContent = "✅ Form submitted successfully!";
    formFeedback.className = "success";
    form.reset();
  }
});
