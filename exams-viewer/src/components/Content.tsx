import "../css/content.scss";
import { DiagnosisArea } from "./diagnosis/DiagnosisArea";
import { FollowUpArea } from "./followup/FollowUpArea";

export const Content: React.FC = (): JSX.Element => {
  return (
    <div className="content">
      <DiagnosisArea />
      <FollowUpArea />
    </div>
  );
};
