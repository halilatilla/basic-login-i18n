import React from "react";
import "../styles/index.scss";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { AuthProvider } from "../stores";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [
  (Story) => (
    <AuthProvider>
      <Story />
    </AuthProvider>
  ),
];
