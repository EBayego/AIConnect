document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    // Agregar la clase "hidden" a todas las secciones inicialmente
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    const observerOptions = {
        root: null, // El viewport
        rootMargin: '0px',
        threshold: 0.1 // El 10% de la sección debe ser visible para activarse
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target); // Dejar de observar una vez que la sección sea visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});