import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { Navigation } from './Navigation';

storiesOf('Molecules/Navigation', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Default', () => <Navigation />);
