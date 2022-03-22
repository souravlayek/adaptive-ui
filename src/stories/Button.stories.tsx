import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "../components";

export default {
  title: "AdaptiveUI/Button",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  buttonType:"primary"
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  buttonType:"secondary"
};
export const TextButton = Template.bind({});
TextButton.args = {
  children: "Text",
  buttonType:"text"
};
