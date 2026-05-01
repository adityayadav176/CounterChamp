let count = 0;

// Load saved value on page load
window.onload = function () {
    let saved = localStorage.getItem("count");

    if (saved !== null) {
        count = parseInt(saved);
    }

    updateDisplay();
};

// Update UI + Save data
function updateDisplay() {
    const display = document.getElementById("count");
    display.innerText = count;

    // Color logic
    if (count > 0) {
        display.style.color = "green";
    } else if (count < 0) {
        display.style.color = "red";
    } else {
        display.style.color = "black";
    }

    // Save to localStorage
    localStorage.setItem("count", count);
}

// Increase
function increase() {
    let step = parseInt(document.getElementById("step").value) || 1;
    count += step;
    updateDisplay();
}

// Decrease (no negative)
function decrease() {
    let step = parseInt(document.getElementById("step").value) || 1;

    if (count - step >= 0) {
        count -= step;
        updateDisplay();
    }
}

// Reset with confirmation
function reset() {
    if (confirm("Are you sure you want to reset?")) {
        count = 0;
        updateDisplay();
    }
}