import React from 'react';

import { storiesOf } from '@storybook/react';
import { NavButtons } from './NavButtons';

storiesOf('Molecules/NavButtons', module).add('Default', () => (
  <div style={{ margin: '10px', width: '600px', display: 'flex', justifyContent: 'space-between' }}>
    <NavButtons />
  </div>
));
