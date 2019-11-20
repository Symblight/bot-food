import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { Group } from './Group';

function TestToggle() {
  const [value, setValue] = useState(false);
  const [title, setTitle] = useState('Заголовок');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  return (
    <Group
      title={title}
      toggle={value}
      onEdit={handleChange}
      onToggle={(toggle) => setValue(toggle)}
    >
      <div>11</div>
      <div>12</div>
      <div>13</div>
    </Group>
  );
}

storiesOf('Molecules/Group', module).add('Default', () => (
  <div
    style={{
      margin: '10px',
      width: '600px',
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    {TestToggle()}
  </div>
));
