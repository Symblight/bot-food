import React from 'react';
import classnames from 'classnames';

import { Block, Input, Button } from 'ui';

import './Filter.less';

interface FilterProps {
  className?: string;
}

export const Filter: React.FC<FilterProps> = ({ className }) => {
  return (
    <Block className={classnames(className, 'bf-filter')} title="Filter">
      <Input placeholder="Search food" />
      <Button priority="primary">Search</Button>
    </Block>
  );
};
