import React from "react";
import { IconProps, Icons } from ".";



const Icon: React.FC<IconProps> = ({ icon, customIcon }) => {
  const myIcons = {
    leftArrow: <Icons.LeftArrow/>,
    rightArrow: <Icons.RightArrow/>,
    checkCircle: <Icons.CheckCircle/>,
    check: <Icons.Check/>,
    chevronDown: <Icons.ChevronDown/>,
    chevronLeft: <Icons.ChevronLeft/>,
    chevronRight: <Icons.ChevronRight/>,
    chevronUp: <Icons.ChevronUp/>,
    creditCard: <Icons.CreditCard/>,
    edit: <Icons.Edit/>,
    eyeOff: <Icons.EyeOff/>,
    eye: <Icons.Eye/>,
    filter: <Icons.Filter/>,
    heart: <Icons.Heart/>,
    helpCircle: <Icons.HelpCircle/>,
    home: <Icons.Home/>,
    info: <Icons.Info/>,
    key: <Icons.Key/>,
    lock: <Icons.Lock/>,
    mapPin: <Icons.MapPin/>,
    minusCircle: <Icons.MinusCircle/>,
    moreHorizontal: <Icons.MoreHorizontal/>,
    paperClip: <Icons.PaperClip/>,
    plusCircle: <Icons.PlusCircle/>,
    plus: <Icons.Plus/>,
    search: <Icons.Search/>,
    settings: <Icons.Settings/>,
    share: <Icons.Share/>,
    shoppingBag: <Icons.ShoppingBag/>,
    shoppingCart: <Icons.ShoppingCart/>,
    sliders: <Icons.Sliders/>,
    star: <Icons.Star/>,
    tag: <Icons.Tag/>,
    x: <Icons.X/>,
    zap: <Icons.Zap/>,
    checkFilled: <Icons.CheckFilled/>,
    heartFilled: <Icons.HeartFilled/>,
    plusCircleFilled: <Icons.PlusCircleFilled/>,
    starFilled: <Icons.StarFilled/>,
    zapFilled: <Icons.ZapFilled/>,
  };
  if (customIcon) {
    return <>{customIcon}</>;
  }
  if (!icon) {
    throw new Error(
      "There is no Icon or custom Icon provided please provide one"
    );
  }

  return (
    <div>
      {myIcons[icon]}
    </div>
  );
};

export default Icon;
