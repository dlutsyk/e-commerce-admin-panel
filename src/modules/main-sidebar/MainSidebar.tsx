import { Divider } from "@ui";
import { Header } from "@components";

const MainSidebar = ({}) => {
  return (
    <aside className="flex flex-1 flex-col justify-between overflow-y-auto">
      <div className="flex flex-1 flex-col">
        <div className="bg-ui-bg-subtle sticky top-0">
          <Header />
          <div className="px-3">
            <Divider variant="dashed" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export { MainSidebar };
