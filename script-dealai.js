document.addEventListener('DOMContentLoaded', () => {
    // Добавляем эффект частиц на фоне первого слайда
    createAIParticles();
    
    // Анимация появления элементов при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Добавляем последовательную анимацию для дочерних элементов
                if (entry.target.classList.contains('solution-card') || 
                    entry.target.classList.contains('requirement-card') ||
                    entry.target.classList.contains('timeline-container')) {
                    const children = entry.target.querySelectorAll('h3, .solution-icon, .feature-title, .benefit-title, .tech-title, .workflow-title, li');
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

    // Добавляем класс для анимации всем карточкам
    document.querySelectorAll('.solution-card, .benefit-card, .requirement-card, .kiosk-option, .timeline-item, .option-item').forEach((card, index) => {
        card.classList.add('slide-up');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Добавляем класс для анимации строкам таблицы
    document.querySelectorAll('.table-row').forEach((row, index) => {
        row.style.transitionDelay = `${index * 0.05}s`;
        row.classList.add('slide-in');
        observer.observe(row);
    });

    // Добавляем плавный скролл для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Добавляем параллакс-эффект для фона
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        const titleSlide = document.getElementById('title-slide');
        if (titleSlide) {
            titleSlide.style.backgroundPosition = 
                `calc(10% + ${moveX}px) calc(20% + ${moveY}px), 
                 calc(90% + ${-moveX}px) calc(50% + ${-moveY}px), 
                 calc(30% + ${moveX}px) calc(80% + ${-moveY}px)`;
        }
    });

    // Добавляем интерактивность для кнопок
    document.querySelectorAll('.gradient-button, .outline-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
            button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = 'none';
        });
        
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
            
            // Добавляем эффект пульсации при клике
            const pulse = document.createElement('div');
            pulse.classList.add('pulse-effect');
            button.appendChild(pulse);
            
            setTimeout(() => {
                pulse.remove();
            }, 500);
        });
    });
    
    // Добавляем 3D-эффект для карточек решений
    document.querySelectorAll('.solution-card').forEach(card => {
        // Добавляем обработчик для 3D-эффекта
        card.addEventListener('mousemove', handleCardTilt);
        card.addEventListener('mouseleave', resetCardTilt);
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';
            
            // Подсвечиваем иконку решения
            const icon = card.querySelector('.solution-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.filter = 'brightness(1.2)';
            }
            
            // Подсвечиваем номер решения
            const number = card.querySelector('.solution-number');
            if (number) {
                number.style.transform = 'scale(1.1)';
                number.style.background = 'var(--primary-gradient)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--card-shadow)';
            
            // Возвращаем иконку в исходное состояние
            const icon = card.querySelector('.solution-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.filter = 'brightness(1)';
            }
            
            // Возвращаем номер в исходное состояние
            const number = card.querySelector('.solution-number');
            if (number) {
                number.style.transform = 'scale(1)';
                number.style.background = '';
            }
        });
    });
    
    // Добавляем интерактивность для временной шкалы
    document.querySelectorAll('.timeline-marker').forEach(marker => {
        marker.addEventListener('mouseenter', () => {
            marker.style.transform = 'scale(1.1)';
            marker.style.background = 'var(--primary-gradient)';
            
            // Подсвечиваем соответствующий контент
            const content = marker.closest('.timeline-item').querySelector('.timeline-content');
            if (content) {
                content.style.transform = 'translateX(10px)';
                content.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            }
        });
        
        marker.addEventListener('mouseleave', () => {
            marker.style.transform = 'scale(1)';
            marker.style.background = '';
            
            // Возвращаем контент в исходное состояние
            const content = marker.closest('.timeline-item').querySelector('.timeline-content');
            if (content) {
                content.style.transform = 'translateX(0)';
                content.style.boxShadow = 'none';
            }
        });
    });
    
    // Добавляем интерактивность для карточек преимуществ
    document.querySelectorAll('.benefit-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
            
            // Анимируем иконку
            const icon = card.querySelector('.benefit-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
            
            // Возвращаем иконку в исходное состояние
            const icon = card.querySelector('.benefit-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Добавляем интерактивность для карточек требований
    document.querySelectorAll('.requirement-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            
            // Анимируем иконку
            const icon = card.querySelector('.requirement-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            
            // Возвращаем иконку в исходное состояние
            const icon = card.querySelector('.requirement-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Добавляем эффект печатающегося текста для заголовка
    const titleText = document.querySelector('.title-text');
    if (titleText) {
        const text = titleText.textContent;
        titleText.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                titleText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Запускаем эффект печати через небольшую задержку
        setTimeout(typeWriter, 500);
    }
    
    // Добавляем счетчики с анимацией для цен
    document.querySelectorAll('.solution-price').forEach(price => {
        const priceText = price.textContent;
        const priceValue = parseInt(priceText.match(/\d+/)[0]);
        
        // Создаем элемент для анимированного числа
        const priceNumber = document.createElement('span');
        priceNumber.classList.add('price-number');
        price.innerHTML = price.innerHTML.replace(/\d+ \$/, `<span class="price-number">0</span> $`);
        
        // Наблюдаем за появлением элемента
        const priceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Анимируем счетчик
                    let currentValue = 0;
                    const duration = 1500; // ms
                    const increment = priceValue / (duration / 16);
                    
                    const updateCounter = () => {
                        if (currentValue < priceValue) {
                            currentValue += increment;
                            if (currentValue > priceValue) currentValue = priceValue;
                            entry.target.querySelector('.price-number').textContent = Math.floor(currentValue).toLocaleString();
                            requestAnimationFrame(updateCounter);
                        }
                    };
                    
                    updateCounter();
                    priceObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        priceObserver.observe(price);
    });
});

// Функция для создания эффекта частиц AI на фоне первого слайда
function createAIParticles() {
    const titleSlide = document.getElementById('title-slide');
    if (!titleSlide) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'ai-particles-container';
    titleSlide.appendChild(particlesContainer);
    
    // Создаем частицы разных типов
    for (let i = 0; i < 45; i++) {
        const particle = document.createElement('div');
        
        // Определяем тип частицы
        let particleType = 'normal';
        if (i % 10 === 0) {
            particleType = 'bright';
        } else if (i % 15 === 0) {
            particleType = 'large';
        }
        
        particle.className = `ai-particle ${particleType}`;
        
        // Случайное положение
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Случайный размер в зависимости от типа
        let size;
        if (particleType === 'normal') {
            size = Math.random() * 4 + 2;
        } else if (particleType === 'bright') {
            size = Math.random() * 6 + 3;
        } else {
            size = Math.random() * 10 + 5;
        }
        
        // Случайная скорость (разная для каждого типа)
        const speedFactor = particleType === 'large' ? 0.05 : 
                          particleType === 'bright' ? 0.1 : 0.15;
        const speedX = (Math.random() * 0.3 - 0.15) * speedFactor;
        const speedY = (Math.random() * 0.3 - 0.15) * speedFactor;
        
        // Случайная прозрачность
        const opacity = particleType === 'bright' ? 
                      (Math.random() * 0.4 + 0.4) : 
                      (Math.random() * 0.3 + 0.1);
        
        // Случайный градиент для больших частиц
        let background = '';
        if (particleType === 'large') {
            const hue1 = Math.floor(Math.random() * 60) + 200; // Синие тона
            const hue2 = Math.floor(Math.random() * 60) + 280; // Фиолетовые тона
            background = `radial-gradient(circle, hsl(${hue1}, 80%, 60%), hsl(${hue2}, 80%, 50%))`;
        } else if (particleType === 'bright') {
            background = 'linear-gradient(135deg, rgba(120, 180, 255, 0.9), rgba(180, 120, 255, 0.9))';
        } else {
            background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.7), rgba(139, 92, 246, 0.7))';
        }
        
        // Применяем стили
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = opacity.toString();
        particle.style.background = background;
        
        // Случайная начальная анимация
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        // Сохраняем скорость как атрибуты
        particle.dataset.speedX = speedX;
        particle.dataset.speedY = speedY;
        particle.dataset.rotation = Math.random() * 360;
        particle.dataset.rotationSpeed = (Math.random() * 2 - 1) * 0.2;
        particle.dataset.scale = 1;
        particle.dataset.scaleDirection = Math.random() > 0.5 ? 1 : -1;
        
        particlesContainer.appendChild(particle);
    }
    
    // Анимируем частицы
    function animateAIParticles() {
        const particles = document.querySelectorAll('.ai-particle');
        
        particles.forEach(particle => {
            // Получаем текущее положение
            let posX = parseFloat(particle.style.left);
            let posY = parseFloat(particle.style.top);
            
            // Получаем скорость
            const speedX = parseFloat(particle.dataset.speedX);
            const speedY = parseFloat(particle.dataset.speedY);
            
            // Получаем вращение
            let rotation = parseFloat(particle.dataset.rotation);
            const rotationSpeed = parseFloat(particle.dataset.rotationSpeed);
            
            // Получаем масштаб
            let scale = parseFloat(particle.dataset.scale);
            let scaleDirection = parseFloat(particle.dataset.scaleDirection);
            
            // Обновляем положение
            posX += speedX;
            posY += speedY;
            
            // Обновляем вращение
            rotation += rotationSpeed;
            
            // Обновляем масштаб
            scale += 0.002 * scaleDirection;
            if (scale > 1.2) {
                scale = 1.2;
                particle.dataset.scaleDirection = -1;
            } else if (scale < 0.8) {
                scale = 0.8;
                particle.dataset.scaleDirection = 1;
            }
            
            // Проверяем границы
            if (posX > 100) posX = 0;
            if (posX < 0) posX = 100;
            if (posY > 100) posY = 0;
            if (posY < 0) posY = 100;
            
            // Применяем новое положение и трансформацию
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.transform = `rotate(${rotation}deg) scale(${scale})`;
            
            // Сохраняем обновленные значения
            particle.dataset.rotation = rotation;
            particle.dataset.scale = scale;
            particle.dataset.scaleDirection = scaleDirection;
        });
        
        requestAnimationFrame(animateAIParticles);
    }
    
    animateAIParticles();
}

// Функция для 3D-эффекта карточек
function handleCardTilt(e) {
    const card = this;
    const cardRect = card.getBoundingClientRect();
    const cardWidth = cardRect.width;
    const cardHeight = cardRect.height;
    
    // Вычисляем положение курсора относительно центра карточки
    const centerX = cardRect.left + cardWidth / 2;
    const centerY = cardRect.top + cardHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Вычисляем угол наклона (максимум 10 градусов)
    const rotateX = (mouseY / (cardHeight / 2)) * -10;
    const rotateY = (mouseX / (cardWidth / 2)) * 10;
    
    // Применяем трансформацию
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    
    // Добавляем эффект подсветки
    const intensity = 255 - Math.sqrt(mouseX * mouseX + mouseY * mouseY) / Math.sqrt((cardWidth / 2) * (cardWidth / 2) + (cardHeight / 2) * (cardHeight / 2)) * 255;
    card.style.boxShadow = `0 15px 35px rgba(0, 0, 0, 0.3), 
                           ${mouseX / 25}px ${mouseY / 25}px 30px rgba(59, 130, 246, 0.3)`;
}

// Функция для сброса 3D-эффекта
function resetCardTilt() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = 'var(--card-shadow)';
}

// Добавляем стили для анимаций
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transition: opacity 1s ease;
    }
    
    .slide-up {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .slide-in {
        opacity: 0;
        transform: translateX(-30px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .visible {
        opacity: 1;
        transform: translate(0, 0);
    }
    
    .solution-card, .benefit-card, .requirement-card, .kiosk-option, .timeline-item, .option-item {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .timeline-marker, .solution-icon, .benefit-icon, .requirement-icon, .solution-number, .timeline-content {
        transition: all 0.3s ease;
    }
    
    .pulse-effect {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        animation: pulse 0.5s ease-out;
        z-index: -1;
    }
    
    @keyframes pulse {
        0% {
            width: 0;
            height: 0;
            opacity: 0.5;
        }
        100% {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
    
    .price-number {
        display: inline-block;
        font-weight: bold;
    }
    
    /* Добавляем эффект свечения для кнопок */
    .gradient-button {
        position: relative;
        overflow: hidden;
    }
    
    .gradient-button:after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
        transform: rotate(45deg);
        animation: shine 3s infinite;
    }
    
    @keyframes shine {
        0% {
            top: -50%;
            left: -50%;
        }
        100% {
            top: 150%;
            left: 150%;
        }
    }
    
    /* Стили для AI частиц */
    .ai-particles-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
    }
    
    .ai-particle {
        position: absolute;
        border-radius: 50%;
        filter: blur(1px);
        animation: float 15s infinite alternate;
        transition: transform 0.5s ease;
    }
    
    .ai-particle.bright {
        filter: blur(2px);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        animation: float 12s infinite alternate, pulse-brightness 4s infinite alternate;
    }
    
    .ai-particle.large {
        filter: blur(3px);
        box-shadow: 0 0 15px rgba(120, 120, 255, 0.3);
        animation: float 20s infinite alternate, pulse-size 6s infinite alternate;
    }
    
    @keyframes float {
        0% {
            transform: translateY(0) rotate(0);
        }
        50% {
            transform: translateY(-20px) rotate(180deg);
        }
        100% {
            transform: translateY(20px) rotate(360deg);
        }
    }
    
    @keyframes pulse-brightness {
        0% {
            opacity: 0.4;
        }
        50% {
            opacity: 0.8;
        }
        100% {
            opacity: 0.6;
        }
    }
    
    @keyframes pulse-size {
        0% {
            transform: scale(0.8);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
    
    /* Медиа-запрос для мобильных устройств */
    @media (max-width: 768px) {
        .ai-particle {
            opacity: 0.5; /* Немного уменьшаем яркость для мобильных устройств */
        }
    }
`;
document.head.appendChild(style); 