import React from 'react';
import classnames from 'classnames';

import './General.less';

interface GeneralTemplateProps {
  children: React.ReactNode;
  className?: string;
}

export const GeneralTemplate: React.FC<GeneralTemplateProps> = ({
  className,
  children,
}) => {
  return (
    <div className={classnames(className, 'bf-general-layout')}>{children}</div>
  );
};
