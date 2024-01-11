import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getQuiz, resetQuiz } from "../features/quiz/quizSlice";

const QuizButton = ({ quiz, order, color }) => {
    const [showCard, setShowCard] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const buttonHandle = async (id) => {
        await dispatch(getQuiz(id));
        await dispatch(resetQuiz());
        navigate(`/lesson/${id}`);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setShowCard((prev) => !prev)}
                className={`w-[75px] h-[75px] my-2 bg-[${color}]  rounded-full flex items-center justify-center font-bold text-dark-text-white text-lg`}
            >
                {order}
            </button>
            {showCard && (
                <div
                    className={`absolute w-[300px] h-[150px] flex flex-col justify-between left-[-100px] bg-[${color}] z-10 rounded-xl p-3 border-2 border-dark-text-white`}
                >
                    <h2 className="text-dark-text-white font-bold text-lg">
                        {quiz.title}
                    </h2>

                    <button
                        onClick={() => buttonHandle(quiz._id)}
                        className={`bg-dark-text-white w-full text-center py-2 rounded-lg font-bold `}
                    >
                        BAŞLA
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizButton;
