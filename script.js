function changeLanguage(lang) {
    // Hide all elements with language classes
    document.querySelectorAll('.en, .tr').forEach(element => {
        element.style.display = 'none';
    });

    // Show elements for selected language
    document.querySelectorAll('.' + lang).forEach(element => {
        element.style.display = 'block';
    });

    // Update document language
    document.documentElement.lang = lang;

    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Check for stored language preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
        changeLanguage(storedLang);
    } else {
        // Default to English
        changeLanguage('en');
    }
}); 