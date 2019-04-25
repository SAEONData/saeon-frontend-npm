import React from 'react'
import { storiesOf } from '@storybook/react'
import { State, Store } from "@sambego/storybook-state";
import { Button, Jumbotron } from 'reactstrap'
import { notification } from 'antd';
import {
  Layout,
  Header,
  Navbar,
  Footer,
  Sidebar
} from '../src/index'
import headerConfig from './config/headerConfig'
import navbarConfig from './config/navbarConfig'
import footerConfig from './config/footerConfig'
import sidebarConfig from './config/sidebarConfig'

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

let cfgNavbarConfig = _.clone(navbarConfig, true)
delete cfgNavbarConfig.sidebarToggle
let navbarNoSidebar = (
  <State store={store}>
    <Navbar config={cfgNavbarConfig} toggleSidebar={() => {}} />
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

let layoutContent = (
  <Jumbotron style={{ backgroundColor: "white", border: "1px solid gainsboro", margin: 0 }}>
    <h1 className="display-3">Hello, world!</h1>
  </Jumbotron>
)

//Stories//
storiesOf("Layout", module)
  .add("Header", () =>
    <Layout header={header}>
      {layoutContent}
    </Layout>
  )
  .add("Navbar", () =>
    <Layout navbar={navbarNoSidebar} >
      {layoutContent}
    </Layout>
  )
  .add("Navbar and sidebar", () =>
    <Layout navbar={navbar} sidebar={sidebar()} >
      {layoutContent}
    </Layout>
  )
  .add("Footer", () =>
    <Layout footer={footer} >
      {layoutContent}
    </Layout>
  )
  .add("All features", () =>
    <Layout
      header={header}
      navbar={navbar}
      footer={footer}
      sidebar={sidebar()}
    >
      {layoutContent}
    </Layout>
  )
