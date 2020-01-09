import React from 'react';

import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { GeneralTemplate } from './General';

import { Header, Footer } from 'ui';

storiesOf('Templates/General', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Default', () => (
    <div style={{ height: '100%' }}>
      <GeneralTemplate
        header={
          <Header
            avatar="https://sun9-23.userapi.com/c855428/v855428321/116aa2/uqyf9qbT5bI.jpg?ava=1"
            name="Alexey"
          />
        }
        footer={<Footer />}
      >
        body
      </GeneralTemplate>
    </div>
  ));
