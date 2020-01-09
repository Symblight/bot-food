import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';

import { Product, useRow } from 'features/Food';

import { FoodProps } from 'webroot/structures';

import './Products.less';

interface ProductsProps {
  className?: string;
  title?: string;
  data: FoodProps[];
}
const SIZE_COLUMNS = 3;

export const Products: React.FC<ProductsProps> = ({
  className,
  data = [],
  title,
}) => {
  const fill = _.fill(new Array(SIZE_COLUMNS), {});
  const normalize = [...data, ...fill];

  const rows = _.chunk(normalize, SIZE_COLUMNS).filter(
    (item) => Object.keys(item[0]).length,
  );

  return (
    <div className={classnames(className, 'bf-products')}>
      <h2>{title}</h2>
      {rows.map((row) => (
        <div key={_.uniqueId('prod-row')} className="bf-products__rows">
          {row.map((item: any) => {
            return (
              <div key={_.uniqueId('prod-col')} className="bf-products__item">
                {!_.isEmpty(item) && <Product {...item} data={item} />}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
