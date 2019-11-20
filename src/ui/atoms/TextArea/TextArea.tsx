import React from 'react';
import classnames from 'classnames';

import './TextArea.less';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  classNames?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent) => void;
  error?: string;
  disabled?: boolean;
  resize?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  error,
  className,
  disabled,
  resize,
  ...props
}) => {
  return (
    <div className="bf-text-area">
      <textarea
        {...props}
        value={value}
        onChange={onChange}
        disabled={disabled}
        maxLength={300}
        rows={4}
        className={classnames(
          className,
          'bf-text-area__control',
          disabled && 'bf-input__control--disabled',
          error && 'bf-text-area__control--error',
          resize
            ? 'bf-text-area__control--resize'
            : 'bf-text-area__control--no-resize',
        )}
      />
      {error && <span className="bf-text-area__error">{error}</span>}
    </div>
  );
};
