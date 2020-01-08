import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { GeneralTemplate, Header, Footer } from 'ui';

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
      <div>Food page</div>
    </GeneralTemplate>
  );
};
