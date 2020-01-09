import React, { useState } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import { RouteComponentProps } from 'react-router-dom';

import {
  GeneralTemplate,
  Header,
  Footer,
  Table,
  Button,
  Input,
  Modal,
  Select,
} from 'ui';

import './Users.less';

interface UsersProps extends RouteComponentProps {}

export const UsersPage: React.FC<UsersProps> = () => {
  const [visibleAddModal, setVisibleAddModal] = useState(false);
  const handleClickAdd = () => {
    setVisibleAddModal(true);
  };
  const handleHideAdd = () => {
    setVisibleAddModal(false);
  };
  const columns = [
    {
      Header: 'First name',
      accessor: 'firstName',
    },
    {
      Header: 'Last name',
      accessor: 'lastName',
    },
    {
      Header: 'Allows',
      accessor: 'allows',
    },
  ];
  const data = [
    {
      firstName: 'Alexey',
      lastName: 'Tkachenko',
      allows: 'Administrator',
    },
    {
      firstName: 'Vasay',
      lastName: 'Pupkin',
      allows: 'User',
    },
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
    <GeneralTemplate
      header={
        <Header
          avatar="https://sun9-23.userapi.com/c855428/v855428321/116aa2/uqyf9qbT5bI.jpg?ava=1"
          name="Alexey"
        />
      }
      footer={<Footer />}
    >
      <div>
        <div className="bf-users-page__header">
          <h3>Users</h3>
          <Button onClick={handleClickAdd} priority="primary">
            Add user
          </Button>
        </div>
        <Table columns={columns} data={data} />
        <Modal
          title="Add user"
          visible={visibleAddModal}
          onClose={handleHideAdd}
        >
          <Row className="bf-users-page__item">
            <Col xs={4}>First name:</Col>
            <Col xs={8}>
              <Input />
            </Col>
          </Row>
          <Row className="bf-users-page__item">
            <Col xs={4}>Last name:</Col>
            <Col xs={8}>
              <Input />
            </Col>
          </Row>
          <Row className="bf-users-page__item">
            <Col xs={4}>Password:</Col>
            <Col xs={8}>
              <Input />
            </Col>
          </Row>
          <Row className="bf-users-page__item">
            <Col xs={4}>Allows:</Col>
            <Col xs={8}>
              <Select>
                <option value="administrator">Administrator</option>
                <option value="user">User</option>
              </Select>
            </Col>
          </Row>
          <Button
            className="bf-users-page__button"
            size="large"
            priority="primary"
          >
            Add user
          </Button>
        </Modal>
      </div>
    </GeneralTemplate>
  );
};
