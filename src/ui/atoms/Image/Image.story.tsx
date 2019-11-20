import React from 'react';

import { storiesOf } from '@storybook/react';
import { Image } from './Image';

storiesOf('Atoms/Images', module).add('Default', () => (
  <Image
    src="https://leonardo.osnova.io/651045a9-ef37-4bd9-f6d6-70fd214be652/-/scale_crop/282x278/center/-/format/webp/"
    alt="twitch"
  />
));
