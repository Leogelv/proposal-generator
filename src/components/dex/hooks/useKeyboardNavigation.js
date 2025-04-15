import { useEffect } from 'react';

/**
 * Хук для обработки клавиатурной навигации между секциями.
 * 
 * @param {number} currentSection - Индекс текущей секции
 * @param {number} totalSections - Общее количество секций
 * @param {function} onSectionChange - Функция обратного вызова для изменения секции
 * @returns {void}
 */
const useKeyboardNavigation = (currentSection, totalSections, onSectionChange) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Обработка навигации с помощью стрелок
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        // Переход к следующей секции (с циклическим возвратом к началу)
        const nextSection = (currentSection + 1) % totalSections;
        onSectionChange(nextSection);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        // Переход к предыдущей секции (с циклическим переходом к концу)
        const prevSection = (currentSection - 1 + totalSections) % totalSections;
        onSectionChange(prevSection);
      }
    };

    // Добавляем слушатель события нажатия клавиш
    window.addEventListener('keydown', handleKeyDown);

    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, totalSections, onSectionChange]);
};

export default useKeyboardNavigation; 