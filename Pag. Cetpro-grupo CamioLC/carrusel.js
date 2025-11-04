document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-image-slide');
    let currentSlide = 0;
    // Duración actual de cada slide en milisegundos (por ejemplo, 5 segundos)
    const slideInterval = 4000; 

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Mostrar la primera slide al cargar
    showSlide(currentSlide);

    // Iniciar el cambio automático de slides
    setInterval(nextSlide, slideInterval);
});