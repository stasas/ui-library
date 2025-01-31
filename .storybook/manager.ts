import { addons } from "@storybook/manager-api";
import VelocityTheme from "./theme";

addons.setConfig({
  theme: VelocityTheme,
});

// https://storybook.js.org/docs/configure/user-interface/theming
