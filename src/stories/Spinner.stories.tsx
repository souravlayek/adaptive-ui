import React from "react";
import { Story, Meta } from "@storybook/react";

import { Spin, SpinnerProps } from "../components";

export default {
  title: "AdaptiveUI/Spin",
  component: Spin,
  argTypes: {},
} as Meta<typeof Spin>;

const Template: Story<SpinnerProps> = (args) => <Spin {...args} />;
export const Ripple = Template.bind({});
Ripple.args = {
  type: "ripple",
};
export const CircleFlip = Template.bind({});
CircleFlip.args = {
  type: "circle-flip",
};
export const DualRing = Template.bind({});
DualRing.args = {
  type: "dual-ring",
};
export const HourGlass = Template.bind({});
HourGlass.args = {
  type: "hourglass",
};
export const WithContent = Template.bind({});
WithContent.args = {
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi
      consequatur qui dolorem, animi dolores repellendus laboriosam? Aliquam,
      soluta eos. Consectetur aspernatur laboriosam sunt similique pariatur
      sequi placeat numquam iusto?
    </p>
  ),
};
