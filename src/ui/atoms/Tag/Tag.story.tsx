import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { Tag } from './Tag';

storiesOf('Atoms/Tag', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <Tag type="success">Подключен</Tag>
      <Tag type="warning">Не найден</Tag>
      <Tag type="danger">Не подключен</Tag>
    </>
  ));
