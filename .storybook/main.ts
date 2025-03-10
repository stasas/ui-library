import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  core: { disableWhatsNewNotifications: true, disableTelemetry: true },
  stories: [
    "../packages/ui-core/src/**/*.mdx",
    "../packages/ui-core/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-designs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  refs: {
    "design-system": {
      title: "TEST LINK Design System",
      url: "https://master--5ccbc373887ca40020446347.chromatic.com/",
      expanded: false, // Optional, true by default,
    },
  },
};
export default config;
