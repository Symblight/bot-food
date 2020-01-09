import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Table } from 'ui';

import './Users.less';

interface UsersProps extends RouteComponentProps {}

export const UsersPage: React.FC<UsersProps> = () => {
  const columns = [
    {
      Header: 'First name',
      accessor: 'firstName',
    },
    {
      Header: 'Last name',
      accessor: 'lastName',
    },
  ];
  const data = [
    {
      firstName: 'Ivan',
      lastName: 'Fedov',
      allows: 'User',
    },
    {
      firstName: 'Anton',
      lastName: 'Kuts',
      allows: 'User',
    },
  ];
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};
