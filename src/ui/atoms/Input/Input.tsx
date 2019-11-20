import React from 'react';
import classnames from 'classnames';

import './Input.less';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent) => void;
  disabled?: boolean;
  type?: string;
  error?: string;
  sizeInput?: 'small' | 'default' | 'large';
}

export const Input: React.FC<InputProps> = ({
  type,
  disabled,
  className,
  value,
  onChange,
  error,
  sizeInput,
  ...props
}) => {
  return (
    <div className="bf-input">
      <input
        className={classnames(
          className,
          'bf-input__control',
          disabled && 'bf-input__control--disabled',
          error && 'bf-input__control--error',
          `bf-input__control--${sizeInput}`
        )}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoCapitalize="off"
        autoCorrect="off"
        type={type}
        {...props}
      />
      {error && <span className="bf-input__error">{error}</span>}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  sizeInput: 'default',
};
