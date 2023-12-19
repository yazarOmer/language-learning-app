import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";

const PrivateRoute = () => {
    const { user } = useSelector((state) => state.auth);
    return user ? (
        <div className="flex">
            <Header />
            <Outlet />
        </div>
    ) : (
        <Navigate to="/login" replace />
    );
};
export default PrivateRoute;
