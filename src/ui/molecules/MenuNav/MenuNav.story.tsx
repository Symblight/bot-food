import React from 'react';

import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { MenuNav } from './MenuNav';

storiesOf('Molecules/MenuNav', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Default', () => (
    <div
      style={{
        marginLeft: '300px',
        width: '600px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <MenuNav />
    </div>
  ));
