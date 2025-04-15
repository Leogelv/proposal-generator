import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled components
const SectionContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  position: relative;
`;

const ContentWrapper = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem;
  max-width: 1200px;
  width: 90%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
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

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FeatureColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
  font-weight: 800;
  color: var(--dex-accent-blue);
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--dex-text-secondary);
  font-style: italic;
`;

const Price = styled(motion.div)`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1.5rem 0;
  
  span {
    font-size: 1.2rem;
    opacity: 0.7;
    font-weight: 400;
  }
`;

const TimeFrame = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 8px;
  display: inline-block;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  font-size: 1.1rem;
  line-height: 1.5;
  
  &:before {
    content: '✓';
    margin-right: 10px;
    color: var(--dex-accent-blue);
    font-weight: bold;
  }
`;

const ActionButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: var(--dex-gradient-primary);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 9999px;
  text-decoration: none;
  margin-top: 1rem;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
  align-self: flex-start;
`;

const TitleAccent = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const EconomySection = () => {
  return (
    <SectionContainer id="economy">
      <ContentWrapper
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <SectionGrid>
          <InfoColumn>
            <TitleAccent>💼</TitleAccent>
            <SectionTitle
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Economy
            </SectionTitle>
            <SectionSubtitle
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              AI-песочница для команды
            </SectionSubtitle>
            
            <Price
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              $15 000 <span>USD</span>
            </Price>
            
            <TimeFrame>Срок: 2–3 недели</TimeFrame>
            
            <Description>
              Минимальный, но уже рабочий слой AI в ваших процессах. 
              Позволяет быстро протестировать гипотезы, получить пользу и сформировать 
              внутри команды первые паттерны взаимодействия с нейроинструментами.
            </Description>
            
            <ActionButton 
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Выбрать Economy
            </ActionButton>
          </InfoColumn>
          
          <FeatureColumn>
            <FeaturesList>
              <FeatureItem>
                <strong>Базовая диагностика процессов (до 1 недели):</strong> интервью с ключевыми ролями (PM, QA, Dev Lead), карта проблемных зон.
              </FeatureItem>
              <FeatureItem>
                <strong>MVP-бот в Telegram:</strong> идеи превращаются в задачи в Jira за секунды, без ручной верстки тикетов.
              </FeatureItem>
              <FeatureItem>
                <strong>Автогенерация PRD по описанию:</strong> прототипирование продуктовых требований прямо в Jira (по шаблону).
              </FeatureItem>
              <FeatureItem>
                <strong>Базовый тест-агент:</strong> генерация unit-тестов (Jest) для 1–2 типовых фич (NestJS / React).
              </FeatureItem>
              <FeatureItem>
                <strong>Простая визуализация:</strong> один интегрированный дашборд (Supabase или iframe-панель) со статусами задач и текущей активностью.
              </FeatureItem>
            </FeaturesList>
          </FeatureColumn>
        </SectionGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default EconomySection; 