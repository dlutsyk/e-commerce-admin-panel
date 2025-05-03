"use client";

import { clx } from "@utils";
import { DropdownMenu as RadixDropdownMenu } from "radix-ui";
import React from "react";
import { ContentProps } from "./types";

/**
 * This component is based on the [Radix UI Dropdown Menu](https://www.radix-ui.com/primitives/docs/components/dropdown-menu) primitive.
 */
const Root = RadixDropdownMenu.Root;

/**
 * This component is based on the [Radix UI Dropdown Menu Trigger](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#trigger) primitive.
 */
const Trigger = RadixDropdownMenu.Trigger;
Trigger.displayName = "DropdownMenu.Trigger";

/**
 * This component is based on the [Radix UI Dropdown Menu Content](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content) primitive.
 */
const Content = ({
  className,
  sideOffset = 8,
  collisionPadding = 8,
  align = "center",
  ref,
  ...props
}: ContentProps) => (
  <RadixDropdownMenu.Portal>
    <RadixDropdownMenu.Content
      ref={ref}
      sideOffset={sideOffset}
      align={align}
      collisionPadding={collisionPadding}
      className={clx(
        "bg-ui-bg-component text-ui-fg-base shadow-elevation-flyout max-h-[var(--radix-popper-available-height)] min-w-[220px] overflow-hidden rounded-lg p-1",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </RadixDropdownMenu.Portal>
);

Content.displayName = "DropdownMenu.Content";

const DropdownMenu = Object.assign(Root, {
  Trigger,
  Content,
});

export { DropdownMenu };
