import React from 'react';
import classnames from 'classnames';

import { Avatar } from 'ui';

import './Header.less';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={classnames(className, 'bf-header')}>
      <div className="bf-header__head-left">
        <span className="bf-header__logo" />
      </div>
      <div className="bf-header__head-user">
        <span className="bf-header__userpic">
          <span className="bf-header__username">Alexey</span>
          <Avatar
            size="small"
            src="https://sun9-23.userapi.com/c855428/v855428321/116aa2/uqyf9qbT5bI.jpg?ava=1"
          />
        </span>
      </div>
    </div>
  );
};
