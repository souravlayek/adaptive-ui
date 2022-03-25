import {ButtonHTMLAttributes} from "react";

export type ButtonType = "primary" | "secondary" | "text"

export type ButtonProps = {
  isLoading?: boolean,
  buttonType: ButtonType,
  leftIcon?: JSX.Element,
  rightIcon?: JSX.Element
} & ButtonHTMLAttributes<HTMLButtonElement>
