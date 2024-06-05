(function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.body.classList.add(theme);
    } else {
        document.body.classList.add('light');
    }
})();