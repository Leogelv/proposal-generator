import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background: white;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.05);
  max-width: 650px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const CardTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  color: #111;
  font-family: 'Syne', sans-serif;
`;

const CardSubtitle = styled.p`
  font-size: 1.1rem;
  color: #777;
  margin: 0;
  font-style: italic;
`;

const PriceSection = styled.div`
  margin: 1.5rem 0;
`;

const Price = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  color: #111;
  
  span {
    font-size: 1rem;
    color: #777;
    font-weight: 400;
    margin-left: 0.5rem;
  }
`;

const DeliveryTime = styled.div`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
  background: #f5f5f5;
  padding: 0.5rem 1rem;
  border-radius: 100px;
`;

const Divider = styled.div`
  height: 1px;
  background: #eee;
  margin: 1.5rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 1rem;
  color: #333;
`;

const FeatureIcon = styled.span`
  color: #3b82f6;
  font-size: 1.25rem;
  line-height: 1;
`;

const StrongText = styled.strong`
  font-weight: 600;
  color: #111;
`;

const ActionButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #3b82f6;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 100px;
  text-decoration: none;
  margin-top: 2rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 30px -5px rgba(59, 130, 246, 0.5);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const AccentBackground = styled.div`
  position: absolute;
  top: -100px;
  right: -100px;
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05));
  border-radius: 50%;
  z-index: 0;
`;

const EconomyCard = () => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AccentBackground />
      
      <CardHeader>
        <CardIcon>💼</CardIcon>
        <CardTitle>Economy</CardTitle>
        <CardSubtitle>AI-песочница для команды</CardSubtitle>
        
        <PriceSection>
          <Price>$15 000 <span>USD</span></Price>
          <DeliveryTime>Срок: 2–3 недели</DeliveryTime>
        </PriceSection>
      </CardHeader>
      
      <div>
        <Description>
          Минимальный, но уже рабочий слой AI в ваших процессах. 
          Позволяет быстро протестировать гипотезы, получить пользу и сформировать 
          внутри команды первые паттерны взаимодействия с нейроинструментами.
        </Description>
        
        <Divider />
        
        <FeatureList>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Базовая диагностика процессов (до 1 недели):</StrongText> интервью с ключевыми ролями (PM, QA, Dev Lead), карта проблемных зон.</div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>MVP-бот в Telegram:</StrongText> идеи превращаются в задачи в Jira за секунды, без ручной верстки тикетов.</div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Автогенерация PRD по описанию:</StrongText> прототипирование продуктовых требований прямо в Jira (по шаблону).</div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Базовый тест-агент:</StrongText> генерация unit-тестов (Jest) для 1–2 типовых фич (NestJS / React).</div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Простая визуализация:</StrongText> один интегрированный дашборд (Supabase или iframe-панель) со статусами задач и текущей активностью.</div>
          </FeatureItem>
        </FeatureList>
        
        <ActionButton 
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Выбрать Economy
        </ActionButton>
      </div>
    </CardContainer>
  );
};

export default EconomyCard; 