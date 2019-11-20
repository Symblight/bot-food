import React from 'react';
import classnames from 'classnames';

import './Form.less';

interface FormProps {
  children: React.ReactNode;
  className?: string;
}

export const FormTemplate: React.FC<FormProps> = ({ className, children }) => {
  return <div className={classnames(className, 'bf-form')}>{children}</div>;
};
