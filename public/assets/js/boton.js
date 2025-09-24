// Boton de contacto   //hubicado en todo html
const contactButton = document.getElementById('contactButton');
const contactPanel = document.getElementById('contactPanel');
const closePanel = document.getElementById('closePanel');
const contactIcon = document.getElementById('contactIcon');
const contactForm = document.getElementById('contactForm');

let isOpen = false;
// Panel
function togglePanel() {
    if (isOpen) {
        closeContactPanel();
    } else {
        openContactPanel();
    }
}
// Abrir panel
function openContactPanel() {
    isOpen = true;
    contactPanel.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
    contactPanel.classList.add('translate-x-0', 'opacity-100', 'slide-in');
    contactIcon.classList.add('rotate-180');
}
// Cerrar panel
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
// Termino de boton de contacto


// Función para visualizar o descargar el PDF    // hubicado en proyecto-educativo.html
function downloadPDF() {
    // url del PDF
    const pdfUrl = 'https://drive.google.com/file/d/1RjjELcvMgV0XncCZiJov_4zT-yGnhIfY/view';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'proyecto-educativo.pdf';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// Termino de funcion descargar pdf





const socialUrls = {
    facebook: "https://web.facebook.com/liceomanueljesus?ref=embed_page",
    youtube: "https://youtube.com/@liceomanueljesusandrade", // Actualizar con la URL real
    instagram: "https://instagram.com/liceomanueljesus" // Actualizar con la URL real
};

// Función para Facebook
function openFacebook() {
    try {
        window.open("https://web.facebook.com/liceomanueljesus?ref=embed_page", '_blank', 'noopener,noreferrer');
        console.log('Facebook abierto:', new Date());
    } catch (error) {
        console.error('Error al abrir Facebook:', error);
        showMessage('Error al abrir Facebook. Intenta nuevamente.', 'error');
    }
}

// Función para YouTube
function openYouTube() {
    try {
        window.open(socialUrls.youtube, '_blank', 'noopener,noreferrer');
        console.log('YouTube abierto:', new Date());
    } catch (error) {
        console.error('Error al abrir YouTube:', error);
        showMessage('Error al abrir YouTube. Intenta nuevamente.', 'error');
    }
}

// Función para Instagram
function openInstagram() {
    try {
        window.open(socialUrls.instagram, '_blank', 'noopener,noreferrer');
        console.log('Instagram abierto:', new Date());
    } catch (error) {
        console.error('Error al abrir Instagram:', error);
        showMessage('Error al abrir Instagram. Intenta nuevamente.', 'error');
    }
}

// Función para manejar el newsletter
function handleNewsletterSubmit(event) {
    event.preventDefault();

    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();

    if (email) {
        // Simular envío del email
        showMessage('¡Gracias! Te has suscrito correctamente.', 'success');
        emailInput.value = '';

        // Aquí puedes agregar la lógica real para enviar el email
        console.log('Email suscrito:', email, new Date());
    } else {
        showMessage('Por favor ingresa un email válido.', 'error');
    }
}

// Función para mostrar mensajes
function showMessage(message, type) {
    const messageElement = document.getElementById('newsletter-message');

    messageElement.textContent = message;
    messageElement.className = `mt-2 text-sm ${type === 'success' ? 'text-green-400' : 'text-red-400'}`;

    // Limpiar el mensaje después de 5 segundos
    setTimeout(() => {
        messageElement.textContent = '';
        messageElement.className = 'mt-2 text-sm text-transparent';
    }, 5000);
}

// Función para smooth scroll a secciones internas
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Event listeners para navegación suave
document.addEventListener('DOMContentLoaded', function () {
    // Agregar event listeners a los enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
        });
    });

    console.log('Footer del Liceo Manuel Jesús Andrade Bórquez cargado correctamente');
});
