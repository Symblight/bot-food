import React from 'react';

import { storiesOf } from '@storybook/react';
import { Avatar } from './Avatar';

storiesOf('Atoms/Avatar', module).add('Default', () => (
  <div>
    <Avatar
      size="small"
      src="https://sun9-23.userapi.com/c855428/v855428321/116aa2/uqyf9qbT5bI.jpg?ava=1"
    />
    <Avatar
      size="default"
      src="https://sun9-23.userapi.com/c855428/v855428321/116aa2/uqyf9qbT5bI.jpg?ava=1"
    />
    <Avatar
      size="large"
      src="https://sun9-23.userapi.com/c855428/v855428321/116aa2/uqyf9qbT5bI.jpg?ava=1"
    />
  </div>
));
