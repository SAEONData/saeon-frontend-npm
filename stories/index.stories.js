import React from 'react';
import { Row, Col } from 'reactstrap';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { SearchExample } from '../src/index';

storiesOf("Examples", module)
  .add("Search Example", () =>
    <Row>
      <Col md={{ size: 6, offset: 3 }} style={{ marginTop: "35vh" }}>
        <SearchExample />
      </Col>
    </Row>)
