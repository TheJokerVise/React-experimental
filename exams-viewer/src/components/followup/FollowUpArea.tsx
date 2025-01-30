import { useSelector } from "react-redux";

export const FollowUpArea: React.FC = (): JSX.Element => {
  const [state] = UseFollowUpArea();

  return <div className={"follow-up-area" + state.mngVisibilityFollowup}></div>;
};

function UseFollowUpArea(): [any] {
  const state = useSelector((state: any) => state);

  return [state];
}
