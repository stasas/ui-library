import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  core: { disableWhatsNewNotifications: true, disableTelemetry: true },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    // "@chromatic-com/storybook", // chromatic integration
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  refs: {
    "design-system": {
      title: "McKinsey Design System",
      url: "https://master--5ccbc373887ca40020446347.chromatic.com/",
      expanded: false, // Optional, true by default,
    },
  },
};
export default config;
