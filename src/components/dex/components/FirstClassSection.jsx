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
      rgba(16, 185, 129, 0.1),
      rgba(139, 92, 246, 0.1)
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
  color: var(--dex-accent-green);
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
  background: rgba(16, 185, 129, 0.1);
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
    color: var(--dex-accent-green);
    font-weight: bold;
  }
`;

const ActionButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--dex-accent-green), var(--dex-accent-blue));
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 9999px;
  text-decoration: none;
  margin-top: 1rem;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
  align-self: flex-start;
`;

const TitleAccent = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const FirstClassSection = () => {
  return (
    <SectionContainer id="first-class">
      <ContentWrapper
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <SectionGrid>
          <InfoColumn>
            <TitleAccent>✨</TitleAccent>
            <SectionTitle
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              First Class
            </SectionTitle>
            <SectionSubtitle
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Полная AI-прошивка команды + гарантия результата
            </SectionSubtitle>
            
            <Price
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              $35 000 – 45 000 <span>USD</span>
            </Price>
            
            <TimeFrame>Срок: 4–6 недель + 1 месяц сопровождения</TimeFrame>
            
            <Description>
              Полное стратегическое встраивание AI во все уровни команды — от тикета до оргструктуры. 
              Здесь мы идём в глубину, проектируем кастомную архитектуру, учитываем ваш стиль, код, 
              культуру и людей. Мы не внедряем — мы трансформируем.
            </Description>
            
            <ActionButton 
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(16, 185, 129, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Выбрать First Class
            </ActionButton>
          </InfoColumn>
          
          <FeatureColumn>
            <FeaturesList>
              <FeatureItem>
                <strong>Всё из пакета Business</strong> 
              </FeatureItem>
              <FeatureItem>
                <strong>Глубокий консалтинг по процессам:</strong> карта текущей оргструктуры, конфликты ролей, рекомендации по найму/перераспределению зон ответственности.
              </FeatureItem>
              <FeatureItem>
                <strong>Полная кастомизация генерации:</strong> PRD, тесты и даже код — с учётом вашей архитектуры, базовых сущностей, бизнес-логики.
              </FeatureItem>
              <FeatureItem>
                <strong>Индивидуальный AI-аналитик (бот):</strong> ежедневные smart-отчёты, прогнозы, риски, предупреждения, метрики эффективности.
              </FeatureItem>
              <FeatureItem>
                <strong>Производственный дашборд:</strong> графика полного потока — идея → обсуждение → задача → разработка → релиз, включая карту "узких мест" с автоматическим анализом блокеров.
              </FeatureItem>
              <FeatureItem>
                <strong>Опциональный success fee:</strong> часть оплаты — только если после внедрения метрики реально растут (скорость релизов, сокращение багов, загрузка QA).
              </FeatureItem>
              <FeatureItem>
                <strong>Расширенное обучение:</strong> до 5 практических сессий, живые форматы + 1 месяц сопровождения с реактивной донастройкой системы.
              </FeatureItem>
            </FeaturesList>
          </FeatureColumn>
        </SectionGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default FirstClassSection; 