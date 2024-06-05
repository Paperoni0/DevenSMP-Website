// Prevent Right Click
document.addEventListener('contextmenu', event => event.preventDefault());
window.oncontextmenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    return false;
}

// Menu Button Function
document.getElementById('menuToggle').addEventListener('click', () => document.getElementById('menu').style.display = (document.getElementById('menu').style.display === 'flex') ? 'none' : 'flex');