import "../css/content.scss";
import { AppState } from "../models/AppState";

export const Content: React.FC<AppState> = (props): JSX.Element => {
  const [showInfoAreaCls] = useContent(props);
  return (
    <div className="content">
      <div className={"left-info-area" + showInfoAreaCls}>
        <div className="dates-reference-area"></div>
        <div className="exams-area"></div>
        <div className="interviews-area"></div>
      </div>
      <div className={"right-exams-area" + showInfoAreaCls}></div>
    </div>
  );
};

const useContent = (props: AppState) => {
  const showInfoAreaCls = props.state.showInfoArea
    ? " show-info-area"
    : " hide-info-area";

  return [showInfoAreaCls];
};
