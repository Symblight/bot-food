import React from 'react';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

import { Avatar, Dropdown, Icon, Image } from 'ui';

import Laptop from 'src/webroot/img/laptop.png';
import Joystick from 'src/webroot/img/joystick.png';

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
      <div className="bf-header__items">
        <Link to="/" className="bf-header__item">
          <Image className="bf-header__image" src={Joystick} alt="joystick" />
          Bots
        </Link>
        <Link to="/users" className="bf-header__item">
          <Image className="bf-header__image" src={Laptop} alt="users" />
          Users
        </Link>
      </div>
      <div className="bf-header__head-user">
        <div className="bf-header__item">
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
    </div>
  );
};
