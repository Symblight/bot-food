import React from 'react';
import classnames from 'classnames';

import { Button, Icon } from 'ui';

import './ReplyButtons.less';

interface ReplyButtonsProps {}

export const ReplyButtons: React.FC<ReplyButtonsProps> = () => {
  return (
    <div className={classnames('bf-reply-buttons')}>
      <Button
        size="large"
        shape="round"
        className="bf-reply-buttons__reply-button"
      >
        Кнопка
      </Button>
      <Button size="large" shape="round">
        <div className="bf-reply-buttons__inner-button">
          <Icon icon="plus" /> Добавить быстрый ответ
        </div>
      </Button>
    </div>
  );
};
