import { ReactNode } from "react";

type ItemType = "core" | "extension" | "setting";
type NestedItemProps = {
  label: string;
  to: string;
};

export type NavItemProps = {
  icon?: ReactNode;
  label: string;
  to?: string;
  items?: NestedItemProps[];
  type?: ItemType;
  from?: string;
  nested?: string;
};
