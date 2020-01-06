import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { NavButtons, Group, Button } from 'ui';

import './Constructor.less';

interface ConstructorProps extends RouteComponentProps {}

export const ConstructorPage: React.FC<ConstructorProps> = () => {
  return (
    <div className="bf-constructor-page">
      <div className="bf-constructor-page__menu">
        <Group title="Группа 1" toggle>
          <Button size="small">button</Button>
          <Button size="small">button</Button>
          <Button size="small">button</Button>
        </Group>
        <Group title="Группа 2" toggle>
          <Button size="small">button</Button>
        </Group>
        <Group title="Группа 3" toggle>
          <Button size="small">button</Button>
          <Button size="small">button</Button>
        </Group>
      </div>
      <div className="bf-constructor-page__content">
        <NavButtons onAdd={() => null} />
      </div>
    </div>
  );
};
