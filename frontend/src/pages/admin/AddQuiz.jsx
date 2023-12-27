import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllSections,
    resetSection,
} from "../../features/section/sectionSlice.js";
import { getAllUnits, resetUnit } from "../../features/unit/unitSlice";
import Loading from "../../components/Loading.jsx";
import WriteMissingWord from "../../components/WriteMissingWord.jsx";
import WriteThisInTurkish from "../../components/WriteThisInTurkish.jsx";
import TouchWhatYouHear from "../../components/TouchWhatYouHear.jsx";

const AddQuiz = () => {
    const [sectionId, setSectionId] = useState("");
    const [unitId, setUnitId] = useState("");
    const [title, setTitle] = useState("");
    const [questionType, setQuestionType] = useState("");
    const [questions, setQuestions] = useState([]);

    const [questionAnswer, setQuestionAnswer] = useState("");
    const [questionWords, setQuestionWords] = useState([""]);

    const { isLoading, sections } = useSelector((state) => state.section);
    const { units } = useSelector((state) => state.unit);

    const types = ["Eksik Sözcüğü Seç", "İşittiğine Dokun", "Bunu Türkçe Yaz"];

    const dispatch = useDispatch();

    useEffect(() => {
        if (sectionId !== "") {
            dispatch(getAllUnits(sectionId));
            dispatch(resetUnit());
        }
    }, [sectionId]);

    const submitHandler = () => {
        console.log(sectionId, unitId, title, questionAnswer, questionWords);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="w-[600px] h-screen flex flex-col items-center justify-center mx-auto">
            <div className="flex flex-col w-full mb-3 mt-2">
                <label
                    htmlFor="sectionId"
                    className="text-dark-text-title font-bold text-base mb-2"
                >
                    Bölüm Seç
                </label>
                <select
                    name="sectionId"
                    id="sectionId"
                    value={sectionId}
                    onChange={(e) => setSectionId(e.target.value)}
                    className="p-2 bg-transparent border-2 rounded-md border-dark-border text-dark-text-white"
                >
                    <option value="" className=" bg-dark-bg">
                        Bölüm Seç
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

            {sectionId !== "" && (
                <div className="flex flex-col w-full mb-3 mt-2">
                    <label
                        htmlFor="unitId"
                        className="text-dark-text-title font-bold text-base mb-2"
                    >
                        Ünite Seç
                    </label>
                    <select
                        name="unitId"
                        id="unitId"
                        value={unitId}
                        onChange={(e) => setUnitId(e.target.value)}
                        className="p-2 bg-transparent border-2 rounded-md border-dark-border text-dark-text-white"
                    >
                        <option value="" className=" bg-dark-bg">
                            Ünite Seç
                        </option>
                        {units.map((unit, i) => (
                            <option
                                key={i}
                                value={unit._id}
                                className=" bg-dark-bg"
                            >
                                {unit.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div className="flex flex-col w-full mb-3 mt-2">
                <label
                    htmlFor="sectionName"
                    className="text-dark-text-title font-bold text-base mb-2"
                >
                    Quiz Adı
                </label>
                <input
                    type="text"
                    name="sectionName"
                    id="sectionName"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ders Adı"
                    className="outline-none border-2 border-dark-border bg-transparent p-2 rounded-lg placeholder:text-dark-border text-dark-text-white font-semibold caret-dark-text-white"
                />
            </div>

            <div className="flex flex-col w-full mb-3 mt-2">
                <label
                    htmlFor="questionType"
                    className="text-dark-text-title font-bold text-base mb-2"
                >
                    Soru Tipi Seç
                </label>
                <select
                    name="questionType"
                    id="questionType"
                    value={questionType}
                    onChange={(e) => setQuestionType(e.target.value)}
                    className="p-2 bg-transparent border-2 rounded-md border-dark-border text-dark-text-white"
                >
                    <option value="" className=" bg-dark-bg">
                        Soru Tipi Seç
                    </option>
                    {types.map((type, i) => (
                        <option key={i} value={type} className=" bg-dark-bg">
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            {questionType !== "" && questionType == "Eksik Sözcüğü Seç" && (
                <WriteMissingWord
                    answer={questionAnswer}
                    changeAnswer={setQuestionAnswer}
                    words={questionWords}
                    changeWords={setQuestionWords}
                />
            )}
            {questionType !== "" && questionType == "İşittiğine Dokun" && (
                <TouchWhatYouHear />
            )}
            {questionType !== "" && questionType == "Bunu Türkçe Yaz" && (
                <WriteThisInTurkish />
            )}

            <button
                onClick={() => submitHandler()}
                className="btn mt-5 w-full border border-light-blue hover:bg-light-blue text-dark-text-white"
            >
                Add Quiz
            </button>
        </div>
    );
};

export default AddQuiz;
