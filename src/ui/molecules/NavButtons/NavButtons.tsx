import React from 'react';
import classnames from 'classnames';

import { Icon } from 'ui';

import './NavButtons.less';

interface NavButtonsProps {
  className?: string;
  onAdd: (value: string) => void;
}

export const NavButtons: React.FC<NavButtonsProps> = ({ className, onAdd }) => {
  const handleClickText = () => {
    onAdd('text');
  };

  const handleClickMenu = () => {
    onAdd('menu');
  };

  const handleClickButtons = () => {
    onAdd('buttons');
  };

  const handleClickCart = () => {
    onAdd('cart');
  };

  return (
    <div className={classnames(className, 'bf-nav-buttons')}>
      <div className="bf-nav-buttons__title">Добавить элемент</div>
      <div className="bf-nav-buttons__nav">
        <div
          className={classnames('bf-nav-buttons__item')}
          role="presentation"
          onClick={handleClickText}
        >
          <Icon icon="message" />
          <span className="bf-nav-buttons__text">Текст</span>
        </div>
        <div
          className={classnames('bf-nav-buttons__item')}
          role="presentation"
          onClick={handleClickMenu}
        >
          <Icon icon="grid" />
          <span className="bf-nav-buttons__text">Меню</span>
        </div>
        <div
          className={classnames('bf-nav-buttons__item')}
          role="presentation"
          onClick={handleClickButtons}
        >
          <Icon icon="flash" />
          <span className="bf-nav-buttons__text">Кнопки</span>
        </div>
        <div
          className={classnames('bf-nav-buttons__item')}
          role="presentation"
          onClick={handleClickCart}
        >
          <Icon icon="shopping-cart" />
          <span className="bf-nav-buttons__text">Корзина</span>
        </div>
      </div>
    </div>
  );
};
