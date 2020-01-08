import React from 'react';
import classnames from 'classnames';

import { Card, Icon } from 'ui';

import './AddCard.less';

interface AddCardProps {
  className?: string;
  title: string;
  onClick?: (event: React.MouseEvent) => void;
}

export const AddCard: React.FC<AddCardProps> = ({
  className,
  onClick,
  title,
}) => {
  return (
    <Card onClick={onClick} className={classnames(className, 'bf-add-card')}>
      <div className="bf-add-card__body">
        <div className="bf-add-card__content">
          {title} <Icon icon="plus" />
        </div>
      </div>
    </Card>
  );
};
