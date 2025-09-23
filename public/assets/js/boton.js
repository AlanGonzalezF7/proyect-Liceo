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






