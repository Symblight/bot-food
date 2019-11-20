import React from 'react';

import { storiesOf } from '@storybook/react';
import { AddBotCard } from './AddBotCard';

storiesOf('Molecules/AddBotCard', module).add('Default', () => (
  <div style={{ margin: '10px', width: '600px', display: 'flex', justifyContent: 'space-between' }}>
    <AddBotCard />
  </div>
));
