import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { GeneralTemplate, Header, Footer, Block, Button } from 'ui';

import { Filter, Products } from 'features/Food';
import { foods } from 'webroot/mocks/foods';

import './Food.less';

interface FoodPageProps extends RouteComponentProps {}

export const FoodPage: React.FC<FoodPageProps> = () => {
  return (
    <GeneralTemplate
      header={
        <Header
          avatar="https://sun9-23.userapi.com/c855428/v855428321/116aa2/uqyf9qbT5bI.jpg?ava=1"
          name="Alexey"
        />
      }
      footer={<Footer />}
    >
      <div className="bf-food-page">
        <div className="bf-food-page__content">
          <Products data={foods} title="Breakfast-Techvice" />
        </div>
        <div className="bf-food-page__menu">
          <Filter className="bf-food-page__block" />
          <Block className="bf-food-page__block" title="New food">
            <Button priority="primary">Add new food</Button>
          </Block>
        </div>
      </div>
    </GeneralTemplate>
  );
};
