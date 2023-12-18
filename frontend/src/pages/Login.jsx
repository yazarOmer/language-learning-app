import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const onChangeHandler = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitHandler = () => {
        console.log(formData);
    };
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="w-[450px] bg-dark-bg-hover rounded-md p-10">
                <h1 className="text-3xl text-center text-dark-text-white font-bold mb-7">
                    Sign in to your account
                </h1>
                <div className="flex flex-col w-full mb-3">
                    <label
                        htmlFor="email"
                        className="text-dark-text-title font-bold text-base mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="text"
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
                    Sign in
                </button>

                <p className="text-sm text-dark-text-white font-semibold">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-light-blue text-sm font-bold hover:underline"
                    >
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
