import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary",
  icon: "cross",
  iconPosition: "left",
  disabled: false,
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  variant: "primary",
  children: "Primary",
  isLoading: true,
  disabled: false,
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  variant: "primary",
  icon: "cross",
  iconPosition: "left",
  disabled: false,
};

export const ButtonWithTextAndIconLeft = Template.bind({});
ButtonWithTextAndIconLeft.args = {
  variant: "primary",
  icon: "cross",
  iconPosition: "left",
  children: "Icon Left",
  disabled: false,
};

export const ButtonWithTextAndIconRight = Template.bind({});
ButtonWithTextAndIconRight.args = {
  variant: "primary",
  icon: "cross",
  iconPosition: "right",
  children: "Icon Right",
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
  disabled: false,
};

export const Light = Template.bind({});
Light.args = {
  variant: "light",
  children: "Light",
  disabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  children: "Danger",
  disabled: false,
};

export const Clear = Template.bind({});
Clear.args = {
  variant: "clear",
  children: "No Stroke",
  disabled: false,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  variant: "primaryDark",
  children: "primaryDark",
  disabled: false,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  variant: "primaryDark",
  children: "primaryDark",
  disabled: false,
};

export const Highlight = Template.bind({});
Highlight.args = {
  variant: "highlight",
  icon: "aiStars",
  iconPosition: "left",
  disabled: false,
  isLoading: false,
  children: "AI Assist",
};
