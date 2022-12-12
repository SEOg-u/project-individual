import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
