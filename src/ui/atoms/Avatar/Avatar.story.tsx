import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { Avatar } from './Avatar';

storiesOf('Atoms/Avatar', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
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
    </>
  ));
