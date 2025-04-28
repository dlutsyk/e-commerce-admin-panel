import { clx } from "@utils";
import { DividerProps } from "./types";

const Divider = ({
  orientation = "horizontal",
  variant = "solid",
  className,
  ...props
}: DividerProps) => {
  const classes = {
    "w-full border-t": orientation === "horizontal" && variant === "solid",
    "h-full border-l": orientation === "vertical" && variant === "solid",
    "border-dashed": variant === "dashed",
    "h-px w-full bg-[linear-gradient(90deg,var(--border-strong)_1px,transparent_1px)] bg-[length:4px_1px]":
      variant === "dashed" && orientation === "horizontal",
  };

  return (
    <div
      aria-orientation={orientation}
      role="separator"
      className={clx("border-ui-border-base]", classes, className)}
      {...props}
    />
  );
};

export { Divider };
