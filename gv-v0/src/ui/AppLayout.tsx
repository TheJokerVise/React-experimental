import { JSX } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const AppLayout: React.FC = (): JSX.Element => {
  return (
    <div className="app-layout">
      <Header></Header>
      <div className="content">
        <Sidebar />
      </div>
    </div>
  );
};
