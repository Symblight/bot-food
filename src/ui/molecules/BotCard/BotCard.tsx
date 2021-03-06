import React from 'react';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

import { BotDataLink } from 'webroot/structures';
import { Card, Icon } from 'ui';

import './BotCard.less';

interface BotCardProps {
  className?: string;
  data: BotDataLink;
  onClick?: () => void;
  onArchive?: (id: number | string) => void;
  onEdit?: (id: number | string) => void;
  to: string;
  active?: boolean;
}

export const BotCard: React.FC<BotCardProps> = ({
  className,
  to,
  data,
  onEdit,
  onArchive,
  active,
}) => {
  const handleOnArchive = () => {
    if (onArchive) {
      onArchive(data.id);
    }
  };

  const handleOnEdit = () => {
    if (onEdit) {
      onEdit(data.id);
    }
  };

  const renderOptions = () => {
    return (
      <div className="menu-bot-card">
        <div
          role="presentation"
          className="menu-bot-card__menuitem"
          onClick={handleOnArchive}
        >
          <Icon icon="archive" />
          Архивировать
        </div>
        <div
          role="presentation"
          className="menu-bot-card__menuitem"
          onClick={handleOnEdit}
        >
          <Icon icon="edit" />
          Редактировать
        </div>
      </div>
    );
  };

  return (
    <Link to={to} className={classnames(className, 'bf-card-bot')}>
      <Card className="bf-card-bot">
        <div className="bf-card-bot__head">
          <span>{data.title}</span>
        </div>
        <div className="bf-card-bot__body">{data.description}</div>
        <div
          className={classnames(
            'bf-card-bot__footer',
            active
              ? 'bf-card-bot__footer--active'
              : 'bf-card-bot__footer--archive',
          )}
        ></div>
      </Card>
    </Link>
  );
};
