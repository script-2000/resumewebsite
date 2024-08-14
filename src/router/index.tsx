
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/Home";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/"  element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
