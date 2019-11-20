import React from 'react';
import classnames from 'classnames';

import './Label.less';

interface LabelProps {
  className?: string;
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children, className }) => {
  return <span className={classnames(className, 'bf-label')}>{children}</span>;
};
