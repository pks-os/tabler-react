// @flow

import * as React from "react";
import cn from "classnames";
import TextSmall from "./TextSmall.react";

type AlignProps = {|
  +align?: "left" | "center" | "right" | "justify",
  +left?: boolean,
  +center?: boolean,
  +right?: boolean,
  +justify?: boolean,
|};

type TransformProps = {|
  +transform?: "lowercase" | "uppercase" | "capitalize",
  +lowercase?: boolean,
  +uppercase?: boolean,
  +capitalize?: boolean,
|};

type TextProps = {|
  +children?: React.Node,
  +className?: string,
  +RootComponent?: React.ElementType,
  +color?: string,
  +size?: string,
  +wrap?: boolean,
  +muted?: boolean,
  ...AlignProps,
  ...TransformProps,
|};

const Text = ({
  className,
  children,
  RootComponent,
  color = "",
  size = "",
  wrap,
  muted,
  ...props
}: TextProps): React.Node => {
  const { align: alignFromProps, left, center, right, justify } = props;
  const align =
    alignFromProps ||
    (left && "left") ||
    (center && "center") ||
    (right && "right") ||
    (justify && "justify") ||
    "";

  console.log(align);

  const {
    transform: transformFromProps,
    lowercase,
    uppercase,
    capitalize,
  } = props;
  const transform =
    transformFromProps ||
    (lowercase && "lowercase") ||
    (uppercase && "uppercase") ||
    (capitalize && "capitalize") ||
    "";

  const classes = cn(
    {
      [`text-wrap p-lg-6`]: wrap,
      [`text-${color}`]: color,
      [`${size}`]: size,
      "text-muted": muted,
      [`text-${align}`]: align,
      [`text-${transform}`]: transform,
    },
    className
  );
  const Component = RootComponent || "p";
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

Text.displayName = "Text";

Text.Small = TextSmall;

export default Text;
