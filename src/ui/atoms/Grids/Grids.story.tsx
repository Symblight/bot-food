import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import './Grids.less';

storiesOf('Atoms/Grids', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <div>
        <h1>Responsive</h1>
        <Row>
          <Col xs={12} sm={3} md={2} lg={1}>
            <div className="bf-grid-t">xs=12 sm=3 md=2 lg=1</div>
          </Col>
          <Col xs={6} sm={6} md={8} lg={10}>
            <div className="bf-grid-t">xs=6 sm=6 md=8 lg=10</div>
          </Col>
          <Col xs={6} sm={3} md={2} lg={1}>
            <div className="bf-grid-t">xs=6 sm=3 md=2 lg=1</div>
          </Col>
        </Row>
      </div>
      <h1>Auto Width</h1>
      <div style={{ marginTop: '12px' }}>
        <Row>
          <Col xs>
            <div className="bf-grid-t">xs</div>
          </Col>
          <Col xs>
            <div className="bf-grid-t">xs</div>
          </Col>
        </Row>
        <Row style={{ marginTop: '12px' }}>
          <Col xs>
            <div className="bf-grid-t">xs</div>
          </Col>
          <Col xs>
            <div className="bf-grid-t">xs</div>
          </Col>
          <Col xs>
            <div className="bf-grid-t">xs</div>
          </Col>
        </Row>
      </div>
    </>
  ));
