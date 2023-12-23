import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSection, reset } from "../../features/section/sectionSlice.js";
import Loading from "../../components/Loading.jsx";

const AddSection = () => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");

    const { isLoading } = useSelector((state) => state.section);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const colors = [
        "#2a9d8f",
        "#e9c46a",
        "#f4a261",
        "#e76f51",
        "#a8dadc",
        "#457b9d",
        "#edf6f9",
        "#e29578",
    ];

    const submitHandler = () => {
        const data = { name, color };

        dispatch(createSection(data));
        setName("");
        setColor("");
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="border-2 border-light-blue/20 w-[500px] p-6 rounded-lg">
                <div className="flex flex-col w-full mb-3 mt-2">
                    <label
                        htmlFor="sectionName"
                        className="text-dark-text-title font-bold text-base mb-2"
                    >
                        Section Name
                    </label>
                    <input
                        type="text"
                        name="sectionName"
                        id="sectionName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Section Name"
                        className="outline-none border-2 border-dark-border bg-transparent p-2 rounded-lg placeholder:text-dark-border text-dark-text-white font-semibold caret-dark-text-white"
                    />
                </div>

                <div className="flex flex-col gap-2 flex-wrap mt-8">
                    <label
                        htmlFor="sectionName"
                        className="text-dark-text-title font-bold text-base mb-2"
                    >
                        Colors
                    </label>
                    <div className="flex gap-2 flex-wrap">
                        {colors.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setColor(item)}
                                className={`${
                                    color == item
                                        ? "outline outline-2 outline-offset-2 outline-white"
                                        : "outline-none border-none"
                                } w-[50px] h-[50px] rounded-md bg-[${item}]`}
                            ></button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => submitHandler()}
                    className="btn mt-5 w-full border border-light-blue hover:bg-light-blue text-dark-text-white"
                >
                    Add Section
                </button>
            </div>
        </div>
    );
};

export default AddSection;
