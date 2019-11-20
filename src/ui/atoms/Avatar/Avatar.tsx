import React from 'react';
import classnames from 'classnames';

import './Avatar.less';

interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: 'small' | 'default' | 'large';
  className?: string;
  src: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  className,
  size,
  ...rest
}) => {
  return (
    <img
      {...rest}
      className={classnames(className, 'bf-avatar', `bf-avatar--${size}`)}
      src={src}
      alt="avatar"
    />
  );
};

Avatar.defaultProps = {
  size: 'default',
};
