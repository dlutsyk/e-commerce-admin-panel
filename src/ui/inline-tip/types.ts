import { borderVariants, tagVariants } from "./inline-tip";
import { type VariantProps } from "class-variance-authority";

export interface InlineTipProps
  extends React.ComponentPropsWithRef<"div">,
    VariantProps<typeof borderVariants>,
    VariantProps<typeof tagVariants> {
  label?: string;
}
