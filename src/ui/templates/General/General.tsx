import React from 'react';
import classnames from 'classnames';

import './General.less';

interface GeneralTemplateProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const GeneralTemplate: React.FC<GeneralTemplateProps> = ({
  className,
  children,
  header,
  footer,
}) => {
  return (
    <div className={classnames(className, 'bf-general-layout')}>
      {header && (
        <header className="bf-general-layout__header">{header}</header>
      )}
      <main className="bf-general-layout__container">{children}</main>
      {footer && (
        <footer className="bf-general-layout__footer">{footer}</footer>
      )}
    </div>
  );
};
