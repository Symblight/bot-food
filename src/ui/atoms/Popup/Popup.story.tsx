import React from 'react';

import { storiesOf } from '@storybook/react';
import { Popup } from './Popup';

storiesOf('Atoms/Popup', module).add('Default', () => (
  <div
    style={{
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <div style={{ margin: '50px' }}>
      <Popup placement="left" content={<div>Popup content</div>}>
        <span>Popup leftPopup content</span>
      </Popup>
    </div>
    <div style={{ margin: '50px' }}>
      <Popup placement="right" content={<div>Popup content</div>}>
        <span>Popup rightPopup contentPopup content</span>
      </Popup>
    </div>
    <div style={{ margin: '50px' }}>
      <Popup placement="top" content={<div>Popup content</div>}>
        <span>Popup top</span>
      </Popup>
    </div>
    <div style={{ margin: '50px' }}>
      <Popup placement="bottom" content={<div>Popup content</div>}>
        <span>Popup bottom</span>
      </Popup>
    </div>
  </div>
));
