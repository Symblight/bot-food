import React from 'react';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

import { Avatar, Button, Icon } from 'ui';

import './HeaderConstructor.less';

interface HeaderConstructorProps {
  className?: string;
  title: string;
}

export const HeaderConstructor: React.FC<HeaderConstructorProps> = ({
  className,
  title,
}) => {
  return (
    <div className={classnames(className, 'bf-header-c')}>
      <div className="bf-header-c__head-left">
        <Link to="/">
          <span className="bf-header-c__logo" />
        </Link>
      </div>
      <div className="bf-header-c__head-user">
        <span>{title}</span>
        <Button priority="primary">Run bot</Button>
      </div>
    </div>
  );
};
