import { JSX } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Diagnosis } from "./pages/diagnosis/Diagnosis";
import { FollowUp } from "./pages/followUp/FollowUp";
import GlobalStyles from "./styles/GlobalStyles";
import { AppLayout } from "./ui/AppLayout";

export const App: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AppLayout />
        <Routes>
          <Route index element={<Navigate replace to={"diagnosis"} />}></Route>
          <Route path="diagnosis" element={<Diagnosis />}></Route>
          <Route path="followup" element={<FollowUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
