import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './Constructor.less';

interface ConstructorProps extends RouteComponentProps {}

export const ConstructorPage: React.FC<ConstructorProps> = () => {
  return <div>Constructor</div>;
};
