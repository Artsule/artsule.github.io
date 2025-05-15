const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        // Zwijanie innych sekcji
        document.querySelectorAll('.accordion-content').forEach(section => {
            if (section !== content) {
                section.style.display = 'none';
            }
        });

        // Przełączanie widoczności bieżącej sekcji
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});