import React from 'react';
import classnames from 'classnames';

import './Button.less';

export interface ButtonProps {
  className?: string;
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  size?: 'small' | 'default' | 'large';
  priority?: 'primary' | 'alert' | 'secondary' | 'inline';
  shape?: 'round';
  elementType?: React.ElementType;
  onClick?: (ev: React.MouseEvent<Element>) => void;
  type?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  elementType,
  href,
  onClick,
  disabled,
  className,
  size,
  type,
  priority,
  icon,
  shape,
}) => {
  return React.createElement(
    elementType || 'button',
    {
      disabled,
      className: classnames(
        className,
        'bf-button',
        size && `bf-button--${size}`,
        disabled && 'bf-button--disabled',
        priority && `bf-button--type-${priority}`,
        shape && `bf-button--shape-${shape}`
      ),
      onClick,
      href,
      type,
    },
    icon || children
  );
};

Button.defaultProps = {
  elementType: 'button',
  priority: 'secondary',
  disabled: false,
};
