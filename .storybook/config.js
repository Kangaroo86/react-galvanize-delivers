import { configure } from '@storybook/react';
function loadStories() {
  require('../src/index.css');
  require('../src/components/MenuItemComponent.story.js');
  require('../src/components/MenuComponent.story.js');
  require('../src/components/OrderTableComponent.story.js'); //done
  require('../src/components/OrderFormComponent.story.js');
  require('../src/components/OrderPageLayout.story.js');
  // Require your stories here...
}
configure(loadStories, module);
