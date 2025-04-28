import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./Button";

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.ComponentPropsWithRef<"button">,
    ButtonVariantsProps {
  isLoading?: boolean;
  asChild?: boolean;
}
