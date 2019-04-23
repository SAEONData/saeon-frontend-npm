import React, { Component } from 'react';
import { Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

import '../Shared.scss'
import './Footer.scss'

class Footer extends Component {

  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this)
    this.renderLinks = this.renderLinks.bind(this)

    this.state = {
      showModal: false,
      modalHeader: "",
      modalSrc: "",
    }
  }

  toggleModal(state, header = "", src = "") {
    this.setState({
      showModal: state,
      modalHeader: header,
      modalSrc: src
    })
  }

  renderSections(data) {
    let sections = []

    for (let i = 0; i < 4; i++) {
      let section = data.sections[i]
      sections.push(
        <Col key={`section_${i + 1}`} md="3">
          <p className="footer-section-header">{section.text}</p>
          {this.renderLinks(section)}
        </Col>
      )
    }

    return sections
  }

  renderLinks(section) {
    let links = []

    for (let i = 0; i < section.links.length; i++) {

      let link = section.links[i]
      if (link.text) {
        links.push(
          <div
            key={`link_${i + 1}`}
            style={{
              cursor: link.link ? "pointer" : "default",
              fontWeight: link.link ? "400" : "regular",
              textDecoration: link.link ? "underline" : "",
              marginBottom: 5
            }}
            onClick={() => {
              if (link.link) {
                this.toggleModal(true, link.text, link.link)
              }
            }}>
            {link.text}
          </div>
        )
      }
      else if (link.src) {
        links.push(
          <img
            key={`link_${i + 1}`}
            src={link.src}
            style={{
              width: link.width,
              cursor: link.link ? "pointer" : "default"
            }} 
            onClick={() => {
              if (link.link) {
                this.toggleModal(true, link.linkText, link.link)
              }
            }}/>
        )
      }
    }

    return links
  }


  render() {
    let { showModal, modalHeader, modalSrc } = this.state
    let { config } = this.props

    return (
      <div>
        <Row className="footer-row-top">
          {this.renderSections(config)}
        </Row>

        <Row className="footer-row-bottom accent-bg">
          <Col md="12">
            Created by
            <a className="footer-link2" href="http://www.saeon.ac.za" target="saeon">
              SAEON
            </a>
            using
            <a className="footer-link" href="https://reactjs.org/" target="react">
              React
            </a>
            ,
            <a className="footer-link" href="https://mdbootstrap.com/react" target="mdb">
              MDBootstrap
            </a>
            ,
            <a className="footer-link" href="https://reactstrap.github.io/" target="reactstrap">
              ReactStrap
            </a>
            ,
            <a className="footer-link2" href="https://ant.design/" target="antdesign">
              Ant.Design
            </a>
            and SAEON Open Data Platform APIs.
            <br />
            Copyright &copy; {(new Date().getFullYear())}
          </Col>
        </Row>

        <Modal isOpen={showModal} toggle={() => this.toggleModal(false)} size="lg" style={{ width: "95%" }} >
          <ModalHeader toggle={() => this.toggleModal(false)}>{modalHeader}</ModalHeader>
          <ModalBody>
            <iframe className="footer-modal-iframe" src={modalSrc} />
          </ModalBody>
          <ModalFooter>
            <Button className="accent-bg footer-modal-close-button" size="sm" color="" onClick={() => this.toggleModal(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Footer;