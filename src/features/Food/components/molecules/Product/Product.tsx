import React from 'react';
import classnames from 'classnames';

import { FoodProps } from 'webroot/structures';
import { Card, Image } from 'ui';

import './Product.less';

interface ProductProps {
  className?: string;
  data: FoodProps;
}

export const Product: React.FC<ProductProps> = ({ className, data }) => {
  return (
    <Card className={classnames(className, 'bf-product')}>
      <div className="bf-product__content">
        <Image src={data.src} alt={data.title} />
      </div>
      <div className="bf-product__footer">
        <div>{data.title}</div>
        <div>{data.price}</div>
      </div>
    </Card>
  );
};
