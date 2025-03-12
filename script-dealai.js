document.addEventListener('DOMContentLoaded', function() {
    // Добавляем стили анимаций
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .solution-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .solution-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(59, 130, 246, 0.15);
        }
        
        .gradient-button, .outline-button, .cta-primary {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .gradient-button:hover, .outline-button:hover, .cta-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
        }
        
        .gradient-button:active, .outline-button:active, .cta-primary:active {
            transform: translateY(0);
        }
        
        /* AI Частицы для фона */
        .particle {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.5;
            z-index: 1;
            transform-origin: center;
            will-change: transform, opacity;
        }
        
        @keyframes floatParticle {
            0% {
                transform: translate(0, 0) scale(1) rotate(0deg);
                opacity: 0.3;
            }
            25% {
                transform: translate(var(--random-x1), var(--random-y1)) scale(var(--random-scale1)) rotate(var(--random-rotate1));
                opacity: var(--random-opacity1);
            }
            50% {
                transform: translate(var(--random-x2), var(--random-y2)) scale(var(--random-scale2)) rotate(var(--random-rotate2));
                opacity: var(--random-opacity2);
            }
            75% {
                transform: translate(var(--random-x3), var(--random-y3)) scale(var(--random-scale3)) rotate(var(--random-rotate3));
                opacity: var(--random-opacity3);
            }
            100% {
                transform: translate(0, 0) scale(1) rotate(0deg);
                opacity: 0.3;
            }
        }
    `;
    document.head.appendChild(styleSheet);
    
    // Создаем анимацию с наблюдателем пересечений
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Наблюдаем за всеми элементами, которые должны анимироваться
    document.querySelectorAll('.slide:not(#title-slide), .benefit-card, .solution-card, .requirement-card, .timeline-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Добавляем AI частицы на фон с улучшенной анимацией
    createAIParticles();
    
    // Плавный скролл для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Добавляем эффект нажатия на кнопки
    document.querySelectorAll('.gradient-button, .outline-button, .cta-primary').forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(2px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Функция для создания AI частиц на фоне с улучшенной анимацией
function createAIParticles() {
    const particlesContainer = document.getElementById('title-slide');
    const numParticles = 45; // Увеличиваем количество частиц
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Создаем более разнообразные и случайные параметры
        const size = Math.random() * 12 + 3; // Больший разброс размеров
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Генерируем уникальные случайные значения для каждой точки анимации
        const randomX1 = Math.random() * 60 - 30; // px
        const randomY1 = Math.random() * 60 - 30; // px
        const randomX2 = Math.random() * 60 - 30; // px
        const randomY2 = Math.random() * 60 - 30; // px
        const randomX3 = Math.random() * 60 - 30; // px
        const randomY3 = Math.random() * 60 - 30; // px
        
        const randomScale1 = Math.random() * 0.5 + 0.8; // 0.8-1.3
        const randomScale2 = Math.random() * 0.5 + 0.8; // 0.8-1.3
        const randomScale3 = Math.random() * 0.5 + 0.8; // 0.8-1.3
        
        const randomRotate1 = Math.random() * 60 - 30; // -30 to 30 degrees
        const randomRotate2 = Math.random() * 60 - 30; // -30 to 30 degrees
        const randomRotate3 = Math.random() * 60 - 30; // -30 to 30 degrees
        
        const randomOpacity1 = Math.random() * 0.4 + 0.3; // 0.3-0.7
        const randomOpacity2 = Math.random() * 0.4 + 0.3; // 0.3-0.7
        const randomOpacity3 = Math.random() * 0.4 + 0.3; // 0.3-0.7
        
        const duration = Math.random() * 25 + 15; // 15-40s
        const delay = Math.random() * 5; // 0-5s
        
        // Определяем тип частицы (обычная, яркая, большая)
        const particleType = Math.floor(Math.random() * 3);
        
        // Создаем более разнообразные и яркие цвета
        const colors = [
            'rgba(59, 130, 246, 0.6)', // Синий
            'rgba(139, 92, 246, 0.6)',  // Фиолетовый
            'rgba(236, 72, 153, 0.6)',  // Розовый
            'rgba(16, 185, 129, 0.6)',  // Зеленый
            'rgba(245, 158, 11, 0.6)'   // Оранжевый
        ];
        
        let color;
        let glow;
        
        if (particleType === 0) {
            // Обычная частица
            color = colors[Math.floor(Math.random() * colors.length)];
            glow = `0 0 ${size}px ${color}`;
        } else if (particleType === 1) {
            // Яркая частица
            color = colors[Math.floor(Math.random() * 3)];
            glow = `0 0 ${size * 2}px ${color.replace('0.6', '0.8')}`;
        } else {
            // Большая частица с градиентом
            const colorIndex1 = Math.floor(Math.random() * colors.length);
            let colorIndex2 = colorIndex1;
            while (colorIndex2 === colorIndex1) {
                colorIndex2 = Math.floor(Math.random() * colors.length);
            }
            const color1 = colors[colorIndex1].replace('0.6', '0.7');
            const color2 = colors[colorIndex2].replace('0.6', '0.7');
            
            color = `radial-gradient(circle, ${color1} 0%, ${color2} 100%)`;
            glow = `0 0 ${size * 3}px ${color1.replace('rgba', 'rgb').replace(', 0.7)', ')')}`;
        }
        
        // Задаем уникальные CSS переменные для анимации
        particle.style.setProperty('--random-x1', `${randomX1}px`);
        particle.style.setProperty('--random-y1', `${randomY1}px`);
        particle.style.setProperty('--random-x2', `${randomX2}px`);
        particle.style.setProperty('--random-y2', `${randomY2}px`);
        particle.style.setProperty('--random-x3', `${randomX3}px`);
        particle.style.setProperty('--random-y3', `${randomY3}px`);
        
        particle.style.setProperty('--random-scale1', randomScale1);
        particle.style.setProperty('--random-scale2', randomScale2);
        particle.style.setProperty('--random-scale3', randomScale3);
        
        particle.style.setProperty('--random-rotate1', `${randomRotate1}deg`);
        particle.style.setProperty('--random-rotate2', `${randomRotate2}deg`);
        particle.style.setProperty('--random-rotate3', `${randomRotate3}deg`);
        
        particle.style.setProperty('--random-opacity1', randomOpacity1);
        particle.style.setProperty('--random-opacity2', randomOpacity2);
        particle.style.setProperty('--random-opacity3', randomOpacity3);
        
        // Задаем основные стили
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.background = color;
        particle.style.boxShadow = glow;
        particle.style.opacity = '0.3';
        
        // Добавляем анимацию с уникальными свойствами
        particle.style.animation = `floatParticle ${duration}s infinite ease-in-out ${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
} 