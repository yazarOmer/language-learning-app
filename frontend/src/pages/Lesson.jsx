import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz, resetQuiz } from "../features/quiz/quizSlice";
import WriteMissingWord from "../components/WriteMissingWord";
import ProgressBar from "../components/ProgressBar";
import TouchWhatYouHear from "../components/TouchWhatYouHear";
import WriteThisInTurkish from "../components/WriteThisInTurkish";

const Lesson = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const fetchQuiz = async (id) => {
        await dispatch(getQuiz(id));
        await dispatch(resetQuiz());
    };

    const { questions } = useSelector((state) => state.quiz.selectedQuiz);
    const { lifePoint } = useSelector((state) => state.actions);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetchQuiz(id);
    }, [id]);

    return (
        <div className="w-2/4 mx-auto  h-screen flex flex-col">
            <div className="flex gap-3 mt-16 items-center justify-between">
                <NavLink to="/learn">
                    <svg
                        className="w-6 h-6 fill-dark-border"
                        id="fi_3114883"
                        height="512"
                        viewBox="0 0 24 24"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 2"
                    >
                        <path d="m22 11h-17.586l5.293-5.293a1 1 0 1 0 -1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414l-5.293-5.293h17.586a1 1 0 0 0 0-2z"></path>
                    </svg>
                </NavLink>
                <ProgressBar
                    currentProgress={currentQuestion}
                    fullProgress={questions.length}
                />
                <div className="flex gap-2 items-center hover:bg-dark-border rounded-lg transition p-2">
                    <img src="/heart.svg" className="w-5 h-5" alt="" />
                    <span className="text-light-blue font-bold text-xl">
                        {lifePoint}
                    </span>
                </div>
            </div>

            {(questions[currentQuestion].questionType == "writeMissingWord" && (
                <WriteMissingWord
                    question={questions[currentQuestion]}
                    changeQuestion={setCurrentQuestion}
                    questionIndex={currentQuestion}
                    questionLength={questions.length}
                    score={score}
                    setScore={setScore}
                />
            )) ||
                (questions[currentQuestion].questionType ==
                    "touchWhatYouHear" && (
                    <TouchWhatYouHear
                        question={questions[currentQuestion]}
                        changeQuestion={setCurrentQuestion}
                        questionIndex={currentQuestion}
                        questionLength={questions.length}
                        score={score}
                        setScore={setScore}
                    />
                )) ||
                (questions[currentQuestion].questionType ==
                    "writeThisInTurkish" && (
                    <WriteThisInTurkish
                        question={questions[currentQuestion]}
                        changeQuestion={setCurrentQuestion}
                        questionIndex={currentQuestion}
                        questionLength={questions.length}
                        score={score}
                        setScore={setScore}
                    />
                ))}
        </div>
    );
};

export default Lesson;
