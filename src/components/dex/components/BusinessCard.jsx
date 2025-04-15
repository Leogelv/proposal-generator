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
  background: linear-gradient(135deg, #8b5cf6, #a78bfa);
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
  color: #8b5cf6;
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
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 100px;
  text-decoration: none;
  margin-top: 2rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 30px -5px rgba(139, 92, 246, 0.5);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem 1.25rem;
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 100px;
  box-shadow: 0 10px 30px -10px rgba(139, 92, 246, 0.5);
  z-index: 10;
`;

const AccentBackground = styled.div`
  position: absolute;
  top: -100px;
  right: -100px;
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05));
  border-radius: 50%;
  z-index: 0;
`;

const BusinessCard = () => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PopularBadge>Популярный</PopularBadge>
      <AccentBackground />
      
      <CardHeader>
        <CardIcon>🚀</CardIcon>
        <CardTitle>Business</CardTitle>
        <CardSubtitle>AI как надстройка над всей командой</CardSubtitle>
        
        <PriceSection>
          <Price>$20 000 – 25 000 <span>USD</span></Price>
          <DeliveryTime>Срок: 3–4 недели</DeliveryTime>
        </PriceSection>
      </CardHeader>
      
      <div>
        <Description>
          Переход от эксперимента к системной автоматизации. 
          Вы не просто используете AI, а встраиваете его в ключевые участки — 
          от анализа задач до генерации интерфейсов и тестов.
        </Description>
        
        <Divider />
        
        <FeatureList>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Всё из Economy-пакета</StrongText></div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Ежедневный AI-мониторинг задач:</StrongText> каждый тикет сканируется раз в сутки — AI выявляет пробелы в PRD, неопределенности, "застревания", просрочки и уведомляет в Jira или Telegram.</div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>AI-помощник по качеству задач:</StrongText> подсказывает, где не хватает acceptance criteria, запрашивает недостающие описания.</div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Автогенерация e2e-тестов:</StrongText> Cypress/Playwright на основе описания фич, с запуском в CI.</div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>AI-дизайн-модуль:</StrongText> генерация wireframes, макетов, обложек, баннеров. Возможна быстрая интеграция с Figma.</div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Расширенный дашборд:</StrongText> визуальные панели по ролям (PM, QA, Dev), анализ прогресса, зависших задач, мёртвых тикетов.</div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Воркшоп-сессии (2–3):</StrongText> обучение команды — как использовать агентов эффективно, как "не потерять смысл" при автоматизации.</div>
          </FeatureItem>
        </FeatureList>
        
        <ActionButton 
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Выбрать Business
        </ActionButton>
      </div>
    </CardContainer>
  );
};

export default BusinessCard; 