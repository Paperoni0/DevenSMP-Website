// tos.js - Fixed and simplified version
document.addEventListener('DOMContentLoaded', function() {
    // Get current page (works with any extension or none)
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    // Make all version links work
    document.querySelectorAll('[data-tos-version]').forEach(link => {
        // Highlight current page link
        if (link.getAttribute('data-tos-version') === currentPage) {
            link.classList.add('current-page');
        }
        
        // Handle clicks
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-tos-version');
            window.location.href = targetPage + '.html';
        });
    });
});
