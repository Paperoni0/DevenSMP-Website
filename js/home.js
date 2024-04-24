import './preventRightClick';

document.getElementById('toggleButton').addEventListener('click', function() {
    const navSide = document.getElementById('navSide');
    navSide.style.display = (navSide.style.display === 'flex') ? 'none' : 'flex';
});