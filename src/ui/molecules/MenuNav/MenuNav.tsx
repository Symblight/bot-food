import React from 'react';
import classnames from 'classnames';

import { Icon, Dropdown, Button, Avatar } from 'ui';

interface MenuNavProps {}

export const MenuNav: React.FC<MenuNavProps> = () => {
  const renderOptions = () => {
    return (
      <div className="menu-bot-card">
        <div role="presentation" className="menu-bot-card__menuitem">
          <Icon icon="person" />
          Профиль
        </div>
        <div role="presentation" className="menu-bot-card__menuitem">
          <Icon icon="settings" />
          Выйти
        </div>
      </div>
    );
  };
  return (
    <Dropdown overlay={renderOptions()}>
      <Button size="small" type="inline" className={classnames()}>
        <Avatar src="" />
      </Button>
    </Dropdown>
  );
};
