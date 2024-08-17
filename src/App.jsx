import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Layout from "./screens/Layout";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import NotFound from "./screens/NotFound";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  return (
    <div>
      {isDashboard ? (
        <Routes>
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
