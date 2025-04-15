import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Styled components with glassmorphism effect
const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: ${props => props.isScrolled ? '1rem 0' : '1.5rem 0'};
  transition: padding 0.3s ease;
  background: ${props => props.isScrolled 
    ? 'rgba(15, 23, 42, 0.85)' 
    : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.isScrolled 
    ? '0 4px 30px rgba(0, 0, 0, 0.1)' 
    : 'none'};
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(motion.div)`
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.8rem;
  background: var(--dex-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: flex;
  align-items: center;
  
  span {
    margin-right: 8px;
    font-size: 2rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(motion.a)`
  color: var(--dex-text-primary);
  font-weight: 500;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 2px;
    background: var(--dex-gradient-primary);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  color: var(--dex-text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const MobileNavItem = styled(motion.a)`
  color: var(--dex-text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
  text-decoration: none;
  cursor: pointer;
`;

// Animation variants
const mobileMenuVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: "easeIn" } }
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: i => ({ 
    opacity: 1, 
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Change header appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'Economy', href: '#economy' },
    { name: 'Business', href: '#business' },
    { name: 'First Class', href: '#first-class' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <>
      <HeaderContainer 
        isScrolled={isScrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <HeaderContent>
          <Link to="/dex" style={{ textDecoration: 'none' }}>
            <Logo
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span>✦</span> DEX
            </Logo>
          </Link>
          
          <NavLinks>
            {navItems.map((item, i) => (
              <NavItem 
                key={i}
                href={item.href}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                {item.name}
              </NavItem>
            ))}
          </NavLinks>
          
          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </HeaderContent>
      </HeaderContainer>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item, i) => (
              <MobileNavItem
                key={i}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </MobileNavItem>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 