import React from "react";
import "../css/header.scss";
import {
  activateDiagnosis,
  activateFollowUp,
  showInfoArea,
} from "../store/store";
import { useAppStateManager } from "../services/AppStateManager";
import { HeaderState } from "../models/HeaderState";
import { createSignal } from "solid-js";

export const Header: React.FC = (): JSX.Element => {
  const [appHeaderStore, dispatch] = useHeader();

  const [count, setCount] = createSignal(0);

  return (
    <header>
      <div className="left-toolbar-area">
        <div className="show-info-area">
          <button
            onClick={() => {
              dispatch(
                showInfoArea({ showInfoArea: !appHeaderStore.showInfoArea })
              );
            }}
            disabled={appHeaderStore.disableShowInfoBtn}
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

function useHeader(): [HeaderState, any] {
  const { dispatch, slice } = useAppStateManager<HeaderState>("header");

  return [slice as HeaderState, dispatch];
}
