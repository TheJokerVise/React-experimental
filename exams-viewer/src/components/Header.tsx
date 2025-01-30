import React from "react";
import "../css/header.scss";
import { AppState } from "../models/AppState";

export const Header: React.FC<AppState> = (props): JSX.Element => {
  return (
    <header>
      <div className="left-toolbar-area">
        <div className="show-info-area">
          <button
            onClick={() => {
              console.log("Show info area", props.state.showInfoArea);
              props.dispatch({
                type: "SHOW_INFO_AREA",
                payload: { showInfoArea: !props.state.showInfoArea },
              });
            }}
          >
            Show info
          </button>
        </div>
        <div className="diagnosis-follow-up-toolbar-area">
          <button>Diagnosis</button>
          <button>Follow Up</button>
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
