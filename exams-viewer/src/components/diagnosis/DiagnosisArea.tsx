import { useState } from "react";
import { useSelector } from "react-redux";

export const DiagnosisArea: React.FC = (): JSX.Element => {
  const [state, dates, exams, anamnesi, showInfoAreaCls] = UseDiagnosisArea();

  return (
    <div className={"diagnosis-area" + state.mngVisibilityDiagnosis}>
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
  );
};

function UseDiagnosisArea(): [any, string[], string[], string[], string] {
  const user = useSelector((state: any) => state.user);
  const state = useSelector((state: any) => state);
  const dates = ["2023-01-01", "2023-02-01", "2023-03-01"]; // Dates example
  const exams = ["OCT", "FI", "VF", "IOP-c", "BCVA"]; // Exams example
  const [anamnesi, setAnamnesi] = useState<string[]>([]);
  const showInfoAreaCls = state.showInfoArea
    ? " show-info-area"
    : " hide-info-area";

  return [state, dates, exams, anamnesi, showInfoAreaCls];
}
