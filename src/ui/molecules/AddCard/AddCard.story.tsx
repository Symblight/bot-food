import React from 'react';

import { storiesOf } from '@storybook/react';
import { AddCard } from './AddCard';

storiesOf('Molecules/AddCard', module).add('Default', () => (
  <div
    style={{
      margin: '10px',
      width: '600px',
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <AddCard title="add bot" />
  </div>
));
