import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    decreaseLifePoint,
    resetActions,
    updateUserPoint,
    updateScore,
    appendMistake,
    deleteMistake,
} from "../features/actions/actionsSlice";
import LifePointModal from "./LifePointModal";

const TouchWhatYouHear = ({
    question,
    changeQuestion,
    questionIndex,
    questionLength,
    isMistake,
}) => {
    const [answer, setAnswer] = useState([]);
    const [words, setWords] = useState([...question.questionData.words]);
    const [isAnswerTrue, setIsAnswerTrue] = useState(false);
    const [isAnswerFalse, setIsAnswerFalse] = useState(false);
    const [lp, setLp] = useState(true);
    const { currentScore, lifePoint, mistakes } = useSelector(
        (state) => state.actions
    );

    const [utterance, setUtterance] = useState(null);
    const [voice, setVoice] = useState(null);
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [volume, setVolume] = useState(1);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePlay = () => {
        const synth = window.speechSynthesis;

        utterance.voice = voice;
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = volume;
        synth.speak(utterance);
    };

    const handleSlowPlay = () => {
        const synth = window.speechSynthesis;

        utterance.voice = voice;
        utterance.pitch = pitch;
        utterance.rate = 0.3;
        utterance.volume = volume;
        synth.speak(utterance);
    };

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(
            question.questionData.questionSentence
        );
        u.lang = "en-US";
        setUtterance(u);
        const voices = synth.getVoices();
        u.voice = voices[2];
        setVoice(voices[2]);

        synth.addEventListener("voiceschanged", () => {
            const voices = synth.getVoices();
            setVoice(voices[2]);
        });

        synth.speak(u);

        return () => {
            synth.cancel();
            synth.removeEventListener("voiceschanged", () => {
                setVoice(voices[4]);
            });
        };
    }, [question.questionData.questionSentence]);

    const addAnswer = (word, i) => {
        setAnswer((prev) => [...prev, word]);
        words.splice(i, 1);
    };

    const removeAnswer = (word, i) => {
        setWords((prev) => [...prev, word]);
        answer.splice(i, 1);
    };

    const updatePoint = async () => {
        if (
            questionIndex == questionLength - 1 ||
            (isMistake && mistakes.length == 0)
        ) {
            await dispatch(updateUserPoint({ score: currentScore }));
            await dispatch(resetActions());
            if (isMistake) {
                navigate("/practice");
            } else {
                navigate("/learn");
            }
        } else {
            changeQuestion((prev) => prev + 1);
        }
    };

    const checkAnswer = async () => {
        if (
            answer.join(" ").toLowerCase() ==
            question.questionData.questionSentence.toLowerCase()
        ) {
            dispatch(updateScore());
            {
                isMistake ? await dispatch(deleteMistake(question._id)) : null;
            }
            setIsAnswerTrue(true);
            setIsAnswerFalse(false);
        } else {
            {
                !isMistake ? await dispatch(appendMistake(question)) : null;
            }
            {
                !isMistake ? await dispatch(resetActions()) : null;
            }
            await dispatch(decreaseLifePoint());
            await dispatch(resetActions());
            setIsAnswerFalse(true);
            setIsAnswerTrue(false);
        }
    };

    if (lifePoint == 0) {
        return <LifePointModal />;
    }

    return (
        <div className="p-10 flex flex-col h-screen">
            <h2 className="font-bold text-3xl text-dark-text-white">
                {"İşittiğine dokun"}
            </h2>

            <div className="mt-16 ml-4 flex items-start justify-center  pb-5">
                <img src="/woman.svg" className="w-24 h-24" />
                <button
                    onClick={() => handlePlay()}
                    className="p-3 ml-3 border-2 border-dark-border rounded-xl rounded-e-none"
                >
                    <img src="/volume.svg" className="w-10 h-10" alt="" />
                </button>
                <button
                    onClick={() => handleSlowPlay()}
                    className="p-3 border-2 border-dark-border border-l-0 rounded-xl rounded-s-none"
                >
                    <img src="/volume.svg" className="w-6 h-6" alt="" />
                </button>
            </div>

            <div className="w-full min-h-[60px] max-h-40 border-y border-dark-border py-2 px-5 flex flex-wrap gap-2">
                {answer.map((ans, i) => (
                    <button
                        key={i}
                        onClick={() => removeAnswer(ans, i)}
                        className="p-2 border-2  border-dark-border rounded-md h-min text-dark-text-white"
                    >
                        {ans}
                    </button>
                ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2 w-5/6 mx-auto">
                {words.map((word, i) => (
                    <button
                        key={i}
                        onClick={() => addAnswer(word, i)}
                        className="p-2 border-2  border-dark-border rounded-md h-min text-dark-text-white"
                    >
                        {word}
                    </button>
                ))}
            </div>

            {isAnswerTrue && (
                <div className=" flex justify-between mt-auto bg-[#58cc02] rounded-xl  items-center mb-2">
                    <p className="text-dark-text-white font-bold ml-3">
                        DOĞRU CEVAP
                    </p>
                    <button
                        onClick={() => updatePoint()}
                        className={`px-7 py-3 border-2 disabled:cursor-not-allowed border-dark-border rounded-xl font-bold transition `}
                    >
                        SONRAKİ SORU
                    </button>
                </div>
            )}
            {isAnswerFalse && (
                <div className=" flex justify-between mt-auto bg-red-500 rounded-xl  items-center mb-2">
                    <p className="text-dark-text-white font-bold ml-3">
                        YANLIŞ CEVAP
                    </p>
                    <button
                        onClick={() => updatePoint()}
                        className={`px-7 py-3 border-2 disabled:cursor-not-allowed border-dark-border rounded-xl font-bold transition `}
                    >
                        SONRAKİ SORU
                    </button>
                </div>
            )}
            {!isAnswerFalse && !isAnswerTrue && (
                <div className=" flex justify-between mt-auto  items-center mb-2">
                    <button
                        onClick={() => changeQuestion((prev) => prev + 1)}
                        disabled={questionIndex == questionLength - 1}
                        className="px-7 py-3 border-2 disabled:cursor-not-allowed border-dark-border text-dark-border font-bold rounded-xl hover:bg-dark-border hover:text-dark-bg-hover transition"
                    >
                        GEÇ
                    </button>
                    <button
                        disabled={answer.length == 0}
                        onClick={() => checkAnswer()}
                        className={`px-7 py-3 border-2 disabled:cursor-not-allowed border-dark-border rounded-xl font-bold transition ${
                            answer.length == 0
                                ? "bg-dark-border text-dark-bg-hover"
                                : "bg-[#58cc02] border-none"
                        }`}
                    >
                        KONTROL ET
                    </button>
                </div>
            )}
        </div>
    );
};

export default TouchWhatYouHear;
