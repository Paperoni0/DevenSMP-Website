// tos.js - Navigation for all TOS variants
document.addEventListener('DOMContentLoaded', function() {
    // Get current page name
    const currentPage = window.location.pathname.split('/').pop();
    
    // Create navigation dropdown
    const navContainer = document.createElement('div');
    navContainer.id = 'tos-nav';
    navContainer.innerHTML = `
        <h3>Select TOS Version:</h3>
        <select id="tos-version">
            <option value="terms.html" ${currentPage === 'terms.html' ? 'selected' : ''}>Website TOS</option>
            <option value="terms_mc.html" ${currentPage === 'terms_mc.html' ? 'selected' : ''}>Minecraft TOS</option>
            <option value="terms_disc.html" ${currentPage === 'terms_disc.html' ? 'selected' : ''}>Discord TOS</option>
        </select>
        <div class="nav-links">
            <a href="terms.html" class="${currentPage === 'terms.html' ? 'active' : ''}">Website</a>
            <a href="terms_mc.html" class="${currentPage === 'terms_mc.html' ? 'active' : ''}">Minecraft</a>
            <a href="terms_disc.html" class="${currentPage === 'terms_disc.html' ? 'active' : ''}">Discord</a>
        </div>
    `;
    
    // Insert navigation at the top of the page
    const header = document.querySelector('header') || document.body;
    header.insertBefore(navContainer, header.firstChild);
    
    // Handle dropdown change
    document.getElementById('tos-version').addEventListener('change', function() {
        window.location.href = this.value;
    });
    
    // Add click handler for all internal TOS links
    document.querySelectorAll('[data-tos-link]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-tos-link');
            window.location.href = target + '.html';
        });
    });
});
