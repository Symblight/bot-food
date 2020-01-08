import React from 'react';
import classnames from 'classnames';

import './Block.less';

export interface BlockProps {
  children: React.ReactNode;
  className?: string;
  title: string;
}

export const Block: React.FC<BlockProps> = ({ title, children, className }) => {
  return (
    <div className={classnames('bf-block', className)}>
      <h4 className="bf-block__title">{title}</h4>
      {children}
    </div>
  );
};
