import { useState } from "react";
import "../css/content.scss";
import { AppState } from "../models/AppState";

export const Content: React.FC<AppState> = (props): JSX.Element => {
  const [showInfoAreaCls] = useContent(props);
  const dates = ["2023-01-01", "2023-02-01", "2023-03-01"]; // Esempio di date
  const exams = ["OCT", "FI", "VF", "IOP-c", "BCVA"]; // Esempio di esami
  const [anamnesi, setAnamnesi] = useState<string[]>([]);

  return (
    <div className="content">
      <div className={"diagnosis-area" + props.state.mngVisibilityDiagnosis}>
        <div className={"left-info-area" + showInfoAreaCls}>
          <div className="dates-reference-area">
            <div className="dates-list">
              <h3>Lista di Date</h3>
              <ul>
                {dates.map((date, index) => (
                  <li key={index}>{date}</li>
                ))}
              </ul>
            </div>
            <div className="exams-list">
              <h3>Lista di Esami</h3>
              <ul>
                {exams.map((exam, index) => (
                  <li key={index}>{exam}</li>
                ))}
              </ul>
            </div>
            <div className="interview-data">
              <h3>Lista di Anamnesi</h3>
              <ul>
                {anamnesi.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="exams-area"></div>
          <div className="interviews-area"></div>
        </div>
        <div className={"right-exams-area" + showInfoAreaCls}></div>
      </div>
      <div
        className={"follow-up-area" + props.state.mngVisibilityFollowup}
      ></div>
    </div>
  );
};

const useContent = (props: AppState) => {
  const showInfoAreaCls = props.state.showInfoArea
    ? " show-info-area"
    : " hide-info-area";

  return [showInfoAreaCls];
};
