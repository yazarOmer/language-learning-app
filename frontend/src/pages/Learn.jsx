import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Learn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const logoutHandler = async () => {
        await dispatch(logout());
        await dispatch(reset());
        navigate("/");
    };
    return (
        <div className="text-dark-text-white">
            Learn
            <button onClick={logoutHandler}>logout</button>
        </div>
    );
};

export default Learn;
