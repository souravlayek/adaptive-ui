import React from "react";
import { Story, Meta } from "@storybook/react";

import { Icon, IconProps } from "../components";

export default {
  title: "AdaptiveUI/Iconography",
  component: Icon,
  argTypes: {},
} as Meta<typeof Icon>;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const BaseIcon = Template.bind({});
BaseIcon.args = {
  icon:"leftArrow"
};
