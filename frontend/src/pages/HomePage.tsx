import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';
import Menu from '../components/Menu';

type CardColor = 'primary' | 'secondary';

interface FeatureCard {
  icon: ReactElement;
  color: CardColor;
  title: string;
  desc: string;
}

const cardStyles: Record<CardColor, { border: string; icon: string }> = {
  primary: {
    border: 'hover:border-primary/50',
    icon: 'bg-primary/10 text-primary',
  },
  secondary: {
    border: 'hover:border-secondary/50',
    icon: 'bg-secondary/10 text-secondary',
  },
};

