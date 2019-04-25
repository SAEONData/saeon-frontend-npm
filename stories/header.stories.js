import React from 'react'
import { storiesOf } from '@storybook/react'
import { Header } from '../src/index'

import imgPlaceholder from '../images/placeholder-grey.png'
const _ = require('lodash')

let cfgTitleOnly = {
  title: "This Is A Title"
}

let cfgBetaTag = _.clone(cfgTitleOnly, true)
cfgBetaTag.beta = true;

let cfgSubTitle = _.clone(cfgTitleOnly, true)
cfgSubTitle.subTitle = "This is a subtitle";

let cfgImgLeft = _.clone(cfgSubTitle, true)
cfgImgLeft.imageLeft = imgPlaceholder

let cfgImgRight = _.clone(cfgSubTitle, true)
cfgImgRight.imageRight = imgPlaceholder

let cfgAll = _.clone(cfgImgLeft, true)
cfgAll.imageRight = imgPlaceholder
cfgAll.beta = true;

storiesOf("Header", module)
  .add("Title only", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Header config={cfgTitleOnly} />
    </div>
  )
  .add("Title with beta tag", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Header config={cfgBetaTag} />
    </div>
  )
  .add("Title with subtitle", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Header config={cfgSubTitle} />
    </div>
  )
  .add("Title with image left", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Header config={cfgImgLeft} />
    </div>
  )
  .add("Title with image right", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Header config={cfgImgRight} />
    </div>
  )
  .add("All features", () =>
    <div style={{ backgroundColor: "gainsboro", height: "100vh" }}>
      <Header config={cfgAll} />
    </div>
  )