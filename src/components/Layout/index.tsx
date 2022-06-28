import { LayoutType } from "src/types/types";

export const Layout: React.FC<LayoutType> = (props) => {
  return (
    <div className="flex flex-col items-center mx-auto px-2 min-h-screen max-w-2xl">
      {props.children}
    </div>
  );
};
