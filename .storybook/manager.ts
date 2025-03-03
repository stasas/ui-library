import { addons } from "@storybook/manager-api";
import TESTTheme from "./theme";

addons.setConfig({
  theme: TESTTheme,
});

// https://storybook.js.org/docs/configure/user-interface/theming
