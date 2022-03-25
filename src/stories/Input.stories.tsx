import React from "react";
import { Story, Meta } from "@storybook/react";

import { Input, InputProps, Icon } from "../components";

export default {
  title: "AdaptiveUI/Input",
  component: Input,
  argTypes: {},
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const BaseInput = Template.bind({});
BaseInput.args = {
};
