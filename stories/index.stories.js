import React from 'react'
import { storiesOf } from '@storybook/react'
import { State, Store } from "@sambego/storybook-state";
import { Row, Col, Jumbotron, Button } from 'reactstrap'
import { notification } from 'antd';
import {
  SearchExample,
  Layout,
  Header,
  Navbar,
  Footer,
  Sidebar
} from '../src/index'
import './styles.scss'
import headerConfig from './headerConfig'
import navbarConfig from './navbarConfig'
import footerConfig from './footerConfig'
import sidebarConfig from './sidebarConfig'

//Inject button callback into 'navbarConfig'
if (navbarConfig && navbarConfig.left) {
  let items = navbarConfig.left.filter(x => x.id === "btnDoSomething")
  if (items.length > 0) {
    items[0].callback = () => notification.info({ message: "You clicked 'Do Something'", duration: 2 })
  }

  items = navbarConfig.left.filter(x => x.id === "btnDoSomethingElse")
  if (items.length > 0) {
    items[0].callback = () => notification.success({ message: "You clicked 'Do Something Else'", duration: 2 })
  }
}

//Inject user into navbarConfig
if (navbarConfig) {
  //User
  let user = {
    expired: false,
    profile: {
      FirstName: "Test",
      Surname: "User"
    }
  }

  //Inject
  navbarConfig.user = user
}

//Store//
let store = new Store({
  sidebarOpen: false
});

//Components//
let header = <Header config={headerConfig} />

let navbar = (
  <State store={store}>
    <Navbar config={navbarConfig} toggleSidebar={() => store.set({ sidebarOpen: true })} />
  </State>
)

let footer = <Footer config={footerConfig} />

let sidebar = (button) => {
  return (
    <State store={store}>
      {
        state =>
          <div>
            {
              button &&
              <Button className="accent-bg stories-sidebar-button" color=""
                onClick={() => store.set({ sidebarOpen: true })}>
                Show sidebar
            </Button>
            }
            <Sidebar
              isOpen={state.sidebarOpen}
              config={sidebarConfig}
              toggleSidebar={(sidebarOpen) => {
                store.set({ sidebarOpen })
              }}
            />
          </div>
      }
    </State>
  )
}

//Stories//
storiesOf("Layout Components", module)
  .add("Header", () => header)
  .add("Navbar", () => navbar)
  .add("Sidebar", () => sidebar(true))
  .add("Footer", () => footer)
  .add("Layout", () =>
    <Layout
      header={header}
      navbar={navbar}
      footer={footer}
      sidebar={sidebar()}
    >
      <Jumbotron style={{ backgroundColor: "white", border: "1px solid gainsboro" }}>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      </Jumbotron>
    </Layout>
  )

storiesOf("Examples", module)
  .add("Search Example", () =>
    <Row>
      <Col md={{ size: 6, offset: 3 }} style={{ marginTop: "35vh" }}>
        <SearchExample />
      </Col>
    </Row>
  )
