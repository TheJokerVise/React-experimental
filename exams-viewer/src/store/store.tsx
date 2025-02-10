import { configureStore, createSlice } from "@reduxjs/toolkit";

// Primo slice
const initialAppState = {
  showInfoArea: false,
  disableShowInfoBtn: false,
  diagnosisIsActive: true,
  mngVisibilityDiagnosis: " show",
  mngVisibilityFollowup: " hide",
};

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
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

// Secondo slice
const initialUserState = {
  name: "",
  age: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setAge: (state, action) => {
      state.age = action.payload.age;
    },
  },
});

export const { showInfoArea, activateDiagnosis, activateFollowUp } =
  appSlice.actions;
export const { setName, setAge } = userSlice.actions;

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
