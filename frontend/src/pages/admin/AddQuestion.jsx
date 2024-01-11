import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUnits, resetUnit } from "../../features/unit/unitSlice";
import Loading from "../../components/Loading.jsx";
import {
    appendQuestion,
    getAllQuizzes,
    resetQuiz,
} from "../../features/quiz/quizSlice.js";
import QuestionInput from "../../components/QuestionInput.jsx";

const AddQuestion = () => {
    const [sectionId, setSectionId] = useState("");
    const [unitId, setUnitId] = useState("");
    const [quizId, setQuizId] = useState("");
    const [questionType, setQuestionType] = useState("");
    const [questionSentence, setQestionSentence] = useState("");
    const [words, setWords] = useState([]);

    const { isLoading, sections } = useSelector((state) => state.section);
    const { units } = useSelector((state) => state.unit);
    const { quizzes } = useSelector((state) => state.quiz);

    const data = {
        quizId,
        questionType,
        questionSentence,
        words,
    };
    const submitHandler = async () => {
        console.log(data);
        dispatch(appendQuestion(data));
        dispatch(resetQuiz());
        setSectionId("");
        setUnitId("");
        setQuizId("");
        setQuestionType("");
        setQestionSentence("");
        setWords([]);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        if (sectionId !== "") {
            dispatch(getAllUnits(sectionId));
            dispatch(resetUnit());
        }

        if (unitId !== "") {
            dispatch(getAllQuizzes(sectionId));
            dispatch(resetQuiz());
        }
    }, [sectionId, unitId]);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="w-[600px] h-screen scroll-auto flex flex-col items-center justify-center mx-auto">
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

            {unitId !== "" && (
                <div className="flex flex-col w-full mb-3 mt-2">
                    <label
                        htmlFor="unitId"
                        className="text-dark-text-title font-bold text-base mb-2"
                    >
                        Ders Seç
                    </label>
                    <select
                        name="unitId"
                        id="unitId"
                        value={quizId}
                        onChange={(e) => setQuizId(e.target.value)}
                        className="p-2 bg-transparent border-2 rounded-md border-dark-border text-dark-text-white"
                    >
                        <option value="" className=" bg-dark-bg">
                            Ünite Seç
                        </option>
                        {quizzes
                            .filter((q) => q.unitId == unitId)
                            .map((quiz, i) => (
                                <option
                                    key={i}
                                    value={quiz._id}
                                    className=" bg-dark-bg"
                                >
                                    {quiz.title}
                                </option>
                            ))}
                    </select>
                </div>
            )}

            {quizId !== "" && (
                <div className="flex flex-col w-full mb-3 mt-2">
                    <label
                        htmlFor="unitId"
                        className="text-dark-text-title font-bold text-base mb-2"
                    >
                        Soru Tipi Seç
                    </label>
                    <select
                        name="unitId"
                        id="unitId"
                        value={questionType}
                        onChange={(e) => setQuestionType(e.target.value)}
                        className="p-2 bg-transparent border-2 rounded-md border-dark-border text-dark-text-white"
                    >
                        <option value="" className=" bg-dark-bg">
                            Soru Tip Seç
                        </option>
                        <option value="touchWhatYouHear" className="bg-dark-bg">
                            İşittiğine Dokun
                        </option>
                        <option value="writeMissingWord" className="bg-dark-bg">
                            Eksik Kelimeyi Yaz
                        </option>
                        <option
                            value="writeThisInTurkish"
                            className="bg-dark-bg"
                        >
                            Bunu Türkçe Yaz
                        </option>
                    </select>
                </div>
            )}

            {questionType !== "" && (
                <QuestionInput
                    words={words}
                    wordsChangeHandler={setWords}
                    questionSentence={questionSentence}
                    questionSentenceChange={setQestionSentence}
                />
            )}

            <button
                onClick={submitHandler}
                className="btn mt-5 w-full border border-light-blue hover:bg-light-blue text-dark-text-white"
            >
                Soru Ekle
            </button>
        </div>
    );
};

export default AddQuestion;
