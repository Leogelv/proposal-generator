document.addEventListener('DOMContentLoaded', () => {
    // Создаем магические частицы на первом экране
    createMagicParticles();
    
    // Анимация появления элементов при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Добавляем последовательную анимацию для дочерних элементов
                if (entry.target.classList.contains('solution-card') || 
                    entry.target.classList.contains('service-card') ||
                    entry.target.classList.contains('tech-section')) {
                    const children = entry.target.querySelectorAll('h3, .solution-icon, .service-icon, .tech-item, li');
                    children.forEach((child, index) => {
                        child.style.transitionDelay = `${0.1 + index * 0.05}s`;
                        child.classList.add('fade-in');
                        child.classList.add('visible');
                    });
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Добавляем класс для анимации всем слайдам
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.add('fade-in');
        observer.observe(slide);
    });

    // Добавляем класс для анимации карточкам
    document.querySelectorAll('.solution-card, .service-card, .package-card').forEach((card, index) => {
        card.classList.add('slide-up');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Эффект параллакса для первого экрана
    const titleSlide = document.getElementById('title-slide');
    if (titleSlide) {
        titleSlide.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const title = document.querySelector('.hero-title');
            const subtitle = document.querySelector('.hero-subtitle');
            const ctaButton = document.querySelector('.cta-primary');
            const particles = document.querySelectorAll('.magic-particle');
            
            if (title) title.style.transform = `translate(${mouseX * -20}px, ${mouseY * -10}px)`;
            if (subtitle) subtitle.style.transform = `translate(${mouseX * -10}px, ${mouseY * -5}px)`;
            if (ctaButton) ctaButton.style.transform = `translate(${mouseX * -5}px, ${mouseY * -5}px)`;
            
            particles.forEach(particle => {
                const speed = parseFloat(particle.getAttribute('data-speed'));
                const x = (mouseX * 20) * speed;
                const y = (mouseY * 20) * speed;
                particle.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

    // Плавный скролл для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Проверка всех кнопок для ссылки на Telegram
    document.querySelectorAll('a').forEach(link => {
        if (link.getAttribute('href') && link.getAttribute('href').includes('t.me/')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.open(this.getAttribute('href'), '_blank');
            });
        }
    });

    // Добавляем 3D-эффект для карточек решений
    document.querySelectorAll('.solution-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (x - centerX) / -20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // Анимация для иконок в технологиях
    document.querySelectorAll('.tech-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.tech-icon');
            icon.style.animation = 'pulse 0.5s';
            
            setTimeout(() => {
                icon.style.animation = '';
            }, 500);
        });
    });
});

// Функция для создания магических частиц на фоне
function createMagicParticles() {
    const container = document.getElementById('magic-particles');
    if (!container) return;

    // Очищаем контейнер
    container.innerHTML = '';
    
    // Определяем типы частиц
    const particleTypes = [
        { emoji: '✨', size: '10px', animationDuration: '15s' },
        { emoji: '🔮', size: '20px', animationDuration: '25s' },
        { emoji: '⭐', size: '12px', animationDuration: '20s' },
        { emoji: '🌟', size: '15px', animationDuration: '22s' },
        { emoji: '💫', size: '13px', animationDuration: '18s' }
    ];
    
    // Добавляем стили для анимации
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0) translateX(0) rotate(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 0.8;
            }
            100% {
                transform: translateY(-100vh) translateX(var(--tx)) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.3);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Создаем частицы
    for (let i = 0; i < 30; i++) {
        const randomType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        const particle = document.createElement('div');
        
        // Случайная позиция и задержка
        const posX = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = parseFloat(randomType.animationDuration) + (Math.random() * 10 - 5);
        const translateX = Math.random() * 100 - 50; // Случайное перемещение по X
        
        // Случайная скорость для эффекта параллакса
        const speed = Math.random() * 0.5 + 0.1;
        
        // Стили частицы
        particle.classList.add('magic-particle');
        particle.setAttribute('data-speed', speed);
        particle.style.cssText = `
            position: absolute;
            left: ${posX}%;
            bottom: -20px;
            font-size: ${randomType.size};
            z-index: 1;
            animation: float ${duration}s ease-in infinite;
            animation-delay: ${delay}s;
            --tx: ${translateX}px;
            opacity: 0;
            filter: drop-shadow(0 0 5px rgba(191, 90, 242, 0.7));
        `;
        
        particle.textContent = randomType.emoji;
        container.appendChild(particle);
    }
    
    // Добавляем мистические символы Таро
    const tarotSymbols = ['♠', '♥', '♦', '♣', '★', '☽', '☀', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
    
    for (let i = 0; i < 25; i++) {
        const symbolIndex = Math.floor(Math.random() * tarotSymbols.length);
        const particle = document.createElement('div');
        
        // Случайная позиция и задержка
        const posX = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 20 + (Math.random() * 15);
        const size = 12 + (Math.random() * 15);
        const translateX = Math.random() * 120 - 60;
        const speed = Math.random() * 0.5 + 0.1;
        
        // Стили частицы
        particle.classList.add('magic-particle');
        particle.setAttribute('data-speed', speed);
        particle.style.cssText = `
            position: absolute;
            left: ${posX}%;
            bottom: -20px;
            font-size: ${size}px;
            z-index: 1;
            animation: float ${duration}s ease-in infinite;
            animation-delay: ${delay}s;
            --tx: ${translateX}px;
            opacity: 0;
            color: rgba(191, 90, 242, 0.5);
            filter: drop-shadow(0 0 5px rgba(191, 90, 242, 0.3));
        `;
        
        particle.textContent = tarotSymbols[symbolIndex];
        container.appendChild(particle);
    }
    
    // Добавляем светящиеся огоньки
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        
        // Случайная позиция и задержка
        const posX = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 15 + (Math.random() * 10);
        const size = 3 + (Math.random() * 4);
        const translateX = Math.random() * 100 - 50;
        const speed = Math.random() * 0.5 + 0.1;
        
        // Случайные цвета для огоньков
        const colors = ['rgba(191, 90, 242, 0.8)', 'rgba(219, 39, 119, 0.8)', 'rgba(30, 64, 175, 0.8)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Стили частицы
        particle.classList.add('magic-particle');
        particle.setAttribute('data-speed', speed);
        particle.style.cssText = `
            position: absolute;
            left: ${posX}%;
            bottom: -20px;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background-color: ${color};
            z-index: 1;
            animation: float ${duration}s ease-in infinite;
            animation-delay: ${delay}s;
            --tx: ${translateX}px;
            opacity: 0;
            box-shadow: 0 0 10px ${color}, 0 0 20px ${color};
        `;
        
        container.appendChild(particle);
    }
} 