import { configure, addParameters } from '@storybook/react';

//add parameters
addParameters({
  options: {
    name: "SAEON Frontend NPM",
    showAddonPanel: false
  }
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
