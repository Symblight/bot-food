import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import { Button } from './Button';

storiesOf('Atoms/Buttons', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <Button>{text('children', 'Secondary button')}</Button>
      <Button priority="primary">{text('children', 'Primary button')}</Button>
      <Button priority="alert">{text('children', 'Alert button')}</Button>
      <Button priority="inline">{text('children', 'Inline button')}</Button>
      <Button priority="primary" shape="round">
        Round button
      </Button>
    </>
  ))
  .add('Disabled', () => <Button disabled>{text('children', 'Default button')}</Button>)
  .add('Anchor', () => (
    <Button href="#" elementType="a" onClick={action('button-click')}>
      {text('children', 'Anchor button')}
    </Button>
  ))
  .add('Size', () => (
    <>
      <Button size="large" onClick={action('button-click')}>
        Large
      </Button>
      <Button onClick={action('button-click')}>Default</Button>
      <Button size="small" onClick={action('button-click')}>
        Small
      </Button>
    </>
  ));
