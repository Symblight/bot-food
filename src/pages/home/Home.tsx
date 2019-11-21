import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { GeneralTemplate, Button } from 'ui';

import './Home.less';

interface HomePageProps extends RouteComponentProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <GeneralTemplate>
      Компания vivo 20 ноября провела в Москве презентацию, на которой
      представила смартфон V17. В компании обещают в подарок предоставить
      смартфон vivo Y11 при оформлении предзаказа на новое устройство.
      <Button>Click</Button>
    </GeneralTemplate>
  );
};
