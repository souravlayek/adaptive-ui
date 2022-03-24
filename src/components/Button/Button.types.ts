import {ButtonHTMLAttributes} from "react";
import {SvgIcon} from "../Icon"

export type ButtonType = "primary" | "secondary" | "text"

export type ButtonProps = {
  isLoading?: boolean,
  buttonType: ButtonType,
  leftIcon?: SvgIcon,
  rightIcon?: SvgIcon
} & ButtonHTMLAttributes<HTMLButtonElement>
