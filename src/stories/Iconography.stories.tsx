import React from "react";
import { Story, Meta } from "@storybook/react";

import { Icon, IconProps } from "../components";

export default {
  title: "AdaptiveUI/Iconography",
  component: Icon,
  argTypes: {
    customIcon: {
      control: { type: "text" },
    },
    size: {
      control: { type: "number" },
    },
    color: {
      control: { type: "color" },
    },
  },
} as Meta<typeof Icon>;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const BaseIcon = Template.bind({});
BaseIcon.args = {
  icon: "leftArrow",
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  customIcon: (
    <svg width={20} height={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.422 10.723h-1.35v3.807h2.458v-4.048h2.94v4.337h-1.35v1.35h-1.349v2.458h2.458v-2.7h2.699v-5.204h-1.35v-1.35H9.422zm1.35 11.952h2.457v-2.458H10.77v2.458zm-2.676-20H6.747v1.35h-1.35v1.348H4.049v1.35h-1.35v6.699H1.35v1.35H0v2.457h1.35v1.35h1.349v1.349h2.458v-7.856h-1.35v-4.24h1.35v-1.35h1.349v-1.35h1.35V3.784h8.289v1.35h1.349v1.349h1.35v1.35h1.349v4.24h-1.35v7.856h2.458v-1.35h1.35v-1.35H24v-2.457h-1.35v-1.35h-1.349V6.724h-1.35v-1.35h-1.349V4.024h-1.349v-1.35h-1.35V1.326H8.097v1.35Z" />
    </svg>

  ),
};
