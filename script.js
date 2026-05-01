let count = 0;

function increase() {
    count++;
    document.getElementById("count").innerText = count;
}

function decrease() {
    count--;
    document.getElementById("count").innerText = count;
}

function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
}