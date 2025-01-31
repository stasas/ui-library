import { StoryObj, Meta } from "@storybook/react";
import SmartRating from "./SmartRating";

const meta = {
  title: "Core/Components/Rating",
  component: SmartRating,
} as Meta<typeof SmartRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RatingTest: Story = {
  args: {
    title: "Default theme",
    theme: "primary",
    testIdPrefix: "rating",
  },
};

export const RatingSecondary: Story = {
  args: {
    title: "Secondary theme",
    theme: "secondary",
    testIdPrefix: "rating",
  },
};
