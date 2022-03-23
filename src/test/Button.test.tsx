import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import {Button} from "../components";

describe("Running Test for Adaptive UI Button", () => {
  test("Check Button Disabled", () => {
    render(<Button buttonType="primary" disabled>Button</Button>);
    expect(screen.getByRole('button',{name:"Button"})).toBeDisabled();
  });
  test("Check Button Disabled While Loading", () => {
    render(<Button buttonType="primary" isLoading>Button</Button>);
    expect(screen.getByRole('button',{name:"Button"})).toBeDisabled();
  });
  test("Check spinner running While Loading", () => {
    render(<Button buttonType="primary" isLoading>Button</Button>);
    expect(screen.getByTestId("spinner").children).toContain(screen.getByRole("button"));
  });
})
