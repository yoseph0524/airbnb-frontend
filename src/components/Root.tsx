import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <h1>
      im root &nbsp;
      <Outlet />
    </h1>
  );
}
