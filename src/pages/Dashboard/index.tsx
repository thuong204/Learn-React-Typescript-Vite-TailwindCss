import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <nav>
          <Link to="profile">Profile</Link>
          <Link to="setting">Settings</Link>
        </nav>
        <hr />
        <Outlet />
      </div>
    </>
  );
}
