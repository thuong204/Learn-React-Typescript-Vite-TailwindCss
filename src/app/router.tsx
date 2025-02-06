import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";
import LayoutDefault from "../layouts/LayoutDefault";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<LayoutDefault />}>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="home" element={<Home/>}></Route>
          <Route path="about"></Route>
          <Route path="product"></Route>
          <Route path="contact"></Route>
        </Route>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="setting" element={<Setting />}></Route>
        </Route>
        <Route path="/about"></Route>
        <Route path="/product"></Route>
      </Routes>
    </>
  );
};
export default AppRouter;
