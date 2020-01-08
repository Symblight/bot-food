import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { GeneralTemplate, Header, Footer, Avatar, Block } from 'ui';

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
        <Avatar
          size="large"
          src="https://sun9-23.userapi.com/c855428/v855428321/116aa2/uqyf9qbT5bI.jpg?ava=1"
        />
        <div>Alexey Tkachenko</div>
        <div>Menu</div>
        <div>
          <Block title="Title">dd</Block>
        </div>
      </div>
    </GeneralTemplate>
  );
};
