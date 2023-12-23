import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Learn = () => {
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user.isAdmin) {
            navigate("/admin");
        }
    }, []);

    return <div className="text-dark-text-white">Learn</div>;
};

export default Learn;
