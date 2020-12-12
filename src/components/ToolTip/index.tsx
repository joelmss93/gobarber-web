import React from 'react';

import { Container } from './styles';

interface TooltopProps {
  title: string;
  className?: string;
}

const ToolTip: React.FC<TooltopProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default ToolTip;
