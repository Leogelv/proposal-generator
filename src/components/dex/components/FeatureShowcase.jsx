import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled components
const SectionContainer = styled.div`
  padding: 1rem 0 2rem;
`;

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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 40%;
    background: ${props => props.accentColor || 'var(--dex-accent-blue)'};
    border-radius: 3px;
  }
`;

const IconContainer = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  background: rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.gradient || 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))'};
    opacity: 0.5;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
  color: white;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--dex-text-secondary);
  margin-bottom: 0;
  flex-grow: 1;
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

// Feature data
const features = [
  {
    icon: '🤖',
    title: 'AI-Агенты в Рабочем Процессе',
    description: 'Нейроагенты автоматически анализируют задачи, проверяют качество PRD, находят слабые места и предлагают улучшения.',
    accentColor: 'var(--dex-accent-blue)',
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.2))'
  },
  {
    icon: '📋',
    title: 'Автоматизация Документации',
    description: 'Мгновенная генерация PRD, технических спецификаций и пользовательских историй с нужным уровнем детализации.',
    accentColor: 'var(--dex-accent-purple)',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))'
  },
  {
    icon: '🧪',
    title: 'Генерация Тестов',
    description: 'Автоматическое создание unit и e2e тестов на основе описания фич, с интеграцией в ваш CI/CD пайплайн.',
    accentColor: 'var(--dex-accent-green)',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(139, 92, 246, 0.2))'
  },
  {
    icon: '🎨',
    title: 'AI-Дизайн',
    description: 'Генерация UI-элементов, прототипов, макетов и графики для ускорения визуализации концепций.',
    accentColor: 'var(--dex-accent-blue)',
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(234, 88, 12, 0.2))'
  },
  {
    icon: '📊',
    title: 'Визуальная Аналитика',
    description: 'Интерактивные дашборды для отслеживания прогресса, метрик и потенциальных проблем в реальном времени.',
    accentColor: 'var(--dex-accent-purple)',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(234, 88, 12, 0.2))'
  },
  {
    icon: '👩‍💻',
    title: 'Интеграция с Рабочими Инструментами',
    description: 'Бесшовное встраивание в Jira, Slack, GitHub, GitLab, Telegram и другие платформы вашей команды.',
    accentColor: 'var(--dex-accent-green)',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2))'
  },
  {
    icon: '🔍',
    title: 'Проактивный Анализ Проблем',
    description: 'Нейросеть находит потенциальные риски, узкие места и несоответствия в задачах до начала работы.',
    accentColor: 'var(--dex-accent-blue)',
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))'
  },
  {
    icon: '🎓',
    title: 'Обучение Команды',
    description: 'Практические воркшопы по эффективному взаимодействию с AI-инструментами и интеграции в повседневную работу.',
    accentColor: 'var(--dex-accent-purple)',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(16, 185, 129, 0.2))'
  },
];

const FeatureShowcase = () => {
  return (
    <SectionContainer id="features">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Ключевые <Highlight>возможности</Highlight> DEX Terminal
      </SectionTitle>
      
      <FeaturesGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            variants={cardVariants}
            accentColor={feature.accentColor}
          >
            <IconContainer
              variants={iconVariants}
              gradient={feature.gradient}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {feature.icon}
            </IconContainer>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </SectionContainer>
  );
};

export default FeatureShowcase; 