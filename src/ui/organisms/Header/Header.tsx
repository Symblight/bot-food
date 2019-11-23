import React from 'react';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

import { Avatar, Dropdown, Icon } from 'ui';

import './Header.less';

interface HeaderProps {
  className?: string;
  avatar: string;
  name: string;
}

export const Header: React.FC<HeaderProps> = ({ className, avatar, name }) => {
  const renderProfileMenu = () => {
    return (
      <div>
        <Link to="/profile" className="bf-header__menu-user">
          <Icon icon="person" />
          Профиль
        </Link>
        <Link to="/log-out" className="bf-header__menu-user">
          <Icon icon="log-out" />
          Выйти
        </Link>
      </div>
    );
  };
  return (
    <div className={classnames(className, 'bf-header')}>
      <div className="bf-header__head-left">
        <Link to="/">
          <span className="bf-header__logo" />
        </Link>
      </div>
      <div className="bf-header__head-user">
        <Dropdown overlay={renderProfileMenu()}>
          <div>
            <span className="bf-header__userpic">
              <span className="bf-header__username">{name}</span>
              <Avatar size="small" src={avatar} />
            </span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};
