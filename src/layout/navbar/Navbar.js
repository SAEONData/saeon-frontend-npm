import React from 'react';
import {
  Collapse,
  Navbar as RSNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import '../Shared.scss'
import './Navbar.scss'
import 'open-iconic/font/css/open-iconic-bootstrap.scss'

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this)

    this.state = {
      isOpen: false,
      showModal: false,
      modalHeader: "",
      modalSrc: "",
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleModal(state, header = "", src = "") {
    this.setState({
      showModal: state,
      modalHeader: header,
      modalSrc: src
    })
  }

  renderOptions(options) {
    return options.map(option => {

      let index = options.indexOf(option) + 1

      if (option.type === "divider") {
        return <DropdownItem className="navbar-dropdown-divider" key={`divider_${index}`} divider />
      }
      else if (option.type === "link") {
        return (
          <DropdownItem key={`dropdown_${index}`}>
            {
              option.target === "modal" &&
              <NavLink className="navbar-dropdown-link">
                <span onClick={() => this.toggleModal(true, option.text, option.href)}>
                  {option.text}
                </span>
              </NavLink>
            }
            {
              option.target === "external" &&
              <NavLink className="navbar-dropdown-link" href={option.href} target={option.target}>
                {option.text}
              </NavLink>
            }
            {
              option.target === "internal" &&
              <NavLink className="navbar-dropdown-link" href={option.href}>
                {option.text}
              </NavLink>
            }
          </DropdownItem>
        )
      }
    })
  }

  renderNavs(config) {

    let namedColors = ["primary", "secondary", "success", "info", "warning", "danger"]

    if (config) {
      return config.map(navItem => {

        let index = config.indexOf(navItem) + 1

        switch (navItem.type) {
          case "button": {
            return (
              <NavItem key={`navItem_${index}`}>
                <Button
                  className="navbar-button"
                  color={namedColors.includes(navItem.color) ? navItem.color : ""}
                  size="sm"
                  style={{
                    backgroundColor: !namedColors.includes(navItem.color) ? navItem.color : ""
                  }}
                  onClick={navItem.callback ? () => navItem.callback() : null}
                >
                  {navItem.text}
                </Button>
              </NavItem>
            )
          }
          case "link": {
            return (
              <NavItem key={`navItem_${index}`}>
                {
                  navItem.target === "modal" &&
                  <NavLink>
                    <span onClick={() => this.toggleModal(true, navItem.text, navItem.href)}>
                      {navItem.text}
                    </span>
                  </NavLink>
                }
                {
                  navItem.target === "external" &&
                  <NavLink href={navItem.href} target={navItem.target}>
                    {navItem.text}
                  </NavLink>
                }
                {
                  navItem.target === "internal" &&
                  <NavLink href={navItem.href}>
                    {navItem.text}
                  </NavLink>
                }
              </NavItem>
            )
          }
          case "dropdown": {
            return (
              <UncontrolledDropdown key={`navItem_${index}`} nav inNavbar>
                <DropdownToggle nav caret>
                  {navItem.text}
                </DropdownToggle>
                <DropdownMenu>
                  {this.renderOptions(navItem.options)}
                </DropdownMenu>
              </UncontrolledDropdown>
            )
          }
        }
      })
    }
  }

  getAuthLinks(auth, user) {

    if (auth) {
      let authItems = []

      if (user && !user.expired) {

        {/* Username */ }
        authItems.push(
          <NavItem>
            <NavLink>
              <span className="oi oi-person navbar-user-icon accent-bg"></span>
              <span className="navbar-user-name accent">
                {user.profile.FirstName} {user.profile.Surname}
              </span>
            </NavLink>
          </NavItem>
        )

        authItems.push(
          <NavItem key="authLogout">
            <NavLink href="logout">
              Logout
            </NavLink>
          </NavItem>
        )
      }
      else {
        authItems.push(
          <NavItem key="authLogin">
            <NavLink href="login">
              Login
            </NavLink>
          </NavItem>
        )

        authItems.push(
          <NavItem key="authRegister">
            <NavLink href="register">
              Register
            </NavLink>
          </NavItem>
        )
      }

      return authItems
    }
  }

  render() {

    let { showModal, modalHeader, modalSrc } = this.state
    let { config, toggleSidebar, user } = this.props

    return (
      <div className="navbar-container">
        <RSNavbar color="white" light expand="md" style={{ padding: 0 }}>
          <NavbarBrand>
            <span
              className="oi oi-chevron-right sidebar-button accent-bg"
              title="Toggle side-bar"
              aria-hidden="true"
              onClick={toggleSidebar ? () => toggleSidebar() : null}
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {
              (config && config.left) &&
              <Nav className="mr-auto" navbar>
                {this.renderNavs(config.left)}
              </Nav>
            }
            {
              (config && config.right) &&
              <Nav className="ml-auto" navbar>
                {this.renderNavs(config.right)}
                {this.getAuthLinks(config.auth, user)}
              </Nav>
            }
          </Collapse>
        </RSNavbar>

        <Modal isOpen={showModal} toggle={() => this.toggleModal(false)} size="lg" style={{ width: "95%" }} >
          <ModalHeader toggle={() => this.toggleModal(false)}>{modalHeader}</ModalHeader>
          <ModalBody>
            <iframe className="footer-modal-iframe" src={modalSrc} />
          </ModalBody>
          <ModalFooter>
            <Button className="accent-bg navbar-modal-close-button" size="sm" color="" onClick={() => this.toggleModal(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Navbar;
