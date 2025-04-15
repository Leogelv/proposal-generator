import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingOptions from './components/PricingOptions';
import FeatureShowcase from './components/FeatureShowcase';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';
import EconomySection from './components/EconomySection';
import BusinessSection from './components/BusinessSection';
import FirstClassSection from './components/FirstClassSection';
import '../../styles/dex/dex.css';

// Styled components with glassmorphism effects
const DexContainer = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #f8fafc;
  overflow-x: hidden;
`;

const GlassmorphicSection = styled(motion.section)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem;
  margin: 4rem auto;
  max-width: 1200px;
  width: 90%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: linear-gradient(
      45deg,
      rgba(59, 130, 246, 0.1),
      rgba(16, 185, 129, 0.1)
    );
    filter: blur(20px);
    border-radius: inherit;
  }
`;

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const Dex = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'DEX Terminal - AI-автоматизация команды';
  }, []);

  return (
    <DexContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <CanvasContainer>
        <Canvas>
          <BackgroundShapes />
        </Canvas>
      </CanvasContainer>
      
      <ContentContainer>
        <Header />
        
        {/* Hero Section - Первый экран */}
        <HeroSection />
        
        {/* Economy Section - Отдельный экран для тарифа Economy */}
        <EconomySection />
        
        {/* Business Section - Отдельный экран для тарифа Business */}
        <BusinessSection />
        
        {/* First Class Section - Отдельный экран для тарифа First Class */}
        <FirstClassSection />
        
        {/* Секция с возможностями */}
        <GlassmorphicSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <FeatureShowcase />
        </GlassmorphicSection>
        
        <Footer />
      </ContentContainer>
    </DexContainer>
  );
};

export default Dex; 