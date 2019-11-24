import React from 'react';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

import { Button, Icon } from 'ui';

import './Navigation.less';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <div className={classnames(className, 'bf-navigation')}>
      <Link to="/">
        <Button
          size="small"
          className="bf-navigation__button-nav"
          priority="inline"
          icon={<Icon icon="grid" />}
        />
      </Link>
      <Link to="/settings">
        <Button
          size="small"
          className="bf-navigation__button-nav"
          priority="inline"
          icon={<Icon icon="people" />}
        />
      </Link>
      <Link to="/users">
        <Button
          size="small"
          priority="inline"
          className="bf-navigation__button-nav"
          icon={<Icon icon="settings" />}
        />
      </Link>
    </div>
  );
};
