import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { TextArea } from './TextArea';

storiesOf('Atoms/TextArea', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div style={{ margin: '10px', width: '260px' }}>
      <div style={{ marginTop: '10px' }}>
        <TextArea placeholder="текст" />
      </div>
    </div>
  ))
  .add('Diabled', () => (
    <div style={{ margin: '10px', width: '300px' }}>
      <TextArea disabled value="username" placeholder="текст" />
    </div>
  ))
  .add('Error', () => (
    <div style={{ margin: '10px', width: '300px' }}>
      <div>
        <TextArea
          error="Неправильный логин"
          value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nam necessitatibus, eum porro asperiores "
          placeholder="текст"
        />
      </div>
      <div style={{ marginTop: '25px' }}>
        <TextArea
          error="Неправильный логин"
          resize
          value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nam necessitatibus, eum porro asperiores"
          placeholder="текст"
        />
      </div>
    </div>
  ));
