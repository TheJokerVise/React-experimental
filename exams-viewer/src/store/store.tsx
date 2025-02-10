import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  showInfoArea: false,
  disableShowInfoBtn: false,
  diagnosisIsActive: true,
  mngVisibilityDiagnosis: " show",
  mngVisibilityFollowup: " hide",
};

const appSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    showInfoArea: (state, action) => {
      state.showInfoArea = action.payload.showInfoArea;
    },
    activateDiagnosis: (state) => {
      state.diagnosisIsActive = true;
      state.disableShowInfoBtn = false;
      state.mngVisibilityDiagnosis = " show";
      state.mngVisibilityFollowup = " hide";
    },
    activateFollowUp: (state) => {
      state.diagnosisIsActive = false;
      state.disableShowInfoBtn = true;
      state.mngVisibilityDiagnosis = " hide";
      state.mngVisibilityFollowup = " show";
    },
  },
});

const initialpatientState = {
  id: "1",
};

const patientSlice = createSlice({
  name: "patient",
  initialState: initialpatientState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload.id;
    },
  },
});

export const { showInfoArea, activateDiagnosis, activateFollowUp } =
  appSlice.actions;
export const { setId } = patientSlice.actions;

const store = configureStore({
  reducer: {
    header: appSlice.reducer,
    patient: patientSlice.reducer,
  },
});

/**
 * store.getState: This function returns the current state of the application.
 * The return type of this function is an object that contains all the slices of the state defined in the store's reducer.
 */
export type RootState = ReturnType<typeof store.getState>;

export default store;
