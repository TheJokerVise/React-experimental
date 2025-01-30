import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

export const Content: React.FC<ContentProps> = (props): JSX.Element => {
  return <main className="app-main">{props.children}</main>;
};
