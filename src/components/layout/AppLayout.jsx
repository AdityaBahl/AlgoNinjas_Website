import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import NavBarComponent from "../accountNavbar";

const AppLayout = () => {
    return (
    <div>
        <Sidebar />
        <NavBarComponent/>
        <Outlet />
    </div>
    );
}

export default AppLayout;
