import { accentColor } from '../src/layout-components/Shared'

export default {
  auth: true,
  left: [
    {
      id: "btnDoSomething",
      type: "button",
      text: "Do Something",
      color: accentColor
    },
    {
      id: "btnDoSomethingElse",
      type: "button",
      text: "Do Something Else",
      color: "grey"
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
  ],
  right: []
}