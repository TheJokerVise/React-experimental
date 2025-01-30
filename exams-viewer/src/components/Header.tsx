import React from "react";
import "../css/header.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  activateDiagnosis,
  activateFollowUp,
  showInfoArea,
} from "../store/store";

export const Header: React.FC = (): JSX.Element => {
  const [state, dispatch] = useHeader();

  return (
    <header>
      <div className="left-toolbar-area">
        <div className="show-info-area">
          <button
            onClick={() => {
              dispatch(showInfoArea({ showInfoArea: !state.showInfoArea }));
            }}
            disabled={state.disableShowInfoBtn}
          >
            Show info
          </button>
        </div>
        <div className="diagnosis-follow-up-toolbar-area">
          <button
            onClick={() => {
              dispatch(activateDiagnosis());
            }}
          >
            Diagnosis
          </button>
          <button
            onClick={() => {
              dispatch(activateFollowUp());
            }}
          >
            Follow Up
          </button>
        </div>
        <div className="eyes-toolbar-area">
          <button>Right eye</button>
          <button>R/L</button>
          <button>Left eye</button>
        </div>
      </div>
      <div className="right-toolbar-area">
        <button>Full size</button>
      </div>
    </header>
  );
};

function useHeader(): [any, any] {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();

  return [state, dispatch];
}
