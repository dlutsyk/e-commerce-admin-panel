import { NavItemProps } from "./types";
import { Text } from "@ui";

const NavItem = ({ icon, label }: NavItemProps) => {
  return (
    <div className="px-3 flex">
      <div className="flex size-6 items-center justify-center">{icon}</div>
      <Text size="small" weight="plus" leading="compact">
        {label}
      </Text>
    </div>
  );
};

export { NavItem };
