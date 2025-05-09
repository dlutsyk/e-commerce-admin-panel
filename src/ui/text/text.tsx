import { clx } from "@utils";
import { cva } from "class-variance-authority";
import { TextProps } from "./types";

const textVariants = cva("", {
  variants: {
    size: {
      xsmall: "",
      small: "",
      base: "",
      large: "",
      xlarge: "",
    },
    weight: {
      regular: "font-normal",
      plus: "font-medium",
    },
    family: {
      sans: "font-sans",
      mono: "font-mono",
    },
    leading: {
      normal: "",
      compact: "",
    },
  },
  defaultVariants: {
    family: "sans",
    size: "base",
    weight: "regular",
    leading: "normal",
  },
  compoundVariants: [
    {
      size: "xsmall",
      leading: "normal",
      className: "txt-xsmall",
    },
    {
      size: "xsmall",
      leading: "compact",
      className: "txt-compact-xsmall",
    },
    {
      size: "small",
      leading: "normal",
      className: "txt-small",
    },
    {
      size: "small",
      leading: "compact",
      className: "txt-compact-small",
    },
    {
      size: "base",
      leading: "normal",
      className: "txt-medium",
    },
    {
      size: "base",
      leading: "compact",
      className: "txt-compact-medium",
    },
    {
      size: "large",
      leading: "normal",
      className: "txt-large",
    },
    {
      size: "large",
      leading: "compact",
      className: "txt-compact-large",
    },
    {
      size: "xlarge",
      leading: "normal",
      className: "txt-xlarge",
    },
    {
      size: "xlarge",
      leading: "compact",
      className: "txt-compact-xlarge",
    },
  ],
});

const Text = ({
  className,
  as = "p",
  size = "base",
  weight = "regular",
  family = "sans",
  leading = "normal",
  children,
  ref,
  ...props
}: TextProps) => {
  const Component = as;

  return (
    <Component
      ref={ref}
      className={clx(
        textVariants({ size, weight, family, leading }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export { Text, textVariants };
