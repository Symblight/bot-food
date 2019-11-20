import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { PasswordInput } from './PasswordInput';

storiesOf('Atoms/PasswordInput', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div style={{ margin: '10px', width: '260px' }}>
      <PasswordInput />
    </div>
  ))
  .add('Errors', () => (
    <div style={{ margin: '10px', width: '260px' }}>
      <PasswordInput error="Неправильный пароль" />
    </div>
  ));
