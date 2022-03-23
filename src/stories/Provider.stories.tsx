import React from "react";
import { Story, Meta } from "@storybook/react";

import { AdaptiveUIProvider, Button, ProviderProps } from "../components";

export default {
  title: "AdaptiveUI/Provider",
  component: AdaptiveUIProvider,
  argTypes: {},
} as Meta<typeof AdaptiveUIProvider>;

const Template: Story<ProviderProps> = (args) => <AdaptiveUIProvider {...args} />;
export const ButtonWithProvider = Template.bind({});
ButtonWithProvider.args = {
  children: (<>
  <Button buttonType="primary">My Button</Button>
  <Button buttonType="secondary">My Button</Button>
  </>),
};
