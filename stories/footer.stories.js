import React from 'react'
import { storiesOf } from '@storybook/react'
import { Footer } from '../src/index'

import imgPlaceholder from '../images/placeholder-grey.png'
const _ = require('lodash')

let textSection = {
  text: "Text-Section",
  links: [
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..." },
  ]
}

let textSectionAlt = {
  text: "Text-Section",
  links: [
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..." },
  ]
}

let linksSection = {
  text: "Links-Section",
  links: [
    { text: "Link", link: "http://www.example.com" },
    { text: "Link", link: "http://www.example.com" },
    { text: "Link", link: "http://www.example.com" }
  ]
}

let imageSection = {
  text: "Image-Section",
  links: [
    { src: imgPlaceholder, width: "100%", link: "http://www.example.com", linkText: "Example" }
  ]
}

let imageSectionAlt = {
  text: "Image-Section",
  links: [
    { src: imgPlaceholder, width: "50%", link: "http://www.example.com", linkText: "Example" }
  ]
}

let cfgOneSection = {
  sections: [
    textSection
  ]
}

let cfgTwoSections = {}
cfgTwoSections.sections = _.clone(cfgOneSection.sections, true)
cfgTwoSections.sections.push(linksSection)

let cfgFourSections = {
  sections: [
    linksSection,
    linksSection,
    linksSection,
    linksSection
  ]
}

let cfgImageSection = {
  sections: [
    textSection,
    {},
    {},
    imageSection
  ]
}

let cfgImageSectionLeft = {
  sections: [
    imageSectionAlt,
    linksSection,
    linksSection,
    textSectionAlt
  ]
}

let cfgAll = {
  sections: [
    textSectionAlt,
    linksSection,
    linksSection,
    imageSection
  ]
}

storiesOf("Footer", module)
  .add("No config", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Footer />
    </div>
  )
  .add("One section with text only", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Footer config={cfgOneSection} />
    </div>
  )
  .add("Two section with text and links", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Footer config={cfgTwoSections} />
    </div>
  )
  .add("Four sections with links", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Footer config={cfgFourSections} />
    </div>
  )
  .add("Section with image (right)", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Footer config={cfgImageSection} />
    </div>
  )
  .add("Section with image (left)", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Footer config={cfgImageSectionLeft} />
    </div>
  ).add("All features", () =>
  <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
    <Footer config={cfgAll} />
  </div>
)