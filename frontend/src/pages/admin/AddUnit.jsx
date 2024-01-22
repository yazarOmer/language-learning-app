import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUnit, resetUnit } from "../../features/unit/unitSlice.js";
import {
    getAllSections,
    resetSection,
} from "../../features/section/sectionSlice.js";
import Loading from "../../components/Loading.jsx";
import { toast } from "react-toastify";

const AddUnit = () => {
    const [sectionId, setSectionId] = useState("");
    const [name, setName] = useState("");
    const [guide, setGuide] = useState([
        { eng: "", tr: "", id: Math.random() },
    ]);
    const [color, setColor] = useState("");

    const { isLoading, sections } = useSelector((state) => state.section);
    const { isSuccess, isError } = useSelector((state) => state.unit);

    const dispatch = useDispatch();

    const colors = [
        "#58cc02",
        "#ce82ff",
        "#00cd9c",
        "#1cb0f6",
        "#ff86d0",
        "#cc348d",
        "#ff9600",
        "#ce82ff",
    ];

    const fetchSections = async () => {
        await dispatch(getAllSections());
        await dispatch(resetSection());
    };

    useEffect(() => {
        fetchSections();
    }, []);

    useEffect(() => {
        if (isSuccess) {
            toast.success("Ünite başarıyla eklendi");
            setSectionId("");
            setName("");
            setGuide([{ eng: "", tr: "", id: Math.random() }]);
            setColor("");
        }
        if (isError) {
            toast.error("Ünite eklenemedi");
        }
    }, [isSuccess, isError]);

    const submitHandler = async () => {
        const data = { sectionId, name, guide, color };
        await dispatch(createUnit(data));

        await dispatch(resetUnit());
    };

    const handleInputChange = (id, event) => {
        const newFormValues = guide.map((input, i) =>
            i === id
                ? { ...input, [event.target.name]: event.target.value }
                : input
        );
        setGuide(newFormValues);
    };

    const handleDelete = (id) => {
        const newGuide = guide.filter((item) => item.id !== id);
        setGuide(newGuide);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="border-2 border-light-blue/20 w-[500px] p-6 rounded-lg">
                <div className="flex flex-col w-full mb-3 mt-2">
                    <label
                        htmlFor="sectionId"
                        className="text-dark-text-title font-bold text-base mb-2"
                    >
                        Section
                    </label>
                    <select
                        name="sectionId"
                        id="sectionId"
                        value={sectionId}
                        onChange={(e) => setSectionId(e.target.value)}
                        className="p-2 bg-transparent border-2 rounded-md border-dark-border text-dark-text-white"
                    >
                        <option value="" className=" bg-dark-bg">
                            Select Section
                        </option>
                        {sections.map((section, i) => (
                            <option
                                key={i}
                                value={section._id}
                                className=" bg-dark-bg"
                            >
                                {section.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col w-full mb-3 mt-2">
                    <label
                        htmlFor="sectionName"
                        className="text-dark-text-title font-bold text-base mb-2"
                    >
                        Unit Name
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

                <div className="flex flex-col w-full mb-3 mt-2">
                    <label
                        htmlFor="sectionName"
                        className="text-dark-text-title font-bold text-base mb-2"
                    >
                        Guides
                    </label>
                    {guide.map((item, i) => (
                        <div
                            key={i}
                            className="flex gap-2 w-full items-center mt-1"
                        >
                            <input
                                type="text"
                                value={item.eng}
                                name="eng"
                                placeholder="english"
                                onChange={(e) => handleInputChange(i, e)}
                                className="flex-1 outline-none border-2 border-dark-border bg-transparent p-2 rounded-lg placeholder:text-dark-border text-dark-text-white font-semibold caret-dark-text-white"
                            />
                            <input
                                type="text"
                                value={item.tr}
                                name="tr"
                                placeholder="türkçe"
                                onChange={(e) => handleInputChange(i, e)}
                                className="flex-1 outline-none border-2 border-dark-border bg-transparent p-2 rounded-lg placeholder:text-dark-border text-dark-text-white font-semibold caret-dark-text-white"
                            />
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="w-4 h-4 flex items-center justify-center"
                            >
                                <svg
                                    id="fi_2976286"
                                    enableBackground="new 0 0 320.591 320.591"
                                    height="512"
                                    viewBox="0 0 320.591 320.591"
                                    width="512"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 fill-white"
                                >
                                    <g>
                                        <g id="close_1_">
                                            <path d="m30.391 318.583c-7.86.457-15.59-2.156-21.56-7.288-11.774-11.844-11.774-30.973 0-42.817l257.812-257.813c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875l-259.331 259.331c-5.893 5.058-13.499 7.666-21.256 7.288z"></path>
                                            <path d="m287.9 318.583c-7.966-.034-15.601-3.196-21.257-8.806l-257.813-257.814c-10.908-12.738-9.425-31.908 3.313-42.817 11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414-6.35 5.522-14.707 8.161-23.078 7.288z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                <div>
                    <button
                        onClick={() =>
                            setGuide((prev) => [
                                ...prev,
                                {
                                    eng: "",
                                    tr: "",
                                    id: Math.random(),
                                },
                            ])
                        }
                        className="btn mt-5 w-full border border-light-blue hover:bg-light-blue text-dark-text-white"
                    >
                        Add Guide
                    </button>
                </div>

                <div className="flex flex-col gap-2 flex-wrap mt-8">
                    <label
                        htmlFor="sectionName"
                        className="text-dark-text-title font-bold text-base mb-2"
                    >
                        Unit Color
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
                    Add Unit
                </button>
            </div>
        </div>
    );
};

export default AddUnit;
