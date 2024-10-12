import { fn, style } from "@storybook/test";

import Button from "../Button";

export default {
  title: "Example/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    style: {},
    onClick: fn(),
  },
};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const PrimaryButton = {};
