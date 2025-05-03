import { DropdownMenu } from "@components";
import { Text, Avatar } from "@ui";
import { clx } from "@utils";
import { EllipsisHorizontal } from "@icons";

const Header = () => {
  return (
    <div className="w-full p-3">
      <DropdownMenu>
        <DropdownMenu.Trigger
          className={clx(
            "bg-ui-bg-subtle transition-fg grid w-full grid-cols-[24px_1fr_15px] items-center gap-x-3 rounded-md p-0.5 pr-2 outline-none",
            "hover:bg-ui-bg-subtle-hover",
            "data-[state=open]:bg-ui-bg-subtle-hover",
            "focus-visible:shadow-borders-focus"
          )}
        >
          <Avatar variant="squared" size="xsmall" fallback="M" />
          <div className="block overflow-hidden text-left">
            <Text
              size="small"
              weight="plus"
              leading="compact"
              className="truncate"
            >
              Store
            </Text>
          </div>
          <EllipsisHorizontal className="text-ui-fg-muted" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-0">
          <div className="flex items-center gap-x-3 px-2 py-1">
            <Avatar variant="squared" size="small" fallback="M" />
          </div>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  );
};

export { Header };
