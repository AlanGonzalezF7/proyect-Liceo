const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
const totalSlides = 4; // numero de slide

function updateCarousel() {
    const translateX = -currentSlide * 100;
    carousel.style.transform = `translateX(${translateX}%)`;

    // Actualizar dots
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.remove('bg-white/70');
            dot.classList.add('bg-white');
        } else {
            dot.classList.remove('bg-white');
            dot.classList.add('bg-white/70');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
    console.log('Next slide:', currentSlide); // Para debugging
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
    console.log('Prev slide:', currentSlide); // Para debugging
}

// Event listeners
if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
}

if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
}

// Dots navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
        console.log('Dot clicked, slide:', currentSlide); // Para debugging
    });
});

// Auto play (opcional)
let autoPlay = setInterval(nextSlide, 4000);

// Pause auto play on hover
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoPlay);
    console.log('Autoplay paused');
});

carousel.addEventListener('mouseleave', () => {
    autoPlay = setInterval(nextSlide, 4000);
    console.log('Autoplay resumed');
});

// Initialize
updateCarousel();

// Verificar que todo está funcionando
console.log('Carrusel inicializado');
console.log('Total slides:', totalSlides);
console.log('Carousel element:', carousel);
console.log('Prev button:', prevBtn);
console.log('Next button:', nextBtn);



//  Contacto
const contactButton = document.getElementById('contactButton');
const contactPanel = document.getElementById('contactPanel');
const closePanel = document.getElementById('closePanel');
const contactIcon = document.getElementById('contactIcon');
const contactForm = document.getElementById('contactForm');

let isOpen = false;

function togglePanel() {
    if (isOpen) {
        closeContactPanel();
    } else {
        openContactPanel();
    }
}

function openContactPanel() {
    isOpen = true;
    contactPanel.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
    contactPanel.classList.add('translate-x-0', 'opacity-100', 'slide-in');
    contactIcon.classList.add('rotate-180');
}

function closeContactPanel() {
    isOpen = false;
    contactPanel.classList.remove('translate-x-0', 'opacity-100', 'slide-in');
    contactPanel.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none', 'slide-out');
    contactIcon.classList.remove('rotate-180');

    // Remover la clase slide-out después de la animación
    setTimeout(() => {
        contactPanel.classList.remove('slide-out');
    }, 300);
}

// Event listeners
contactButton.addEventListener('click', togglePanel);
closePanel.addEventListener('click', closeContactPanel);

// Cerrar panel al hacer clic fuera
document.addEventListener('click', (e) => {
    if (isOpen && !contactButton.contains(e.target) && !contactPanel.contains(e.target)) {
        closeContactPanel();
    }
});

// Cerrar panel con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
        closeContactPanel();
    }
});

// Manejar envío del formulario
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simular envío del formulario
    const formData = new FormData(e.target);
    console.log('Formulario enviado:', Object.fromEntries(formData));

    // Mostrar mensaje de confirmación
    alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');

    // Limpiar formulario
    e.target.reset();
    closeContactPanel();
});

// Efecto de hover en el botón
contactButton.addEventListener('mouseenter', () => {
    contactButton.classList.add('scale-105');
});

contactButton.addEventListener('mouseleave', () => {
    contactButton.classList.remove('scale-105');
});



