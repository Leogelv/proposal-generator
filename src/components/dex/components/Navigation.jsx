import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Стили для навигации
const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  margin-bottom: 1rem;
  position: relative;
  z-index: 10;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  background: var(--dex-card-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--dex-card-border);
  border-radius: 100px;
  padding: 0.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    width: 100%;
    justify-content: space-around;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.active ? 'var(--dex-accent-primary)' : 'var(--dex-text-secondary)'};
  font-weight: ${props => props.active ? '600' : '400'};
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
  text-transform: capitalize;
  
  &:hover {
    color: var(--dex-accent-primary);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }
`;

const NavIndicator = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dex-accent-bg);
  border-radius: 100px;
  z-index: 1;
`;

// Функция для форматирования ID секции в название (с заменой дефисов на пробелы и т.д.)
const formatSectionName = (id) => {
  return id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

const Navigation = ({ sections, currentSection, onSectionChange }) => {
  const navRefs = React.useRef([]);
  
  // Добавление текущего элемента в массив ссылок
  const addToRefs = (el, index) => {
    if (el && !navRefs.current.includes(el)) {
      navRefs.current[index] = el;
    }
  };
  
  // Получение размеров и позиции для индикатора
  const getIndicatorProps = () => {
    if (navRefs.current[currentSection]) {
      const element = navRefs.current[currentSection];
      const rect = element.getBoundingClientRect();
      const parentRect = element.parentElement.parentElement.getBoundingClientRect();
      
      return {
        width: rect.width,
        height: rect.height,
        x: rect.left - parentRect.left
      };
    }
    
    return {
      width: 0,
      height: 0,
      x: 0
    };
  };
  
  return (
    <NavContainer>
      <NavList>
        {sections.map((section, index) => (
          <NavItem key={section} ref={(el) => addToRefs(el, index)}>
            <NavButton 
              active={index === currentSection}
              onClick={() => onSectionChange(index)}
            >
              {formatSectionName(section)}
            </NavButton>
          </NavItem>
        ))}
        
        <NavIndicator 
          initial={false}
          animate={{
            x: getIndicatorProps().x,
            width: getIndicatorProps().width,
            height: getIndicatorProps().height
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30
          }}
        />
      </NavList>
    </NavContainer>
  );
};

export default Navigation; 