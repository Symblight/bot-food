import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { GeneralTemplate, Header, Footer, Image } from 'ui';
import NotMan from 'src/webroot/img/man-shrugging.png';

import './NotFound.less';

interface NotFoundProps extends RouteComponentProps {}

export const NotFoundPage: React.FC<NotFoundProps> = ({ location }) => {
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
      <div className="bf-not-found-page">
        <Image
          className="bf-not-found-page__image"
          src={NotMan}
          alt="not-found"
        />
        <h3>Sorry...</h3>
        <h1>Not Found {location.pathname}</h1>
      </div>
    </GeneralTemplate>
  );
};
