import { addons } from '@storybook/addons'
import { ensure, themes } from '@storybook/theming'

addons.setConfig({
  theme: ensure(themes.dark),
})