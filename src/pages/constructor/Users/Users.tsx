import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './Users.less';

interface UsersProps extends RouteComponentProps {}

export const UsersPage: React.FC<UsersProps> = () => {
  return <div>Users page</div>;
};
