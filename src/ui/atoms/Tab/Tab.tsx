import React from 'react';
import classnames from 'classnames';

import { Image } from 'ui';

import './Tab.less';

interface TabProps {
  className?: string;
  title: string | React.ReactNode;
  isActive?: boolean;
  image?: string;
}

export const Tab: React.FC<TabProps> = ({
  className,
  title,
  isActive,
  image,
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
      <div className="bf-tab__content">
        {image && (
          <Image src={image} alt={`alt-${title}`} className="bf-tab__image" />
        )}
        <span>{title}</span>
      </div>
    </div>
  );
};
