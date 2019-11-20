import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { Card } from './Card';

storiesOf('Atoms/Cards', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Card>{text('children', 'Example')}</Card>);
