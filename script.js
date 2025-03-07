document.addEventListener('DOMContentLoaded', () => {
    // Анимация появления элементов при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Добавляем класс для анимации всем слайдам
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.add('fade-in');
        observer.observe(slide);
    });

    // Добавляем класс для анимации всем карточкам решений
    document.querySelectorAll('.solution-card, .benefit-card').forEach(card => {
        card.classList.add('slide-up');
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
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });
});

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
`;
document.head.appendChild(style); 