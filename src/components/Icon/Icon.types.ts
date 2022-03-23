import React from "react"
declare type Icons = typeof import("./index").Icons

export type IconProps = {
  icon:IconType
}
export type IconTypeProps = {
  color?:string,
  size?: number
}


export type IconType =  Icons
