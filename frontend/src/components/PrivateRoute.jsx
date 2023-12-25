import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";

const PrivateRoute = () => {
    const { user } = useSelector((state) => state.auth);
    return user ? (
        <div className="flex">
            <Header />
            <Outlet />
            <Sidebar />
        </div>
    ) : (
        <Navigate to="/login" replace />
    );
};
export default PrivateRoute;
