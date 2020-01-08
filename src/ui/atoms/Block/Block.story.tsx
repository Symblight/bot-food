import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { Block } from './Block';

storiesOf('Atoms/Blocks', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Block title="text">{text('children', 'Example')}</Block>
  ));
