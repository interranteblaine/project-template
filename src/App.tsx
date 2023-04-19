import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./common/layout/MainLayout";
import Home from "./routes/home/Home";
import NotFoundError from "./routes/NotFoundError";


const App = () => {
    return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFoundError />} />
        </Route>
      </Routes>
    );
};

export default App