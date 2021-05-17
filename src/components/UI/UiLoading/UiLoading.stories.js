import UiLoading from "./UiLoading";

export default {
  title: "Ui-Kit/UiLoadingn",
  component: UiLoading,
};

const Template = (args) => <UiLoading {...args} />;

const props = {
  isShadow: false,
  theme: "red",
  classes: "",
};

export const Red = Template.bind({});

Red.args = {
  ...props,
  theme: "red",
};

export const Blue = Template.bind({});

Blue.args = {
  ...props,
  theme: "blue",
};

export const White = Template.bind({});

White.args = {
  ...props,
  isShadow: true,
  theme: "white",
};
