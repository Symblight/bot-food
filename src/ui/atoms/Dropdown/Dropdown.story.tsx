import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { Icon, Button } from 'ui';
import { Dropdown } from './Dropdown';

const menu = (
  <div>
    <div>Профиль</div>
    <div role="presentation" onClick={() => null}>
      Настройки
    </div>
    <div>Выйти</div>
  </div>
);

storiesOf('Atoms/Dropdwon', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '400px',
        margin: '25px',
      }}
    >
      <Dropdown placement="downRight" overlay={menu}>
        <span>Click me! Right</span>
      </Dropdown>
      <Dropdown overlay={menu}>
        <span>Click me! Left</span>
      </Dropdown>
      <Dropdown overlay={menu}>
        <Button type="inline">
          <Icon icon="car" />
        </Button>
      </Dropdown>
    </div>
  ));
