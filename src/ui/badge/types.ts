export type BadgeStatus = "experimental" | "new" | "default";
export type StyledStatuses = Exclude<BadgeStatus, "default">;
export type BadgeProps = {
  variant: BadgeStatus;
  label: string;
};
