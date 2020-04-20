import React from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-boundary.styles";

const ErrorPrompt = () => (
  <ErrorImageOverlay>
    <ErrorImageContainer imageUrl="https://i.imgur.com/Q2BAOd2.png" />
    <ErrorImageText>Woops! Looks like you're lost.</ErrorImageText>
  </ErrorImageOverlay>
);

export default ErrorPrompt;
