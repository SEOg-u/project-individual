import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error";
import Practice from "./Practice";
import SignUp from "./pages/auth/SignUp/SignUp";
import LogIn from "./pages/auth/LogIn";
import Header from "./components/Header";
import Function from "./pages/Function/Function";

const Router = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/function" element={<Function />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default Router;
