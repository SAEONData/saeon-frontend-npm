import React from 'react'
import { storiesOf } from '@storybook/react'
import { Navbar } from '../src/index'
import { notification } from 'antd';

import { accentColor } from '../src/Shared'
const _ = require('lodash')

let cfgLinksOnly = {
  left: [
    {
      type: "link",
      text: "Home",
      href: "#",
      target: "internal"
    },
    {
      type: "link",
      text: "About",
      href: "#",
      target: "internal"
    },
    {
      type: "link",
      text: "Contact",
      href: "#",
      target: "internal"
    },
  ]
}

let cfgLinksOnlyRight = _.clone(cfgLinksOnly, true)
cfgLinksOnlyRight.right = cfgLinksOnlyRight.left
delete cfgLinksOnlyRight.left

let cfgMoreLinks = {
  left: [
    {
      id: "btnDoSomething",
      type: "button",
      text: "Do Something",
      color: accentColor,
      callback: () => notification.info({ message: "You clicked 'Do Something'", duration: 2 })
    },
    {
      id: "btnDoSomethingElse",
      type: "button",
      text: "Do Something Else",
      color: "grey",
      callback: () => notification.success({ message: "You clicked 'Do Something Else'", duration: 2 })
    },
    {
      type: "link",
      text: "Internal",
      href: "#",
      target: "internal"
    },
    {
      type: "link",
      text: "External",
      href: "http://www.example.com",
      target: "external"
    },
    {
      type: "link",
      text: "Modal",
      href: "http://www.example.com",
      target: "modal"
    },
    {
      type: "dropdown",
      text: "Options",
      options: [
        {
          type: "link",
          text: "Internal",
          href: "#",
          target: "internal"
        },
        {
          type: "link",
          text: "External",
          href: "http://www.example.com",
          target: "external"
        },
        {
          type: "divider",
        },
        {
          type: "link",
          text: "Modal",
          href: "http://www.example.com",
          target: "modal"
        }
      ]
    }
  ]
}

let cfgAuthOut = _.clone(cfgLinksOnly, true)
cfgAuthOut.auth = true

let cfgAuthIn = _.clone(cfgAuthOut, true)
cfgAuthIn.user = {
  expired: false,
  profile: {
    FirstName: "Test",
    Surname: "User"
  }
}

let cfgSidebar = _.clone(cfgLinksOnly, true)
cfgSidebar.sidebarToggle = true

let cfgAll = _.clone(cfgMoreLinks, true)
cfgAll.auth = true
cfgAll.sidebarToggle = true
cfgAll.user = {
  expired: false,
  profile: {
    FirstName: "Test",
    Surname: "User"
  }
}
cfgAll.right = [
  {
    type: "link",
    text: "Internal",
    href: "#",
    target: "internal"
  },
  {
    type: "link",
    text: "External",
    href: "http://www.example.com",
    target: "external"
  },
  {
    type: "link",
    text: "Modal",
    href: "http://www.example.com",
    target: "modal"
  }
]

storiesOf("Navbar", module)
  .add("Links only (left)", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Navbar config={cfgLinksOnly} />
    </div>
  )
  .add("Links only (right)", () =>
  <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
    <Navbar config={cfgLinksOnlyRight} />
  </div>
)
  .add("Links, buttons and drop-downs", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Navbar config={cfgMoreLinks} />
    </div>
  )
  .add("With authentication (logged out)", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Navbar config={cfgAuthOut} />
    </div>
  )
  .add("With authentication (logged in)", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Navbar config={cfgAuthIn} />
    </div>
  )
  .add("With sidebar toggle", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Navbar config={cfgSidebar} />
    </div>
  )
  .add("All features", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Navbar config={cfgAll} />
    </div>
  )