document.addEventListener('contextmenu', event => event.preventDefault());

window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
}