import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Introduction",
          "Getting Started",
          "Design System",
          "Core",
          ["Intro", "*"],
          "Fusion",
          ["Intro", "*", "Components"],
          "*",
        ],
      },
    },
  },
};

export default preview;
