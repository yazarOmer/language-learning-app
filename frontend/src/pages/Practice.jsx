import React from "react";
import { useNavigate } from "react-router-dom";
import {
    getListeningQuiz,
    getMistakes,
    resetActions,
} from "../features/actions/actionsSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Practice = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { lifePoint } = useSelector((state) => state.actions);

    const buttonMistake = async () => {
        if (lifePoint == 0) {
            toast.error("Derse başlamak için yeterli canın yok");
        } else {
            await dispatch(getMistakes());
            await dispatch(resetActions());
            navigate(`/mistakes`);
        }
    };

    const buttonListening = async () => {
        if (lifePoint == 0) {
            toast.error("Derse başlamak için yeterli canın yok");
        } else {
            await dispatch(getListeningQuiz());
            await dispatch(resetActions());
            navigate(`/listening`);
        }
    };

    return (
        <div className="flex flex-col flex-1 items-center mx-auto mt-5 ">
            <h1 className="text-center text-2xl font-bold mt-10 text-dark-text-white mb-5">
                Alıştırma Yap
            </h1>

            <button
                onClick={() => buttonMistake()}
                className="w-[500px] flex flex-col group py-3 mb-2 rounded-2xl border border-dark-border hover:bg-dark-border/75 px-3 justify-between"
            >
                <h1 className="text-lg text-dark-text-white font-bold">
                    Hatalar
                </h1>
                <p className="text-dark-border group-hover:text-dark-text-white">
                    Hatalarını gözden geçir
                </p>
            </button>

            <button
                onClick={() => buttonListening()}
                className="w-[500px] flex flex-col group py-3 mb-2 rounded-2xl border border-dark-border hover:bg-dark-border/75 px-3 justify-between"
            >
                <h1 className="text-lg text-dark-text-white font-bold">
                    Dinleme Çalışması
                </h1>
                <p className="text-dark-border group-hover:text-dark-text-white">
                    Daha zor dinleme çalışmalarıyla yüzleş
                </p>
            </button>
        </div>
    );
};

export default Practice;
