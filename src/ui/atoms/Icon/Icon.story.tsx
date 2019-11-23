import React from 'react';

import { storiesOf } from '@storybook/react';
import { Icon } from './Icon';

const icons: string[] = [
  'arrow-downward',
  'arrow-upward',
  'close',
  'menu',
  'person',
  'settings',
  'sun',
  'moon',
  'archive',
  'eye',
  'eye-off',
  'github',
  'more-vertical',
  'trash',
  'edit',
  'image',
  'clipboard',
  'car',
  'calendar',
  'plus',
  'flash',
  'grid',
  'message',
  'log-out',
];

storiesOf('Atoms/Icons', module).add('Icons', () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', width: '600px' }}>
    {icons.map((type: string) => (
      <div
        key={type}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginLeft: '10px',
        }}
      >
        <Icon icon={type} />
        <span style={{ margin: '10px' }}>{type}</span>
      </div>
    ))}
  </div>
));
