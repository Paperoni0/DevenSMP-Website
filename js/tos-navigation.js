// tos.js - Optimized for your data-tos-version links
document.addEventListener('DOMContentLoaded', function() {
    // Get current page name (works with or without .html extension)
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    // 1. Handle dropdown navigation if exists
    const versionDropdown = document.getElementById('tos-version');
    if (versionDropdown) {
        versionDropdown.value = currentPage;
        versionDropdown.addEventListener('change', function() {
            window.location.href = this.value + '.html';
        });
    }
    
    // 2. Handle your data-tos-version links
    document.querySelectorAll('[data-tos-version]').forEach(link => {
        // Add active class if this link matches current page
        if (link.getAttribute('data-tos-version') === currentPage) {
            link.classList.add('active');
        }
        
        // Add click handler
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetVersion = this.getAttribute('data-tos-version');
            window.location.href = targetVersion + '.html';
        });
    });
});
