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
    document.querySelectorAll('.slide, .benefit-card, .solution-card, .requirement-card, .timeline-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Добавляем AI частицы на фон
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

// Функция для создания AI частиц на фоне
function createAIParticles() {
    const particlesContainer = document.getElementById('title-slide');
    const numParticles = 30;
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Рандомные параметры для частиц
        const size = Math.random() * 10 + 3;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        // Случайный цвет из градиента
        const colors = [
            'rgba(59, 130, 246, 0.6)', // Синий
            'rgba(139, 92, 246, 0.6)',  // Фиолетовый
            'rgba(236, 72, 153, 0.6)'   // Розовый
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Задаем стили
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${size}px ${color}`;
        
        // Добавляем анимацию
        particle.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Добавляем keyframes для анимации
    const keyframes = document.createElement('style');
    keyframes.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translate(0, 0) rotate(0deg);
            }
            25% {
                transform: translate(20px, 15px) rotate(5deg);
            }
            50% {
                transform: translate(-10px, 30px) rotate(-5deg);
            }
            75% {
                transform: translate(-25px, 10px) rotate(3deg);
            }
        }
    `;
    document.head.appendChild(keyframes);
} 