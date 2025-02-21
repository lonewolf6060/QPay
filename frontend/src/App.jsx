import { Button } from "antd";
import "./stylesheets/alignments.css";
import "./stylesheets/custom-components.css";
import "./stylesheets/theme.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/text-elements.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import Home from "./pages/Home/index";
import ProtectedRoute from "./components/ProtectedRoute";
// import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
