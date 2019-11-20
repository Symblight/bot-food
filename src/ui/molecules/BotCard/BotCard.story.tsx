import React from 'react';

import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { BotCard } from './BotCard';

storiesOf('Molecules/BotCard', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Default', () => (
    <div
      style={{
        margin: '10px',
        width: '600px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <BotCard to="#" data={{ id: 1, description: 'bot', title: '1' }} />
      <BotCard
        to="#"
        data={{ id: 2, title: 'bot', description: 'body-text' }}
      />
    </div>
  ));
