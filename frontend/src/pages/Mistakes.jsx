import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMistakes, resetActions } from "../features/actions/actionsSlice";
import Loading from "../components/Loading";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import WriteMissingWord from "../components/WriteMissingWord";
import TouchWhatYouHear from "../components/TouchWhatYouHear";
import WriteThisInTurkish from "../components/WriteThisInTurkish";

const Mistakes = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, mistakes, lifePoint } = useSelector(
        (state) => state.actions
    );
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const fetchMistakes = async () => {
        await dispatch(getMistakes());
        await dispatch(resetActions());
    };

    useEffect(() => {
        fetchMistakes();

        if (mistakes.length == 0) {
            navigate("/practice");
        }
    }, []);

    if (mistakes.length == 0) {
        navigate("/practice");
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="w-2/4 mx-auto  h-screen flex flex-col">
            <div className="flex gap-3 mt-16 items-center justify-between">
                <Link to="/practice">
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
                </Link>
                <ProgressBar
                    currentProgress={currentQuestion}
                    fullProgress={mistakes.length}
                />
                <div className="flex gap-2 items-center hover:bg-dark-border rounded-lg transition p-2">
                    <img src="/heart.svg" className="w-5 h-5" alt="" />
                    <span className="text-light-blue font-bold text-xl">
                        {lifePoint}
                    </span>
                </div>
            </div>

            {(mistakes[currentQuestion]?.questionType == "writeMissingWord" && (
                <WriteMissingWord
                    question={mistakes[currentQuestion]}
                    changeQuestion={setCurrentQuestion}
                    questionIndex={currentQuestion}
                    questionLength={mistakes.length}
                    isMistake={true}
                />
            )) ||
                (mistakes[currentQuestion]?.questionType ==
                    "touchWhatYouHear" && (
                    <TouchWhatYouHear
                        question={mistakes[currentQuestion]}
                        changeQuestion={setCurrentQuestion}
                        questionIndex={currentQuestion}
                        questionLength={mistakes.length}
                        isMistake={true}
                    />
                )) ||
                (mistakes[currentQuestion]?.questionType ==
                    "writeThisInTurkish" && (
                    <WriteThisInTurkish
                        question={mistakes[currentQuestion]}
                        changeQuestion={setCurrentQuestion}
                        questionIndex={currentQuestion}
                        questionLength={mistakes.length}
                        isMistake={true}
                    />
                ))}
        </div>
    );
};

export default Mistakes;
