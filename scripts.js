document.addEventListener('contextmenu', event => event.preventDefault());

const position = document.documentElement;
position.style.setProperty("--x", "0px");
position.addEventListener("mousemove", e => {
    position.style.setProperty("--x", e.clientX + "px");
})

document.querySelectorAll('.randomize').forEach(function (element) {
    var randomValue = Math.random() * (5 - 0.2) + 0.2;
    element.style.setProperty('--i', randomValue);
});
