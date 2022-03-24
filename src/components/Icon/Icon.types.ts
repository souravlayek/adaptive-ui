export type IconProps = {
  icon?:IconType,
  customIcon?: JSX.Element,
  color?:string,
  size?: number
}
export type IconTypeProps = {
  color?:string,
  size?: number
}

export type SvgIcon = React.ComponentType<IconProps>;



export type IconType = "leftArrow"|
"rightArrow"|
"checkCircle"|
"check"|
"chevronDown"|
"chevronLeft"|
"chevronRight"|
"chevronUp"|
"creditCard"|
"edit"|
"eyeOff"|
"eye"|
"filter"|
"heart"|
"helpCircle"|
"home"|
"info"|
"key"|
"lock"|
"mapPin"|
"minusCircle"|
"moreHorizontal"|
"paperClip"|
"plusCircle"|
"plus"|
"search"|
"settings"|
"share"|
"shoppingBag"|
"shoppingCart"|
"sliders"|
"star"|
"tag"|
"x"|
"zap"|
"checkFilled"|
"heartFilled"|
"plusCircleFilled"|
"starFilled"|
"zapFilled"
