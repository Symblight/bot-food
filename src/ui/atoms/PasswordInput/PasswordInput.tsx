import React, { useState } from 'react';
import classnames from 'classnames';

import { Icon, Input } from 'ui';

import './PasswordInput.less';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent) => void;
  error?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  className,
  onChange,
  error,
  value,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => setVisible(true);
  const handleHide = () => setVisible(false);

  return (
    <div className="bf-password-input">
      <Input
        {...props}
        type={visible ? 'text' : 'password'}
        className={classnames(className, 'bf-password-input__control')}
        onChange={onChange}
        value={value}
        error={error}
      />
      <div
        role="presentation"
        className="bf-password-input__icon-eye"
        onMouseDown={handleVisible}
        onMouseUp={handleHide}>
        <Icon icon={visible ? 'eye' : 'eye-off'} />
      </div>
    </div>
  );
};
