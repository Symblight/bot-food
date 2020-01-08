import React from 'react';
import classnames from 'classnames';

import './Tab.less';

interface TabProps {
  className?: string;
  title: string;
  isActive?: boolean;
}

export const Tab: React.FC<TabProps> = ({
  className,
  title,
  isActive,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classnames(
        'bf-tab__button',
        isActive && 'bf-tab__button--active',
        className,
      )}
    >
      {title}
    </div>
  );
};
