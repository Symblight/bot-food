import React from 'react';

import { storiesOf } from '@storybook/react';
import { ReplyButtons } from './ReplyButtons';

storiesOf('Molecules/ReplyButtons', module).add('Default', () => (
  <div style={{ margin: '10px', width: '600px', display: 'flex', justifyContent: 'space-between' }}>
    <ReplyButtons />
  </div>
));
