import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Styled components
const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 4rem;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  z-index: 1;
  text-align: center;
  padding: 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 40px rgba(139, 92, 246, 0.5);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  max-width: 700px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const HeroButton = styled(motion.a)`
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 9999px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const PrimaryButton = styled(HeroButton)`
  background: var(--dex-gradient-primary);
  color: white;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
`;

const SecondaryButton = styled(HeroButton)`
  background: rgba(255, 255, 255, 0.1);
  color: var(--dex-text-primary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const GlowingOrb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
  background: ${props => props.color};
  opacity: 0.6;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`;

const BadgeContainer = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Badge = styled.div`
  display: inline-block;
  background: rgba(139, 92, 246, 0.15);
  color: var(--dex-accent-purple);
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
  }
  
  &:hover::before {
    transform: translateX(100%);
    transition: transform 0.8s ease;
  }
`;

const HeroSection = () => {
  useEffect(() => {
    // Animate glowing orbs with GSAP
    const orbs = document.querySelectorAll('.glowing-orb');
    
    orbs.forEach(orb => {
      const randomX = Math.random() * 10 - 5;
      const randomY = Math.random() * 10 - 5;
      
      gsap.to(orb, {
        x: randomX,
        y: randomY,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
  }, []);
  
  return (
    <HeroContainer id="home">
      {/* Animated glowing orbs in the background */}
      <GlowingOrb 
        className="glowing-orb"
        color="rgba(59, 130, 246, 0.6)" 
        size={500} 
        top={20} 
        left={15}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
      />
      <GlowingOrb 
        className="glowing-orb"
        color="rgba(139, 92, 246, 0.6)" 
        size={600} 
        top={60} 
        left={70}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <GlowingOrb 
        className="glowing-orb"
        color="rgba(16, 185, 129, 0.6)" 
        size={400} 
        top={70} 
        left={20}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, delay: 1 }}
      />
      
      <HeroContent>
        <BadgeContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge>DEX Terminal</Badge>
        </BadgeContainer>
        
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI-автоматизация <br /> рабочих процессов команды
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Три пакета интеграции искусственного интеллекта для ускорения
          разработки, улучшения качества и снижения нагрузки на команду
        </HeroSubtitle>
        
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <PrimaryButton 
            href="#economy"
            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Смотреть тарифы
          </PrimaryButton>
          <SecondaryButton 
            href="#contact"
            whileHover={{ scale: 1.05, backdropFilter: 'blur(15px)', background: 'rgba(255, 255, 255, 0.15)' }}
            whileTap={{ scale: 0.95 }}
          >
            Связаться с нами
          </SecondaryButton>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection; 