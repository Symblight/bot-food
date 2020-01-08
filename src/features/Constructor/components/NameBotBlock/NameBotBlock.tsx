import React from 'react';
import classnames from 'classnames';

import { Block, Input, Button } from 'ui';

import './NameBotBlock.less';

interface NameBotBlockProps {}

export const NameBotBlock: React.FC<NameBotBlockProps> = () => {
  return (
    <Block title="Title bot" className="bf-name-bot-block">
      <div className="bf-name-bot-block__content">
        <Input className="bf-name-bot-block__input" />
        <Button priority="primary">Edit</Button>
      </div>
    </Block>
  );
};
