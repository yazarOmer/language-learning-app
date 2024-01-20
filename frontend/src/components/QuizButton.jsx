import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getQuiz, resetQuiz } from "../features/quiz/quizSlice";
import { toast } from "react-toastify";

const QuizButton = ({ quiz, order, color }) => {
    const [showCard, setShowCard] = useState(false);
    const { lifePoint } = useSelector((state) => state.actions);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const buttonHandle = async (id) => {
        if (lifePoint == 0) {
            toast.error("Derse başlamak için yeterli canın yok");
        } else {
            await dispatch(getQuiz(id));
            await dispatch(resetQuiz());
            navigate(`/lesson/${id}`);
        }
    };

    return (
        <div className="relative">
            <button
                onClick={() => setShowCard((prev) => !prev)}
                className={`w-[75px] h-[75px] my-2 bg-[${color}]  rounded-full flex items-center justify-center font-bold text-dark-text-white text-lg`}
            >
                {order + 1}
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
