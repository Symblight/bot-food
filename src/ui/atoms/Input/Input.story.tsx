import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { Input } from './Input';

storiesOf('Atoms/Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div style={{ margin: '10px', width: '260px' }}>
      <div style={{ marginTop: '10px' }}>
        <Input type="email" placeholder="текст" />
      </div>
    </div>
  ))
  .add('Diabled', () => (
    <div style={{ margin: '10px', width: '300px' }}>
      <Input disabled value="username" placeholder="текст" />
    </div>
  ))
  .add('Error', () => (
    <div style={{ margin: '10px', width: '300px' }}>
      <Input error="Неправильный логин" value="username" placeholder="текст" />
    </div>
  ))
  .add('sizes', () => (
    <>
      <div style={{ margin: '10px', width: '300px' }}>
        <Input sizeInput="small" value="username" placeholder="текст" />
      </div>
      <div style={{ margin: '10px', width: '300px' }}>
        <Input sizeInput="default" value="username" placeholder="текст" />
      </div>
      <div style={{ margin: '10px', width: '300px' }}>
        <Input sizeInput="large" value="username" placeholder="текст" />
      </div>
    </>
  ));
