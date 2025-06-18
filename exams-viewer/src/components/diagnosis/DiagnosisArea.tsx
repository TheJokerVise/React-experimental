import { useState } from "react";
import { useAppStateManager } from "../../services/AppStateManager";
import { HeaderState } from "../../models/HeaderState";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const DiagnosisArea: React.FC = (): JSX.Element => {
  const [appHeaderStore, dates, exams, anamnesi, showInfoAreaCls] =
    UseDiagnosisArea();

  return (
    <div className={"diagnosis-area" + appHeaderStore.mngVisibilityDiagnosis}>
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
      <div className={"right-exams-area" + showInfoAreaCls}>DIAGNOSIS AREA</div>
    </div>
  );
};

function UseDiagnosisArea(): [
  HeaderState,
  string[],
  string[],
  string[],
  string
] {
  const { slice } = useAppStateManager<HeaderState>("header");

  const dates = ["2023-01-01", "2023-02-01", "2023-03-01"]; // Dates example
  const exams = ["OCT", "FI", "VF", "IOP-c", "BCVA"]; // Exams example
  const [anamnesi, setAnamnesi] = useState<string[]>([]);
  const showInfoAreaCls = slice.showInfoArea
    ? " show-info-area"
    : " hide-info-area";

  return [slice, dates, exams, anamnesi, showInfoAreaCls];
}
