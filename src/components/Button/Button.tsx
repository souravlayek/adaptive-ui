import React from "react";
import { ButtonProps, ButtonType } from "./Button.types";
import clsx from "clsx";
import { Spin } from "../Spin";
import "./button.css";

const getStyle = (buttonType: ButtonType) => {
  switch (buttonType) {
    case "primary":
      return "primary";
    case "secondary":
      return "secondary";
    case "text":
      return "text";
    default:
      return "";
  }
};
const BaseButton: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      isLoading,
      disabled,
      buttonType,
      children,
      leftIcon,
      rightIcon,
      ...props
    },
    ref: any
  ) => (
    <button
      ref={ref}
      disabled={isLoading || disabled}
      className={clsx([
        "adaptiveButton",
        getStyle(buttonType),
        leftIcon || rightIcon ? "with-icon" : "",
      ])}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  )
);
const Button: React.FC<ButtonProps> = (props) => {
  const { isLoading } = props;
  if (isLoading) {
    return (
      <Spin isSpinning={isLoading}>
        <BaseButton {...props} />
      </Spin>
    );
  }
  return <BaseButton {...props} />;
};

export default Button;

Button.defaultProps = {
  isLoading: false,
  disabled: false,
  buttonType: "primary",
};
