import React from 'react';

import { RouteComponentProps, match } from 'react-router-dom';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

import { Navigation } from 'ui';

import './View.less';

interface Params {
  id: string;
}

interface ViewProps extends RouteComponentProps, RouteConfigComponentProps {
  match: match<Params>;
}

export const View: React.FC<ViewProps> = ({ route, match }) => {
  return (
    <section className="bf-main-constructor">
      <Navigation id={match.params.id} />
      {renderRoutes(route && route.routes)}
    </section>
  );
};
