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
  background: linear-gradient(135deg, #10b981, #34d399);
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
  color: #10b981;
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
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 100px;
  text-decoration: none;
  margin-top: 2rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 30px -5px rgba(16, 185, 129, 0.5);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const PremiumBadge = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem 1.25rem;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 100px;
  box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.5);
  z-index: 10;
`;

const AccentBackground = styled.div`
  position: absolute;
  top: -100px;
  right: -100px;
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05));
  border-radius: 50%;
  z-index: 0;
`;

const FirstClassCard = () => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PremiumBadge>Premium</PremiumBadge>
      <AccentBackground />
      
      <CardHeader>
        <CardIcon>✨</CardIcon>
        <CardTitle>First Class</CardTitle>
        <CardSubtitle>Полная AI-прошивка команды + гарантия результата</CardSubtitle>
        
        <PriceSection>
          <Price>$35 000 – 45 000 <span>USD</span></Price>
          <DeliveryTime>Срок: 4–6 недель + 1 месяц сопровождения</DeliveryTime>
        </PriceSection>
      </CardHeader>
      
      <div>
        <Description>
          Полное стратегическое встраивание AI во все уровни команды — от тикета до оргструктуры. 
          Здесь мы идём в глубину, проектируем кастомную архитектуру, учитываем ваш стиль, код, 
          культуру и людей. Мы не внедряем — мы трансформируем.
        </Description>
        
        <Divider />
        
        <FeatureList>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Всё из пакета Business</StrongText></div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Глубокий консалтинг по процессам:</StrongText> карта текущей оргструктуры, конфликты ролей, рекомендации по найму/перераспределению зон ответственности.</div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Полная кастомизация генерации:</StrongText> PRD, тесты и даже код — с учётом вашей архитектуры, базовых сущностей, бизнес-логики.</div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Индивидуальный AI-аналитик (бот):</StrongText> ежедневные smart-отчёты, прогнозы, риски, предупреждения, метрики эффективности.</div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Производственный дашборд:</StrongText> графика полного потока — идея → обсуждение → задача → разработка → релиз, включая карту "узких мест" с автоматическим анализом блокеров.</div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Опциональный success fee:</StrongText> часть оплаты — только если после внедрения метрики реально растут (скорость релизов, сокращение багов, загрузка QA).</div>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>✓</FeatureIcon>
            <div><StrongText>Расширенное обучение:</StrongText> до 5 практических сессий, живые форматы + 1 месяц сопровождения с реактивной донастройкой системы.</div>
          </FeatureItem>
        </FeatureList>
        
        <ActionButton 
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Выбрать First Class
        </ActionButton>
      </div>
    </CardContainer>
  );
};

export default FirstClassCard; 