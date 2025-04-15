import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import * as THREE from 'three';

// Импорт тарифных компонентов
import EconomyCard from './components/EconomyCard';
import BusinessCard from './components/BusinessCard';
import FirstClassCard from './components/FirstClassCard';

// Стили для App
const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fafafa;
  color: #0a0a0a;
  overflow: hidden;
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111;
  font-family: 'Syne', sans-serif;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: #555;
  margin-bottom: 3rem;
  max-width: 650px;
  line-height: 1.5;
`;

const TariffNav = styled.div`
  display: flex;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#111' : '#777'};
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 2px;
    background-color: ${props => props.active ? '#111' : 'transparent'};
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #111;
  }
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 45%;
  pointer-events: none;
  z-index: 1;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

// 3D компоненты
const FloatingObject = ({ position, size, color, speed }) => {
  return (
    <Float
      speed={speed}
      rotationIntensity={0.5}
      floatIntensity={2}
    >
      <mesh position={position}>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.8} />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <FloatingObject position={[-4, 2, 0]} size={1.5} color="#3b82f6" speed={2} />
      <FloatingObject position={[2, -2, -3]} size={1} color="#8b5cf6" speed={3} />
      <FloatingObject position={[5, 3, -5]} size={0.8} color="#10b981" speed={4} />
      <OrbitControls enabled={false} />
    </Canvas>
  );
};

const App = () => {
  // Состояние для отслеживания текущего тарифа
  const [currentTariff, setCurrentTariff] = useState(0);
  
  // Тарифы
  const tariffs = [
    { id: 'economy', name: 'Economy', component: EconomyCard },
    { id: 'business', name: 'Business', component: BusinessCard },
    { id: 'first-class', name: 'First Class', component: FirstClassCard }
  ];
  
  // Обработчик клавиатурной навигации
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentTariff < tariffs.length - 1) {
        setCurrentTariff(currentTariff + 1);
      } else if (e.key === 'ArrowLeft' && currentTariff > 0) {
        setCurrentTariff(currentTariff - 1);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentTariff, tariffs.length]);
  
  return (
    <AppContainer>
      <ContentWrapper>
        <Title>DEX Terminal</Title>
        <Subtitle>
          Три пакета интеграции искусственного интеллекта для ускорения разработки,
          улучшения качества и снижения нагрузки на команду
        </Subtitle>
        
        <TariffNav>
          {tariffs.map((tariff, index) => (
            <NavButton 
              key={tariff.id}
              active={index === currentTariff}
              onClick={() => setCurrentTariff(index)}
            >
              {tariff.name}
            </NavButton>
          ))}
        </TariffNav>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={tariffs[currentTariff].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {React.createElement(tariffs[currentTariff].component)}
          </motion.div>
        </AnimatePresence>
      </ContentWrapper>
      
      <CanvasContainer>
        <Scene />
      </CanvasContainer>
    </AppContainer>
  );
};

export default App; 