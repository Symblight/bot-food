import { configure, addDecorator, addParameters  } from '@storybook/react';

import "src/webroot/global-styles/style.less"

const modalRoot = document.createElement('div');

modalRoot.setAttribute('id', 'modal-root');

document.body.append(modalRoot);

const CenterDecorator = (storyFn) => storyFn()

addDecorator(CenterDecorator)

addParameters({
  options: {
    name: "Delivery-food-bot",
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: true,
    addonPanelInRight: false,
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/ui/', true, /\.story\.(tsx|mdx)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);