/** @type { import('@storybook/web-components').Preview } */
import { ensure, themes } from '@storybook/theming';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  docs: {
    theme: ensure(themes.dark),
  }
};

export default preview;
