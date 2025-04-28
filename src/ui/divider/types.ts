export interface DividerProps
  extends Omit<React.ComponentPropsWithRef<"div">, "children"> {
  orientation?: "horizontal" | "vertical";
  variant?: "dashed" | "solid";
}
