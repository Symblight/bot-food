import React from 'react';
import classnames from 'classnames';

import { Block, Input, Button } from 'ui';

import './TokenBlock.less';

interface TokenBlockProps {}

export const TokenBlock: React.FC<TokenBlockProps> = () => {
  return (
    <Block title="API Token" className="bf-token-block">
      <div className="bf-token-block__content">
        <Input className="bf-token-block__input" />
        <Button priority="primary">Edit</Button>
      </div>
    </Block>
  );
};
