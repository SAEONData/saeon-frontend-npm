import React from 'react'
import { storiesOf } from '@storybook/react'
import { Row, Col } from 'reactstrap'
import {
  SearchExample,
} from '../src/index'
import DemoColors from '../src/_examples_/css-demo/DemoColors';


storiesOf("Examples", module)
  .add("Search Example", () =>
    <Row>
      <Col md={{ size: 6, offset: 3 }} style={{ marginTop: "35vh" }}>
        <SearchExample />
      </Col>
    </Row>
  )
  .add("Color Demo", () =>
      <DemoColors />
  )

