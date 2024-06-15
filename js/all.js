(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.body.classList.add(theme);
    } else {
        document.body.classList.add('light');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('contextmenu', event => event.preventDefault());
    window.oncontextmenu = (event) => {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    document.getElementById('menuToggle').addEventListener('click', () => document.getElementById('menu').style.display = (document.getElementById('menu').style.display === 'flex') ? 'none' : 'flex');
});
