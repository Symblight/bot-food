import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { GeneralTemplate } from 'ui';

import './Home.less';

interface HomePageProps extends RouteComponentProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return <GeneralTemplate>Home</GeneralTemplate>;
};
