document.addEventListener('DOMContentLoaded', () => {
    // Создаем навигационное меню
    createNavigation();
    
    // Добавляем эффект частиц на фоне
    createParticles();
    
    // Добавляем прогресс-бар для временной шкалы
    createTimelineProgress();
    
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
        
        document.body.style.backgroundPosition = `calc(10% + ${moveX}px) calc(20% + ${moveY}px), 
                                                 calc(90% + ${-moveX}px) calc(50% + ${-moveY}px), 
                                                 calc(30% + ${moveX}px) calc(80% + ${-moveY}px)`;
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

// Функция для создания навигационного меню
function createNavigation() {
    const slides = document.querySelectorAll('.slide');
    const nav = document.createElement('nav');
    nav.className = 'floating-nav';
    
    // Создаем список разделов
    const sections = [
        { id: 'title-slide', title: 'Главная' },
        { id: 'benefits-slide', title: 'Преимущества' },
        { id: 'solutions-slide', title: 'Решения' },
        { id: 'requirements-slide', title: 'Требования' },
        { id: 'timeline-slide', title: 'Сроки' },
        { id: 'budget-slide', title: 'Смета' },
        { id: 'final-slide', title: 'Контакты' }
    ];
    
    // Создаем элементы меню
    sections.forEach(section => {
        const link = document.createElement('a');
        link.href = `#${section.id}`;
        link.textContent = section.title;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' });
        });
        nav.appendChild(link);
    });
    
    // Добавляем меню на страницу
    document.body.appendChild(nav);
    
    // Отслеживаем скролл для подсветки активного пункта
    window.addEventListener('scroll', () => {
        let current = '';
        slides.forEach(slide => {
            const slideTop = slide.offsetTop;
            const slideHeight = slide.clientHeight;
            if (pageYOffset >= (slideTop - slideHeight / 3)) {
                current = slide.getAttribute('id');
            }
        });
        
        // Подсвечиваем активный пункт
        document.querySelectorAll('.floating-nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Функция для создания эффекта частиц на фоне
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);
    
    // Создаем частицы
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Случайное положение
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Случайный размер
        const size = Math.random() * 5 + 2;
        
        // Случайная скорость
        const speedX = Math.random() * 0.5 - 0.25;
        const speedY = Math.random() * 0.5 - 0.25;
        
        // Случайная прозрачность
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Применяем стили
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = opacity;
        
        // Сохраняем скорость как атрибуты
        particle.dataset.speedX = speedX;
        particle.dataset.speedY = speedY;
        
        particlesContainer.appendChild(particle);
    }
    
    // Анимируем частицы
    function animateParticles() {
        const particles = document.querySelectorAll('.particle');
        
        particles.forEach(particle => {
            // Получаем текущее положение
            let posX = parseFloat(particle.style.left);
            let posY = parseFloat(particle.style.top);
            
            // Получаем скорость
            const speedX = parseFloat(particle.dataset.speedX);
            const speedY = parseFloat(particle.dataset.speedY);
            
            // Обновляем положение
            posX += speedX;
            posY += speedY;
            
            // Проверяем границы
            if (posX > 100) posX = 0;
            if (posX < 0) posX = 100;
            if (posY > 100) posY = 0;
            if (posY < 0) posY = 100;
            
            // Применяем новое положение
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
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

// Функция для создания прогресс-бара временной шкалы
function createTimelineProgress() {
    const timelineSection = document.getElementById('timeline-slide');
    if (!timelineSection) return;
    
    const timeline = timelineSection.querySelector('.timeline');
    if (!timeline) return;
    
    // Создаем контейнер для прогресс-бара
    const progressContainer = document.createElement('div');
    progressContainer.className = 'timeline-progress-container';
    
    // Создаем прогресс-бар
    const progressBar = document.createElement('div');
    progressBar.className = 'timeline-progress-bar';
    progressContainer.appendChild(progressBar);
    
    // Добавляем прогресс-бар перед временной шкалой
    timeline.parentNode.insertBefore(progressContainer, timeline);
    
    // Создаем метки для прогресс-бара
    const timelineItems = timelineSection.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        const marker = item.querySelector('.timeline-marker');
        if (!marker) return;
        
        const markerText = marker.textContent;
        
        // Создаем метку для прогресс-бара
        const progressMarker = document.createElement('div');
        progressMarker.className = 'timeline-progress-marker';
        progressMarker.textContent = markerText;
        
        // Вычисляем позицию метки (равномерно распределяем)
        const position = index / (timelineItems.length - 1) * 100;
        progressMarker.style.left = `${position}%`;
        
        // Добавляем метку в контейнер
        progressContainer.appendChild(progressMarker);
        
        // Добавляем обработчик события для метки
        progressMarker.addEventListener('click', () => {
            // Анимируем прогресс-бар до этой метки
            progressBar.style.width = `${position}%`;
            
            // Подсвечиваем все элементы до этой метки
            timelineItems.forEach((item, i) => {
                if (i <= index) {
                    item.classList.add('completed');
                } else {
                    item.classList.remove('completed');
                }
            });
        });
    });
    
    // Добавляем обработчик события для наблюдения за прогрессом
    const progressObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            // Запускаем анимацию прогресс-бара
            setTimeout(() => {
                progressBar.style.width = '100%';
                
                // Последовательно подсвечиваем элементы временной шкалы
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('completed');
                    }, index * 800);
                });
            }, 500);
            
            progressObserver.unobserve(entries[0].target);
        }
    }, { threshold: 0.5 });
    
    progressObserver.observe(timelineSection);
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
    
    /* Стили для плавающей навигации */
    .floating-nav {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--glass-bg);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 50px;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 1000;
        border: var(--glass-border);
        box-shadow: var(--glass-shadow);
        transform: translateX(calc(100% - 50px));
        transition: transform 0.3s ease;
    }
    
    .floating-nav:hover {
        transform: translateX(0);
    }
    
    .floating-nav:before {
        content: '☰';
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
    }
    
    .floating-nav a {
        color: var(--text-secondary);
        text-decoration: none;
        padding: 5px 10px;
        border-radius: 5px;
        transition: all 0.3s ease;
        white-space: nowrap;
    }
    
    .floating-nav a:hover, .floating-nav a.active {
        color: var(--text-primary);
        background: rgba(59, 130, 246, 0.2);
    }
    
    /* Стили для частиц */
    .particles-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    }
    
    .particle {
        position: absolute;
        background: linear-gradient(135deg, #3B82F6, #8B5CF6);
        border-radius: 50%;
        filter: blur(1px);
    }
    
    /* Медиа-запрос для мобильных устройств */
    @media (max-width: 768px) {
        .floating-nav {
            bottom: 20px;
            top: auto;
            right: 20px;
            flex-direction: row;
            transform: translateY(calc(100% - 50px));
        }
        
        .floating-nav:hover {
            transform: translateY(0);
        }
        
        .floating-nav:before {
            content: '☰';
            top: 15px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    
    /* Стили для прогресс-бара временной шкалы */
    .timeline-progress-container {
        position: relative;
        height: 6px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        margin-bottom: 40px;
        overflow: visible;
    }
    
    .timeline-progress-bar {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        background: var(--primary-gradient);
        border-radius: 3px;
        transition: width 2s ease;
    }
    
    .timeline-progress-marker {
        position: absolute;
        top: -20px;
        transform: translateX(-50%);
        background: var(--card-bg);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 50px;
        padding: 5px 10px;
        font-size: 0.8rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .timeline-progress-marker:hover {
        background: var(--primary-gradient);
        transform: translateX(-50%) translateY(-3px);
    }
    
    .timeline-item.completed .timeline-marker {
        background: var(--primary-gradient);
    }
    
    .timeline-item.completed .timeline-content {
        border-color: rgba(59, 130, 246, 0.3);
        box-shadow: 0 5px 15px rgba(59, 130, 246, 0.1);
    }
`;
document.head.appendChild(style); 