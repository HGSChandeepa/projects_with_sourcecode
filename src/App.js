import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Apipage from "./pages/apipage";
import DetailsPage from "./pages/detailsPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apipage />} />
        <Route path="/detail/:postId" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
