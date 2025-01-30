import { Content } from "./components/Content";
import { Header } from "./components/Header";
import "./css/app.scss";
import { Provider } from "react-redux";
import store from "./store/store";

export const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Content />
      </div>
    </Provider>
  );
};
