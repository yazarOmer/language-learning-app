import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";

const PrivateRoute = () => {
    const { user } = useSelector((state) => state.auth);
    return user ? (
        <div className="flex">
            <Header />
            <div className="w-[calc(100%-850px)] absolute left-[250px] flex items-center">
                <Outlet />
            </div>
            <Sidebar />
        </div>
    ) : (
        <Navigate to="/login" replace />
    );
};
export default PrivateRoute;
