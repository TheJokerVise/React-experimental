import { useReducer } from "react";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import "./css/app.scss";

const initialState = {
  showInfoArea: false,
  diagnosisIsActive: false,
};

const reducer = (
  state: { showInfoArea: boolean },
  action: { type: string; payload: { showInfoArea: boolean } }
) => {
  switch (action.type) {
    case "SHOW_INFO_AREA":
      return {
        ...state,
        showInfoArea: action.payload.showInfoArea,
      };
    case "HIDE_INFO_AREA":
      return {
        ...state,
        showInfoArea: false,
      };
    case "ACTIVATE_DIAGNOSIS":
      return {
        ...state,
        diagnosisIsActive: true,
        disableShowInfoBtn: false,
        mngVisibilityDiagnosis: " show",
        mngVisibilityFollowup: " hide",
      };
    case "ACTIVATE_FOLLOWUP":
      return {
        ...state,
        diagnosisIsActive: false,
        disableShowInfoBtn: true,
        mngVisibilityDiagnosis: " hide",
        mngVisibilityFollowup: " show",
      };
    default:
      return state;
  }
};

export const App: React.FC = (): JSX.Element => {
  const [state, dispatch] = useApp();

  return (
    <div className="app">
      <Header state={state} dispatch={dispatch} />
      <Content state={state} dispatch={dispatch} />
    </div>
  );
};

const useApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};
