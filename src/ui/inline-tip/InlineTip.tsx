import { clx } from "@utils";
import { cva } from "class-variance-authority";
import { InlineTipProps } from "./types";

const borderVariants = cva(
  "bg-ui-bg-component txt-small text-ui-fg-subtle grid grid-cols-[4px_1fr] items-start gap-3 p-3",
  {
    variants: {
      border: {
        true: "shadow-elevation-card-rest rounded-lg",
        false: "bg-transparent p-0 items-center",
      },
    },
    defaultVariants: {
      border: false,
    },
  }
);

const tagVariants = cva("bg-ui-tag-neutral-icon h-full w-1 rounded-full", {
  variants: {
    variant: {
      info: "bg-ui-tag-neutral-icon",
      warning: "bg-ui-tag-orange-icon",
      error: "bg-ui-tag-red-icon",
      success: "bg-ui-tag-green-icon",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

const InlineTip = ({
  variant,
  label,
  className,
  border,
  children,
  ref,
  ...props
}: InlineTipProps): React.JSX.Element => {
  return (
    <div
      ref={ref}
      {...props}
      className={clx(borderVariants({ border }), className)}
    >
      <div role="presentation" className={clx(tagVariants({ variant }))} />
      <div className="text-pretty">
        {label && (
          <>
            <strong className="txt-small-plus text-ui-fg-base">{label}</strong>{" "}
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export { InlineTip, borderVariants, tagVariants };
