import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Learn = () => {
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);
    const { selectedSection, isLoading } = useSelector(
        (state) => state.section
    );

    useEffect(() => {
        if (user.isAdmin) {
            navigate("/admin");
        }
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return <div className="text-dark-text-white">{selectedSection}</div>;
};

export default Learn;
