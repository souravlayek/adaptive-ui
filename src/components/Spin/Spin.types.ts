export type SpinnerType = "circle-flip" | "dual-ring" | "ripple" | "hourglass"
export type SpinnerProps = {
  type?: SpinnerType,
  size?: number,
  isSpinning?: boolean,
  color?: string,
}
