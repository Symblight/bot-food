import React from 'react';

import { storiesOf } from '@storybook/react';
import { Header } from './Header';
import { MemoryRouter } from 'react-router-dom';

storiesOf('Organisms/Header', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Default', () => (
    <div>
      <Header
        avatar="https://sun9-23.userapi.com/c855428/v855428321/116aa2/uqyf9qbT5bI.jpg?ava=1"
        name="Alexey"
      />
    </div>
  ));
