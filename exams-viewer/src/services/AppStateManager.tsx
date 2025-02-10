import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

/**
 * RootState is the type of the store Redux state
 * @param sliceName - The name of the slice to be used. These keys are defined in the store's reducer.
 * @returns - Returns the slice and the dispatch function. The slice is the state of the slice defined in the store's reducer. Cast to the generic type T.
 */
export const useAppStateManager = <T,>(sliceName: keyof RootState) => {
  const dispatch = useDispatch();
  const slice = useSelector((state: RootState) => state[sliceName]) as T;

  return { dispatch, slice };
};
