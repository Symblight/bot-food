import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { Select } from './Select';

storiesOf('Atoms/Select', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div style={{ width: '350px', margin: '25px' }}>
      <Select value="one">
        <option value="one">Значение 1</option>
        <option value="two">Значение 2</option>
      </Select>
    </div>
  ))
  .add('Error', () => (
    <div style={{ width: '350px', margin: '25px' }}>
      <Select error="Нужно выбрать значение!" value="one">
        <option value="one">Значение 1</option>
        <option value="two">Значение 2</option>
      </Select>
    </div>
  ));
