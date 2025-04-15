import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled components
const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 3rem;
  font-size: clamp(2rem, 5vw, 3rem);
`;

const Highlight = styled.span`
  background: var(--dex-gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
`;

const PricingCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem 2rem;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.gradient || 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))'};
    opacity: 0.3;
    z-index: -1;
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${props => props.color || 'white'};
`;

const CardSubtitle = styled.p`
  font-size: 1rem;
  color: var(--dex-text-secondary);
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const PriceTag = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1.5rem 0;
  color: white;
  
  span {
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.7;
  }
`;

const TimeFrame = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: var(--dex-text-secondary);
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex-grow: 1;
`;

const FeatureItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  font-size: 1rem;
  line-height: 1.5;
  
  &:before {
    content: '✓';
    margin-right: 10px;
    color: ${props => props.color || 'var(--dex-accent-blue)'};
    font-weight: bold;
  }
`;

const CardButton = styled(motion.a)`
  padding: 0.875rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  border-radius: 9999px;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  border: 1px solid;
  transition: all 0.3s ease;
  border-color: ${props => props.borderColor || 'rgba(255, 255, 255, 0.1)'};
  background: ${props => props.background || 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.color || 'white'};
  
  &:hover {
    background: ${props => props.hoverBackground || 'rgba(255, 255, 255, 0.1)'};
    transform: translateY(-2px);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(139, 92, 246, 0.2);
  color: var(--dex-accent-purple);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const PricingOptions = () => {
  return (
    <div id="pricing">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Выберите свой пакет <Highlight>AI-автоматизации</Highlight>
      </SectionTitle>
      
      <PricingGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Economy Option */}
        <PricingCard
          id="economy"
          variants={itemVariants}
          gradient="linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))"
        >
          <CardIcon>💼</CardIcon>
          <CardTitle color="var(--dex-accent-blue)">Economy</CardTitle>
          <CardSubtitle>AI-песочница для команды</CardSubtitle>
          
          <PriceTag>$15 000 <span>USD</span></PriceTag>
          <TimeFrame>Срок: 2–3 недели</TimeFrame>
          
          <p>Минимальный, но уже рабочий слой AI в ваших процессах. Позволяет быстро протестировать гипотезы, получить пользу и сформировать внутри команды первые паттерны взаимодействия с нейроинструментами.</p>
          
          <FeaturesList>
            <FeatureItem color="var(--dex-accent-blue)">
              Базовая диагностика процессов (до 1 недели): интервью с ключевыми ролями (PM, QA, Dev Lead), карта проблемных зон.
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-blue)">
              MVP-бот в Telegram: идеи превращаются в задачи в Jira за секунды, без ручной верстки тикетов.
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-blue)">
              Автогенерация PRD по описанию: прототипирование продуктовых требований прямо в Jira (по шаблону).
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-blue)">
              Базовый тест-агент: генерация unit-тестов (Jest) для 1–2 типовых фич (NestJS / React).
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-blue)">
              Простая визуализация: один интегрированный дашборд (Supabase или iframe-панель) со статусами задач и текущей активностью.
            </FeatureItem>
          </FeaturesList>
          
          <CardButton
            href="#contact"
            background="rgba(59, 130, 246, 0.1)"
            borderColor="rgba(59, 130, 246, 0.3)"
            hoverBackground="rgba(59, 130, 246, 0.2)"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Выбрать Economy
          </CardButton>
        </PricingCard>
        
        {/* Business Option */}
        <PricingCard
          id="business"
          variants={itemVariants}
          gradient="linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))"
        >
          <Badge>Популярный</Badge>
          <CardIcon>🚀</CardIcon>
          <CardTitle color="var(--dex-accent-purple)">Business</CardTitle>
          <CardSubtitle>AI как надстройка над всей командой</CardSubtitle>
          
          <PriceTag>$20 000 – 25 000 <span>USD</span></PriceTag>
          <TimeFrame>Срок: 3–4 недели</TimeFrame>
          
          <p>Переход от эксперимента к системной автоматизации. Вы не просто используете AI, а встраиваете его в ключевые участки — от анализа задач до генерации интерфейсов и тестов.</p>
          
          <FeaturesList>
            <FeatureItem color="var(--dex-accent-purple)">
              Всё из Economy-пакета
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-purple)">
              Ежедневный AI-мониторинг задач: каждый тикет сканируется раз в сутки — AI выявляет пробелы в PRD, неопределенности, "застревания", просрочки и уведомляет в Jira или Telegram.
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-purple)">
              AI-помощник по качеству задач: подсказывает, где не хватает acceptance criteria, запрашивает недостающие описания.
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-purple)">
              Автогенерация e2e-тестов (Cypress/Playwright) на основе описания фич, с запуском в CI.
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-purple)">
              AI-дизайн-модуль: генерация wireframes, макетов, обложек, баннеров. Возможна быстрая интеграция с Figma.
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-purple)">
              Расширенный дашборд: визуальные панели по ролям (PM, QA, Dev), анализ прогресса, зависших задач, мёртвых тикетов.
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-purple)">
              Воркшоп-сессии (2–3): обучение команды — как использовать агентов эффективно, как "не потерять смысл" при автоматизации.
            </FeatureItem>
          </FeaturesList>
          
          <CardButton
            href="#contact"
            background="rgba(139, 92, 246, 0.1)"
            borderColor="rgba(139, 92, 246, 0.3)"
            hoverBackground="rgba(139, 92, 246, 0.2)"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Выбрать Business
          </CardButton>
        </PricingCard>
        
        {/* First Class Option */}
        <PricingCard
          id="first-class"
          variants={itemVariants}
          gradient="linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(139, 92, 246, 0.1))"
        >
          <CardIcon>✨</CardIcon>
          <CardTitle color="var(--dex-accent-green)">First Class</CardTitle>
          <CardSubtitle>Полная AI-прошивка команды + гарантия результата</CardSubtitle>
          
          <PriceTag>$35 000 – 45 000 <span>USD</span></PriceTag>
          <TimeFrame>Срок: 4–6 недель + 1 месяц сопровождения</TimeFrame>
          
          <p>Полное стратегическое встраивание AI во все уровни команды — от тикета до оргструктуры. Здесь мы идём в глубину, проектируем кастомную архитектуру, учитываем ваш стиль, код, культуру и людей. Мы не внедряем — мы трансформируем.</p>
          
          <FeaturesList>
            <FeatureItem color="var(--dex-accent-green)">
              Всё из пакета Business
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-green)">
              Глубокий консалтинг по процессам: карта текущей оргструктуры, конфликты ролей, рекомендации по найму/перераспределению зон ответственности.
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-green)">
              Полная кастомизация генерации: PRD, тесты и даже код — с учётом вашей архитектуры, базовых сущностей, бизнес-логики.
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-green)">
              Индивидуальный AI-аналитик (бот): ежедневные smart-отчёты, прогнозы, риски, предупреждения, метрики эффективности.
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-green)">
              Производственный дашборд: графика полного потока — идея → обсуждение → задача → разработка → релиз, включая карту "узких мест" с автоматическим анализом блокеров.
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-green)">
              Опциональный success fee: часть оплаты — только если после внедрения метрики реально растут (скорость релизов, сокращение багов, загрузка QA).
            </FeatureItem>
            <FeatureItem color="var(--dex-accent-green)">
              Расширенное обучение: до 5 практических сессий, живые форматы + 1 месяц сопровождения с реактивной донастройкой системы.
            </FeatureItem>
          </FeaturesList>
          
          <CardButton
            href="#contact"
            background="rgba(16, 185, 129, 0.1)"
            borderColor="rgba(16, 185, 129, 0.3)"
            hoverBackground="rgba(16, 185, 129, 0.2)"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Выбрать First Class
          </CardButton>
        </PricingCard>
      </PricingGrid>
    </div>
  );
};

export default PricingOptions; 