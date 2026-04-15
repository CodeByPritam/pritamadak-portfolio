// Tabs Switch
window.tabSwitch = function (id) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelector(`.tab[onclick="tabSwitch('${id}')"]`).classList.add('active');
    document.getElementById(id).classList.add('active');
}

// Get Current Year
const getCurrentYear = () => {
    const elm = document.getElementById("year");
    const year = new Date().getFullYear().toString().slice(-2);
    elm.innerHTML = `© 2021 - ${year}`;
}

// Time Clock
const clockSystem = () => {
    const tick = () => {
        const elm = document.getElementById('clock');
        elm.textContent = new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    }
    tick();
    setInterval(tick, 1000);
}

// Format Name Ascci Code
const formatNameAscciCode = () => {
    const pre = document.querySelector(".ascii-art pre");
    const lines = pre.textContent.split("\n");

    // find minimum indentation
    const minIndent = Math.min(
        ...lines
        .filter(line => line.trim())
        .map(line => line.match(/^ */)[0].length)
    );

    // Final formating
    pre.textContent = lines.map(line => line.slice(minIndent)).join("\n");
}

// Start ALl the JS function execution
document.addEventListener("DOMContentLoaded", function () {
    formatNameAscciCode();
    getCurrentYear();
    clockSystem();
});