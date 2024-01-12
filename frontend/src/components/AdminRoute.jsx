import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";

const AdminRoute = () => {
    const { user } = useSelector((state) => state.auth);
    return user && user.isAdmin ? (
        <div className="flex">
            <Header />
            <div className="w-[calc(100%-650px)] absolute left-[250px] flex items-center">
                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to="/login" replace />
    );
};
export default AdminRoute;
