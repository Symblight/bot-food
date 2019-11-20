import React from 'react';

import { storiesOf } from '@storybook/react';
import { Modal } from './Modal';

storiesOf('Atoms/Modal', module).add('Default', () => (
  <Modal title="Модальное окно" visible>
    Modal content
  </Modal>
));
