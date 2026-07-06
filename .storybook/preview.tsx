import type { Preview } from '@storybook/react-vite';

import '../src/styles/fonts.css';
import '../src/styles/tokens.css';
import '../src/styles/component-tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },
};

export default preview;