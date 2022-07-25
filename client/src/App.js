import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import ForgotPassword from "./pages/ForgotPassword";
import UserIndex from "./pages/user/Index";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/forgot-Password" element={<ForgotPassword />} />
      <Route path="/user/index" element={<UserIndex />} />
    </Routes>
  );
}

export default App;
