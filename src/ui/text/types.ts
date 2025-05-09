import { textVariants } from "./Text";
import { type VariantProps } from "class-variance-authority";

export interface TextProps
  extends React.ComponentPropsWithRef<"p">,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}
