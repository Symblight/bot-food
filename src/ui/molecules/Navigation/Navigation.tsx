import React from 'react';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

import { Button, Icon } from 'ui';

import './Navigation.less';

interface NavigationProps {
  className?: string;
  id: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className, id }) => {
  return (
    <div className={classnames(className, 'bf-navigation')}>
      <div className="bf-navigation__links">
        <Link to={`/bot/${id}`}>
          <Button
            size="default"
            className="bf-navigation__button-nav"
            priority="inline"
            icon={<Icon icon="grid" />}
          />
        </Link>
        <Link to={`/bot/${id}/users`}>
          <Button
            size="default"
            className="bf-navigation__button-nav"
            priority="inline"
            icon={<Icon icon="people" />}
          />
        </Link>
        <Link to={`/bot/${id}/settings`}>
          <Button
            size="default"
            priority="inline"
            className="bf-navigation__button-nav"
            icon={<Icon icon="settings" />}
          />
        </Link>
      </div>
    </div>
  );
};
