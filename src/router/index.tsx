
import Layout from "@/components/Layout";
import HomePage from "@/pages/Home";
import { Route, Routes } from "react-router-dom";

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
