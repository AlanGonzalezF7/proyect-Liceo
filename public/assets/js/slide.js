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
