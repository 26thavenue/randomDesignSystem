import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import HomeMDX from "./docs/index.mdx";
import ButtonsMDX from "./docs/Button.mdx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs Component={HomeMDX} />} />
        <Route path="/docs/buttons" element={<Docs Component={ButtonsMDX} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
