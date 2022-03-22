import React from "react";
import "./spin.css";
import { SpinnerProps, SpinnerType } from "./Spin.types";

const getSpinnerClass = (type: SpinnerType | undefined): string => {
  switch (type) {
    case "circle-flip":
      return "circle-flip";
    case "dual-ring":
      return "dual-ring";
    case "hourglass":
      return "hourglass";
    case "ripple":
      return "ripple";
    default:
      return "";
  }
};

const BaseSpinner = ({type, size, color}:SpinnerProps) => {
  const className = getSpinnerClass(type);
  if(type === "hourglass") {
    document.documentElement.style.setProperty("--hour-glass-border", `${(size as number / 2)}px`)
  }
  if(color) {
    document.documentElement.style.setProperty("--spinner-color", color)
  }
  return (<div
  className="spinner-wrapper"
  style={{
    width: size,
    height: size,
  }}
>
  <div
    style={{
      width: (size as number) / 2,
      height: (size as number) / 2,
    }}
    className="spinner-root"
  >
    <div className={className}/>
  </div>
</div>)}

const Spin: React.FC<SpinnerProps> = (props) => {
  const { type, size, isSpinning, children } = props;
  if(!isSpinning) {
    return <>{children}</>
  }
  if(isSpinning && children) {
    return (
      <>
      <div className="spinner-content">
        {children}
        <div className="spinner-top-wrapper">
          <BaseSpinner type={type} size={size} />
        </div>
      </div>
      </>
    )
  }
  return (
    <BaseSpinner {...props} />
  );
};

export default Spin;
Spin.defaultProps = {
  type: "ripple",
  size: 30,
  isSpinning: true,
};
