import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled components
const FooterContainer = styled.footer`
  position: relative;
  margin-top: 6rem;
  padding-bottom: 2rem;
  overflow: hidden;
`;

const FooterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0), rgba(15, 23, 42, 0.8));
  z-index: -1;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--dex-gradient-primary);
    z-index: 1;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  
  span {
    margin-right: 10px;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: var(--dex-text-secondary);
  
  span {
    margin-right: 10px;
    color: var(--dex-accent-blue);
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--dex-text-primary);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--dex-accent-blue);
    color: white;
    transform: translateY(-3px);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: var(--dex-text-secondary);
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--dex-text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--dex-accent-blue);
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--dex-text-primary);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--dex-accent-blue);
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: var(--dex-gradient-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.5rem;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
`;

const CopyrightBar = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding: 1.5rem 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  color: var(--dex-text-secondary);
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FooterLink = styled.a`
  color: var(--dex-text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--dex-accent-blue);
  }
`;

// Animation variants
const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)',
    transition: { duration: 0.3 }
  },
  tap: { scale: 0.95 }
};

const Footer = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - here you would typically send data to a server
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({ name: '', email: '', message: '' });
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
  };
  
  return (
    <FooterContainer id="contact">
      <FooterBackground />
      
      <FooterContent>
        <ContactSection>
          <SectionTitle><span>✉️</span> Контакты</SectionTitle>
          
          <ContactInfo>
            <ContactItem>
              <span>📍</span> Москва, Россия
            </ContactItem>
            <ContactItem>
              <span>📱</span> +7 (XXX) XXX-XX-XX
            </ContactItem>
            <ContactItem>
              <span>📧</span> info@dexterminal.ai
            </ContactItem>
          </ContactInfo>
          
          <SectionTitle><span>🔗</span> Мы в соцсетях</SectionTitle>
          
          <SocialLinks>
            <SocialIcon 
              href="#" 
              target="_blank"
              whileHover={{ y: -3, backgroundColor: 'rgba(59, 130, 246, 1)' }}
              whileTap={{ scale: 0.9 }}
            >
              𝕏
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank"
              whileHover={{ y: -3, backgroundColor: 'rgba(59, 130, 246, 1)' }}
              whileTap={{ scale: 0.9 }}
            >
              tg
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank"
              whileHover={{ y: -3, backgroundColor: 'rgba(59, 130, 246, 1)' }}
              whileTap={{ scale: 0.9 }}
            >
              vk
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank"
              whileHover={{ y: -3, backgroundColor: 'rgba(59, 130, 246, 1)' }}
              whileTap={{ scale: 0.9 }}
            >
              yt
            </SocialIcon>
          </SocialLinks>
        </ContactSection>
        
        <FormSection
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle><span>💬</span> Напишите нам</SectionTitle>
          
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Имя</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Как к вам обращаться?"
                value={formState.name}
                onChange={handleInputChange}
                required
              />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Ваш email для связи"
                value={formState.email}
                onChange={handleInputChange}
                required
              />
            </InputGroup>
            
            <InputGroup>
              <Label htmlFor="message">Сообщение</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Расскажите о вашем проекте или задайте вопрос..."
                value={formState.message}
                onChange={handleInputChange}
                required
              />
            </InputGroup>
            
            <SubmitButton
              type="submit"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              Отправить
            </SubmitButton>
          </Form>
        </FormSection>
      </FooterContent>
      
      <CopyrightBar>
        <div>© 2025 DEX Terminal. Все права защищены.</div>
        
        <FooterLinks>
          <FooterLink href="#">Политика конфиденциальности</FooterLink>
          <FooterLink href="#">Условия использования</FooterLink>
          <FooterLink href="#">Карта сайта</FooterLink>
        </FooterLinks>
      </CopyrightBar>
    </FooterContainer>
  );
};

export default Footer; 