import { clx } from "@utils";
import { StyledStatuses, BadgeProps } from "./types";

const badgeClasses: Record<StyledStatuses, string> = {
  experimental: "border-amber-500 bg-amber-200 text-amber-900",
  new: "border-purple-500 bg-purple-200 text-purple-900",
};

const sharedBadgeClasses = clx(
  "rounded-full border px-1 py-0.5 text-[0.625rem] font-medium uppercase leading-none"
);

const Badge = ({ variant, label }: BadgeProps) => {
  return (
    <span
      className={clx(
        sharedBadgeClasses,
        variant !== "default" ? badgeClasses[variant] : ""
      )}
    >
      {label}
    </span>
  );
};

export { Badge };
