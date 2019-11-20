import React from 'react';
import classnames from 'classnames';

import './Tag.less';

interface TagProps {
  type?: 'danger' | 'success' | 'warning';
  className?: string;
  children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({
  className,
  type,
  children,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={classnames(className, 'bf-tag', `bf-tag--${type}`)}
    >
      <div className="bf-tag__content">{children}</div>
    </div>
  );
};

Tag.defaultProps = {
  type: 'success',
};
