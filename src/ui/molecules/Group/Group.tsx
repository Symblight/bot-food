import React, { useState } from 'react';
import classnames from 'classnames';

import { Icon, Input } from 'ui';

import './Group.less';

interface GroupProps {
  toggle?: boolean;
  className?: string;
  children: React.ReactNode;
  title?: string;
  onToggle?: (value: boolean) => void;
  onEdit?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Group: React.FC<GroupProps> = ({
  className,
  toggle,
  children,
  title,
  onToggle,
  onEdit,
  ...rest
}) => {
  const [editable, setEditable] = useState(false);
  const handleOnToggle = () => {
    if (onToggle) {
      onToggle(!toggle);
    }
  };

  const handleToggle = () => {
    setEditable((prevState) => !prevState);
  };

  return (
    <div
      {...rest}
      role="presentation"
      className={classnames(className, 'bf-group')}
    >
      <div
        role="presentation"
        className="bf-group__header"
        onClick={handleOnToggle}
      >
        <div className="bf-group__arrow">
          <Icon icon={toggle ? 'arrow-downward' : 'arrow-upward'} />
        </div>
        {!editable ? (
          <div
            role="presentation"
            className="bf-group__title"
            onDoubleClick={handleToggle}
          >
            {title}
          </div>
        ) : (
          <Input value={title} onChange={onEdit} onBlur={handleToggle} />
        )}
      </div>
      {toggle && <div className="bg-group__body">{children}</div>}
    </div>
  );
};
