'use strict'

import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { Drawer, Collapse } from 'antd'

import '../Shared.scss'
import './Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Panel = Collapse.Panel

class Sidebar extends React.Component {

  constructor(props) {
    super(props)

    this.renderLinks = this.renderLinks.bind(this)
    this.toggleNav = this.toggleNav.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.showContent = this.showContent.bind(this);

    this.state = { navOpen: [], width: 0, height: 0, showContent: false, contentLink: "", contentTitle: "" }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  toggleNav(key) {
    let { navOpen } = this.state

    if (navOpen.includes(key)) {
      navOpen = navOpen.filter(x => x !== key)
    }
    else {
      navOpen.push(key)
    }

    this.setState({ navOpen })
  }

  renderLinks(data, level = 0) {
    let links = []

    if (data) {
      data.forEach(x => {

        if (typeof x.children !== 'undefined') {
          links.push(
            <Panel
              key={"cat_" + x.id}
              style={{ border: 0 }}
              header={
                <div className="nav-cat-head sidebar-panel-header">
                  {x.text}
                </div>
              }
            >
              {this.renderLinks(x.children, level + 1)}
            </Panel>
          )
        }
        else {
          if (x.link) {
            links.push(
              <div key={"lnk_" + x.id} className="sidebar-link">
                <a onClick={() => { this.showContent(x.link, x.text, x.window) }}>
                  <FontAwesomeIcon icon="link" className="sidebar-link-icon" />
                  {x.text}
                </a>
              </div>
            )
          }
          else {
            links.push(
              <div key={"lnk_" + x.id} className="sidebar-unlink">
                <FontAwesomeIcon icon="unlink" className="sidebar-link-icon" />
                {x.text}
              </div>
            )
          }
        }
      })
    }

    return links
  }

  closeModal() {
    this.setState({ showContent: false, contentLink: "" })
  }

  showContent(link, title, window) {
    if (window === 'blank') {
      var win = open(link, '_blank');
      win.focus();
    }
    else {
      this.setState({ showContent: true, contentLink: link, contentTitle: title })
    }
  }

  render() {

    let { isOpen, config, toggleSidebar } = this.props
    let { width, showContent, contentLink, contentTitle } = this.state

    const sideNavWidth = width < 325 ? "100%" : 325

    return (
      <>
        <Drawer
          placement="left"
          closable={false}
          onClose={() => toggleSidebar(false)}
          visible={isOpen}
          width={sideNavWidth}
          bodyStyle={{ paddingLeft: 0, paddingRight: 0, overflowX: 'hidden' }}
        >
          {
            config.logoTop &&
            <span>
              <Row>
                <Col>
                  {/* Header image */}
                  <div className="sidebar-header">
                    {config.logoTop &&
                      <img src={config.logoTop.src} style={{ width: config.logoTop.width }} />
                    }
                  </div>
                </Col>
              </Row>
              <hr />
            </span>
          }

          {
            config.title &&
            <span>
              <Row>
                <Col>
                  {/* Header text */}
                  <h4 className="sidebar-header">
                    {config.title}
                  </h4>
                </Col>
              </Row>
              <hr />
            </span>
          }

          <Row>
            <Col>
              {/* Links */}
              <Collapse accordion bordered={false} defaultActiveKey={['cat_1']}>
                {this.renderLinks(config.nav)}
              </Collapse>
            </Col>
          </Row>

          {
            config.logoBottom &&
            <span>
              <hr />
              <Row>
                <Col>
                  {/* Footer image */}
                  <div className="text-center">
                    {config.logoBottom &&
                      <img src={config.logoBottom.src} style={{ width: config.logoBottom.width }} />
                    }
                  </div>
                </Col>
              </Row>
            </span>
          }

          <Drawer
            title={
              <a style={{ fontSize: 18, fontWeight: 500 }} onClick={() => this.closeModal()}>
                <FontAwesomeIcon icon="angle-left" size="lg" className="sidebar-link-icon" />
                <span>{contentTitle}</span>
              </a>
            }
            placement="left"
            width={width < 1250 ? "100vw" : "96vw"}
            closable={true}
            onClose={() => this.closeModal()}
            visible={showContent}
            bodyStyle={{ padding: 1, overflowX: 'hidden' }}
          >
            <iframe
              className="sidebar-content"
              id="sidenav-content"
              src={contentLink}
            />
            <Button color="" size="sm" className="sidebar-frame-closebtn accent-bg" onClick={() => this.closeModal()}>
              Close
            </Button>
          </Drawer>

          {
            isOpen &&
            <div className="sidebar-handle">
              <Button
                className="nav-close-handle accent-bg"
                onClick={() => toggleSidebar(false)}
                color=""
              >
                <FontAwesomeIcon icon="angle-left" size="lg" />
              </Button>
            </div>
          }

        </Drawer>
      </>
    )
  }

}

export default Sidebar