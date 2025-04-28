import { clx } from "@utils";
import { cva } from "class-variance-authority";
import { ButtonProps } from "./types";
import { Spinner } from "@ui/icons";

const baseButtonStyles = clx(
  "transition-fg relative inline-flex w-fit items-center justify-center overflow-hidden rounded-md outline-none",
  "disabled:bg-ui-bg-disabled disabled:border-ui-border-base disabled:text-ui-fg-disabled disabled:shadow-buttons-neutral disabled:after:hidden",
  "after:transition-fg after:absolute after:inset-0 after:content-['']"
);

const buttonVariants = cva(baseButtonStyles, {
  variants: {
    variant: {
      primary: clx(
        "shadow-buttons-inverted text-ui-contrast-fg-primary bg-ui-button-inverted after:button-inverted-gradient",
        "hover:bg-ui-button-inverted-hover hover:after:button-inverted-hover-gradient",
        "active:bg-ui-button-inverted-pressed active:after:button-inverted-pressed-gradient",
        "focus-visible:!shadow-buttons-inverted-focus"
      ),
      secondary: clx(
        "shadow-buttons-neutral text-ui-fg-base bg-ui-button-neutral after:button-neutral-gradient",
        "hover:bg-ui-button-neutral-hover hover:after:button-neutral-hover-gradient",
        "active:bg-ui-button-neutral-pressed active:after:button-neutral-pressed-gradient",
        "focus-visible:shadow-buttons-neutral-focus"
      ),
      transparent: clx(
        "after:hidden",
        "text-ui-fg-base bg-ui-button-transparent",
        "hover:bg-ui-button-transparent-hover",
        "active:bg-ui-button-transparent-pressed",
        "focus-visible:shadow-buttons-neutral-focus focus-visible:bg-ui-bg-base",
        "disabled:!bg-transparent disabled:!shadow-none"
      ),
      danger: clx(
        "shadow-buttons-colored shadow-buttons-danger text-ui-fg-on-color bg-ui-button-danger after:button-danger-gradient",
        "hover:bg-ui-button-danger-hover hover:after:button-danger-hover-gradient",
        "active:bg-ui-button-danger-pressed active:after:button-danger-pressed-gradient",
        "focus-visible:shadow-buttons-danger-focus"
      ),
    },
    size: {
      small: "txt-compact-small-plus gap-x-1.5 px-2 py-1",
      base: "txt-compact-small-plus gap-x-1.5 px-3 py-1.5",
      large: "txt-compact-medium-plus gap-x-1.5 px-4 py-2.5",
      xlarge: "txt-compact-large-plus gap-x-1.5 px-5 py-3.5",
    },
  },
  defaultVariants: {
    size: "base",
    variant: "primary",
  },
});

const Button = ({
  variant = "primary",
  size = "base",
  className,
  children,
  isLoading = false,
  disabled,
  ref,
  ...props
}: ButtonProps) => {
  const renderInner = () => {
    if (isLoading) {
      return (
        <span className="pointer-events-none">
          <div
            className={clx(
              "absolute inset-0 flex items-center justify-center rounded-md"
            )}
          >
            <Spinner className="animate-spin" />
          </div>
          <span className={isLoading ? "opacity-0" : undefined}>
            {children}
          </span>
        </span>
      );
    }

    return children;
  };

  return (
    <button
      ref={ref}
      {...props}
      className={clx(buttonVariants({ variant, size }), className)}
      disabled={disabled}
    >
      {renderInner()}
    </button>
  );
};

export { Button, buttonVariants };
