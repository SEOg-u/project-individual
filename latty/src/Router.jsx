import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error";
import Practice from "./Practice";

const Router = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Practice />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default Router;
