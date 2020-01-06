import React from 'react';
import classnames from 'classnames';

import { Card, Icon } from 'ui';

import './AddBotCard.less';

interface AddBotCardProps {
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

export const AddBotCard: React.FC<AddBotCardProps> = ({
  className,
  onClick,
}) => {
  return (
    <Card onClick={onClick} className={classnames(className, 'add-bot-card')}>
      <div className="add-bot-card__body">
        <div className="add-bot-card__content">
          Add bot <Icon icon="plus" />
        </div>
      </div>
    </Card>
  );
};
