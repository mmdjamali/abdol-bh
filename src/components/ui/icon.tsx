import React from "react";
import { IconKey, icons } from "@/components/icons";
import { IconBaseProps } from "react-icons";

interface IconProps extends IconBaseProps {
  name?: IconKey;
}

function Icon({ name = "Circle", ...props }: IconProps) {
  const Component = icons[name];

  return <Component {...props} />;
}

export default Icon;
