// Set the selected option based on the current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const selector = document.getElementById('tos-version');
    if (selector) {
        selector.value = currentPage;
    }

    // When the dropdown changes, navigate to the selected page
    selector.addEventListener('change', function() {
        const selectedValue = this.value;
        window.location.href = selectedValue + ".html";
    });
});
