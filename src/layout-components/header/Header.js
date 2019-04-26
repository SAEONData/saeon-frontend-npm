import React from 'react';
import { Row, Col } from 'reactstrap';

import placeholder_grey from '../../../images/placeholder-grey.png'

import '../../Shared.scss'
import './Header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let { config: { title, subTitle, beta, imageLeft, imageRight } } = this.props

    // title = title ? title : "TITLE"
    // subTitle = subTitle ? subTitle : "This is a sub-title"
    // beta = beta ? true : false
    // imageLeft = imageLeft ? imageLeft : placeholder_grey
    // imageRight = imageRight ? imageRight : placeholder_grey

    return (
      <div className="header-container">
        <Row className="align-items-center header-row">
          <Col md="2" className="d-none d-md-block header-col">
            {
              imageLeft &&
              <img
                className="header-image-left"
                src={imageLeft}
                align="left"
              />
            }
          </Col>
          <Col md="8" className="header-col">
            <div>
              {
                title &&
                <p className="header-title accent">
                  {/* TITLE */}
                  <b>{title}</b>

                  {/* BETA tag */}
                  {
                    beta &&
                    <sub className="header-beta-tag accent-bg">
                      <i>BETA</i>
                    </sub>
                  }
                </p>
              }
              {
                subTitle &&
                <p className="header-sub-title">
                  {/* SUB-TILTE */}
                  <b>{subTitle}</b>
                </p>
              }
            </div>
          </Col>
          <Col md="2" className="d-none d-md-block  header-col">
            {
              imageRight &&
              <img
                className="header-image-right"
                src={imageRight}
                align="right"
              />
            }
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header;
