import React from 'react';
import classnames from 'classnames';

import './Card.less';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

export const Card: React.FC<CardProps> = ({ className, children, onClick, ...rest }) => {
  return (
    <div
      {...rest}
      onClick={onClick}
      role="presentation"
      className={classnames(className, 'bf-card')}>
      {children}
    </div>
  );
};
