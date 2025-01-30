import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  showInfoArea: false,
  disableShowInfoBtn: false,
  diagnosisIsActive: true,
  mngVisibilityDiagnosis: " show",
  mngVisibilityFollowup: " hide",
};

const appSlice = createSlice({
  name: "app",
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

export const { showInfoArea, activateDiagnosis, activateFollowUp } =
  appSlice.actions;

const store = configureStore({
  reducer: appSlice.reducer,
});

export default store;
