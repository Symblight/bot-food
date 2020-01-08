import React from 'react';
import classnames from 'classnames';

import { Block } from 'ui';

import './PaymentBlock.less';

interface PaymentBlockProps {}

export const PaymentBlock: React.FC<PaymentBlockProps> = () => {
  return (
    <Block title="Payment" className="bf-name-bot-block">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur
      nobis excepturi voluptatum laudantium, repellendus ipsa sequi et non
      repellat odit voluptates placeat, mollitia sapiente, magnam rerum quae
      optio deleniti.
    </Block>
  );
};
