import React from 'react';
import { Row, Col } from 'reactstrap';
import Header from './header/Header'
import Navbar from './navbar/Navbar'

import './Layout.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let { header, navbar, sidebar, footer } = this.props

    return (
      <div className="layout-container">
        {
          header &&
          header
        }
        {
          navbar &&
          navbar
        }
        {
          sidebar &&
          sidebar
        }

        <Row className="layout-row">
          <Col className="layout-col">
            {this.props.children}
          </Col>
        </Row>

        {
          footer &&
          footer
        }
      </div>
    )
  }
}

export default Layout;
