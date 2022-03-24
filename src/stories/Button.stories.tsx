import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps, Icon } from "../components";

export default {
  title: "AdaptiveUI/Button",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  buttonType: "primary",
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  buttonType: "secondary",
};
export const TextButton = Template.bind({});
TextButton.args = {
  children: "Text",
  buttonType: "text",
};
export const ButtonWithLeftIcon = Template.bind({});
ButtonWithLeftIcon.args = {
  children: "Button",
  buttonType: "primary",
  leftIcon: <Icon icon="check" color="#fff" size={16} />,
};
export const ButtonWithRightIcon = Template.bind({});
ButtonWithRightIcon.args = {
  children: "Button",
  buttonType: "primary",
  rightIcon: <Icon icon="chevronRight" color="#fff" size={16} />,
};
export const ButtonWithBothIcon = Template.bind({});
ButtonWithBothIcon.args = {
  children: "Button",
  buttonType: "primary",
  leftIcon: <Icon icon="search" color="#fff" size={16} />,
  rightIcon: <Icon icon="chevronRight" color="#fff" size={16} />,
};
// export const TextButton = Template.bind({});
// TextButton.args = {
//   children: "Text",
//   buttonType:"text"
// };
