import React, { useEffect, useState } from "react";

const WriteMissingWord = ({ question }) => {
    const [answer, setAnswer] = useState("");

    const [utterance, setUtterance] = useState(null);
    const [voice, setVoice] = useState(null);
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [volume, setVolume] = useState(0.5);

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

    return (
        <div className="p-10 flex flex-col h-screen">
            <h2 className="font-bold text-3xl text-dark-text-white">
                {question.questionType == "writeMissingWord"
                    ? "Eksik Kelimeyi Yaz"
                    : ""}
            </h2>

            <div className="mt-16 ml-4 flex items-start">
                <img src="/man.svg" className="w-24 h-24" />
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

            <div className="w-full h-32 bg-slate-700 rounded-2xl p-2 flex gap-1">
                {question.questionData.words.map((word) =>
                    word !== "" ? (
                        <p className="text-dark-text-title font-semibold">
                            {word}
                        </p>
                    ) : (
                        <input
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="h-min w-20 bg-transparent border-b-2 border-light-blue outline-none text-dark-text-title"
                        />
                    )
                )}
            </div>

            <div className=" flex justify-between mt-auto  items-center mb-2">
                <button className="px-7 py-3 border-2 border-dark-border text-dark-border font-bold rounded-xl">
                    GEÇ
                </button>
                <button
                    className={`px-7 py-3 border-2 border-dark-border rounded-xl font-bold transition ${
                        answer == ""
                            ? "bg-dark-border text-dark-bg-hover"
                            : "bg-[#58cc02] "
                    }`}
                >
                    KONTROL ET
                </button>
            </div>
        </div>
    );
};

export default WriteMissingWord;
