document.getElementById('toggleButton').addEventListener('click', () => {
    const navSide = document.getElementById('navSide');
    navSide.style.display = (navSide.style.display === 'flex') ? 'none' : 'flex';
});