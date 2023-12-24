import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    createSection,
    resetSection,
} from "../../features/section/sectionSlice.js";
import Loading from "../../components/Loading.jsx";

const AddSection = () => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [image, setImage] = useState("");

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

    const images = [
        "/section/001.svg",
        "/section/002.svg",
        "/section/003.svg",
        "/section/004.svg",
        "/section/005.svg",
        "/section/006.svg",
        "/section/007.svg",
        "/section/008.svg",
        "/section/009.svg",
        "/section/010.svg",
        "/section/011.svg",
        "/section/012.svg",
        "/section/013.svg",
        "/section/014.svg",
        "/section/015.svg",
        "/section/016.svg",
    ];

    const submitHandler = () => {
        const data = { name, color, image };

        dispatch(createSection(data));
        setName("");
        setColor("");
        setImage("");
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
                        Section Color
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

                <div className="flex flex-col gap-2 flex-wrap mt-8">
                    <label
                        htmlFor="sectionImage"
                        className="text-dark-text-title font-bold text-base mb-2"
                    >
                        Section İmage
                    </label>
                    <div className="flex gap-2 flex-wrap">
                        {images.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setImage(item)}
                                className={`${
                                    image == item
                                        ? "outline outline-2 outline-offset-2 outline-white"
                                        : "outline-none border-none"
                                } w-[75px] h-[75px] flex items-center justify-center rounded-md`}
                            >
                                <img src={item} className="w-14 h-14" alt="" />
                            </button>
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
