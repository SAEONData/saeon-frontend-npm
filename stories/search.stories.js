import React from 'react'
import { storiesOf } from '@storybook/react'
import { GlossarySearch } from '../src/index'

// let data = require("./config/glossary_terms.json")
import data from "./config/glossary_terms.json"

storiesOf("Search", module)
  .add("Glossary Search", () =>
    <GlossarySearch data={data} />
  )

