import { IconProps } from "@ui/icons/types";

export default function EllipsisHorizontal({
  color = "currentColor",
  ref,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M6.306 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M1.194 7.5a1.194 1.194 0 1 1 2.39 0 1.194 1.194 0 0 1-2.39 0M11.417 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0"
        clipRule="evenodd"
      />
    </svg>
  );
}
