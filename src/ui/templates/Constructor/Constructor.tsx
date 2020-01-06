import React from 'react';
import classnames from 'classnames';

import './Constructor.less';

interface ConstructorTemplateProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  navigation?: React.ReactNode;
}

export const ConstructorTemplate: React.FC<ConstructorTemplateProps> = ({
  className,
  children,
  header,
  navigation,
}) => {
  return (
    <div className={classnames(className, 'bf-constructor-layout')}>
      <div className="bf-constructor-layout__header">{header}</div>
      <div className="bf-constructor-layout__container">
        <div className="bf-constructor-layout__navigation">{navigation}</div>
        <div className="bf-constructor-layout__content">{children}</div>
      </div>
    </div>
  );
};
