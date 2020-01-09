import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  GeneralTemplate,
  Header,
  Footer,
  Avatar,
  Block,
  PasswordInput,
  Button,
  Icon,
} from 'ui';

import './Profile.less';

interface ProfilePageProps extends RouteComponentProps {}

export const ProfilePage: React.FC<ProfilePageProps> = () => {
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
        <div className="bf-profile-page__container">
          <Block title="About" className="bf-profile-page__block">
            <Avatar
              size="large"
              src="https://sun9-23.userapi.com/c855428/v855428321/116aa2/uqyf9qbT5bI.jpg?ava=1"
            />
            <h2 className="bf-profile-page__field">Alexey Tkachenko</h2>
            <h4 className="bf-profile-page__field">Adminsitrator</h4>
            <div className="bf-profile-page__row">
              <h4>symblight@gmail.com</h4>
              <Icon icon="edit" />
            </div>
          </Block>
          <Block title="Edit password" className="bf-profile-page__block">
            <div className="bf-profile-page__content-block">
              <PasswordInput className="bf-profile-page__field" />
              <PasswordInput className="bf-profile-page__field" />
              <Button priority="primary">Edit password</Button>
            </div>
          </Block>
        </div>
      </div>
    </GeneralTemplate>
  );
};
