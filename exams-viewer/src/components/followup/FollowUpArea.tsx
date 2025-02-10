import { useAppStateManager } from "../../services/AppStateManager";
import { HeaderState } from "../../models/HeaderState";

export const FollowUpArea: React.FC = (): JSX.Element => {
  const [appHeaderStore] = UseFollowUpArea();

  return (
    <div className={"follow-up-area" + appHeaderStore.mngVisibilityFollowup}>
      FOLLOW UP AREA
    </div>
  );
};

function UseFollowUpArea(): [HeaderState] {
  const { slice } = useAppStateManager<HeaderState>("header");

  return [slice];
}
