import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice.js";
import Loading from "../components/Loading.jsx";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isSuccess || user) {
            navigate("/learn");
        }

        dispatch(reset());
    }, [isSuccess, user]);

    const onChangeHandler = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitHandler = () => {
        const userData = { name, email, password };

        dispatch(register(userData));
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="w-[450px] bg-dark-bg-hover rounded-md p-10">
                <h1 className="text-3xl text-center text-dark-text-white font-bold mb-7">
                    Create an account
                </h1>
                <div className="flex flex-col w-full mb-3">
                    <label
                        htmlFor="name"
                        className="text-dark-text-title font-bold text-base mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={onChangeHandler}
                        placeholder="Name"
                        className="outline-none border-2 border-dark-border bg-transparent p-2 rounded-lg placeholder:text-dark-border text-dark-text-white font-semibold caret-dark-text-white"
                    />
                </div>

                <div className="flex flex-col w-full mb-5">
                    <label
                        htmlFor="email"
                        className="text-dark-text-title font-bold text-base mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={onChangeHandler}
                        placeholder="Email"
                        className="outline-none border-2 border-dark-border bg-transparent p-2 rounded-lg placeholder:text-dark-border text-dark-text-white font-semibold caret-dark-text-white"
                    />
                </div>

                <div className="flex flex-col w-full mb-5">
                    <label
                        htmlFor="password"
                        className="text-dark-text-title font-bold text-base mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={onChangeHandler}
                        placeholder="Password"
                        className="outline-none border-2 border-dark-border bg-transparent p-2 rounded-lg placeholder:text-dark-border text-dark-text-white font-semibold caret-dark-text-white"
                    />
                </div>

                <button
                    onClick={() => submitHandler()}
                    className="btn bg-transparent border-2 border-light-blue hover:bg-light-blue  text-dark-text-white"
                >
                    Create Account
                </button>

                <p className="text-sm text-dark-text-white font-semibold">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-light-blue text-sm font-bold hover:underline"
                    >
                        Sign in your account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
