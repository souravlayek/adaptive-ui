import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import {Button} from "../components";

describe("Running Test for Marbella Button", () => {

  test("Check Button Disabled", () => {
    render(<Button buttonType="primary" disabled>Button marbella</Button>);
    expect(screen.getByRole('button',{name:"Button marbella"})).toBeDisabled();
  });
  test("Check Button Disabled While Loading", () => {
    render(<Button buttonType="primary" isLoading>Button marbella</Button>);
    expect(screen.getByRole('button',{name:"Button marbella"})).toBeDisabled();
  });

})
