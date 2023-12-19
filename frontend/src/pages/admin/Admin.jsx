import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";

const Admin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!user.isAdmin) {
            navigate("/learn");
        }
    }, []);

    const logoutHandler = async () => {
        await dispatch(logout());
        await dispatch(reset());
        navigate("/");
    };
    return (
        <div className="text-dark-text-white">
            Admin
            <button onClick={logoutHandler}>logout</button>
        </div>
    );
};

export default Admin;
