import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./common/layout/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/home/HomePage";
import FormPage from "./pages/form/FormPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
