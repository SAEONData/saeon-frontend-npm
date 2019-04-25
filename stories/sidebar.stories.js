import React from 'react'
import { storiesOf } from '@storybook/react'
import { State, Store } from "@sambego/storybook-state";
import { Button } from 'reactstrap'
import { Sidebar } from '../src/index'

import imgPlaceholder from '../images/placeholder-grey.png'
const _ = require('lodash')

//Store//
let store = new Store({
  sidebarOpen: false
});

let cfgLinksOnly = {
  nav: [
    {
      text: "Section 1",
      children: [
        { window: "internal", text: "Internal Link", link: "test" },
        { window: "modal", text: "Modal Link", link: "http://www.example.com" },
        { window: "external", text: "External Link", link: "http://www.example.com" },
        { text: "No Link" }
      ]
    },
    {
      text: "Section 2",
      children: [
        { window: "modal", text: "Modal Link", link: "http://www.example.com" },
        { window: "modal", text: "Modal Link", link: "http://www.example.com" }
      ]
    }
  ]
}

let cfgTitle = _.clone(cfgLinksOnly, true)
cfgTitle.title = "Document Links"

let cgfTopImg = _.clone(cfgLinksOnly, true)
cgfTopImg.logoTop = { src: imgPlaceholder, width: "50%" }

let cgfBottomImg = _.clone(cfgLinksOnly, true)
cgfBottomImg.logoBottom = { src: imgPlaceholder, width: "50%" }

let sidebar = (config) => (
  <Sidebar
    isOpen={true}
    config={config}
    toggleSidebar={() => { }}
  />
)

let cfgAll = _.clone(cfgLinksOnly, true)
cfgAll.title = "Document Links"
cfgAll.logoTop = { src: imgPlaceholder, width: "40%" }
cfgAll.logoBottom = { src: imgPlaceholder, width: "60%" }

let sidebarWithState = (
  <State store={store}>
    {
      state =>
        <div>
          <Button className="accent-bg" color="" style={{ margin: 15 }}
            onClick={() => store.set({ sidebarOpen: true })}>
            Show sidebar
            </Button>
          <Sidebar
            isOpen={state.sidebarOpen}
            config={cfgLinksOnly}
            toggleSidebar={(sidebarOpen) => {
              store.set({ sidebarOpen })
            }}
          />
        </div>
    }
  </State>
)

storiesOf("Sidebar", module)
  .add("Links only", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      {sidebar(cfgLinksOnly)}
    </div>
  )
  .add("With toggle", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      {sidebarWithState}
    </div>
  )
  .add("With title", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      {sidebar(cfgTitle)}
    </div>
  )
  .add("With top image", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      {sidebar(cgfTopImg)}
    </div>
  )
  .add("With bottom image", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      {sidebar(cgfBottomImg)}
    </div>
  )
  .add("All features", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      {sidebar(cfgAll)}
    </div>
  )