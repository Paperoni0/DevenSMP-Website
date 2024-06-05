document.getElementById('themeToggle').addEventListener('change', (event) => {
    if (event.target.checked) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

document.getElementById('themeClose').addEventListener('click', () => {
    document.getElementById('themeContainer').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('themeToggle').checked = (localStorage.getItem('theme') === 'dark') ? true : false;
});