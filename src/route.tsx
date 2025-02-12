import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import HomeMDX from "./docs/index.mdx";
import ButtonsMDX from "./docs/Button.mdx";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/404";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs Component={HomeMDX} />} />
        <Route path="/docs/buttons" element={<Docs Component={ButtonsMDX} />} />

        {/* Error Page */}
        <Route path="/error" element={<ErrorPage />} />

        {/*404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
