import { StoryObj, Meta } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "Fusion/Components/Input",
  component: Input,
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Default theme",
    theme: "primary",
  },
};
