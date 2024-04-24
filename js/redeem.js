document.getElementById('toggleButton').addEventListener('click', function() {
    const navSide = document.getElementById('navSide');
    navSide.style.display = (navSide.style.display === 'flex') ? 'none' : 'flex';
});

document.getElementById('codeForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const code = document.getElementById('code').value.toLowerCase();
    switch(code) {
        case 'freegift69':
            document.getElementById('invalid').style.display = 'none';
            const rickroll = document.getElementById('rickrollVideo');
            rickroll.requestFullscreen().catch(error => {
                console.error(`Error attempting to request fullscreen mode for rickroll video: ${error}`);
            });
            break;
        default:
            document.getElementById('invalid').style.display = 'block';
    }
});

function closeErrorPopUp() {
    document.getElementById('invalid').style.display = 'none';
}