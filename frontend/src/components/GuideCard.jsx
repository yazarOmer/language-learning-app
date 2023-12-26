import React, { useEffect, useState } from "react";

const GuideCard = ({ content }) => {
    const [utterance, setUtterance] = useState(null);
    const [voice, setVoice] = useState(null);
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(content.eng);
        setUtterance(u);
        const voices = synth.getVoices();
        setVoice(voices[4]);

        synth.addEventListener("voiceschanged", () => {
            const voices = synth.getVoices();
            setVoice(voices[4]);
        });

        return () => {
            synth.cancel();
            synth.removeEventListener("voiceschanged", () => {
                setVoice(voices[4]);
            });
        };
    }, [content.eng]);

    const handlePlay = () => {
        const synth = window.speechSynthesis;

        utterance.voice = voice;
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = volume;
        synth.speak(utterance);
    };

    return (
        <div className="border-2 border-dark-border w-max py-3 px-5 flex items-center gap-2 rounded-2xl mb-3">
            <button className="p-2" onClick={() => handlePlay()}>
                <img src="/volume.svg" className="w-6 h-6" alt="" />
            </button>
            <div className="">
                <p className="text-dark-text-white border-b border-dashed mb-1 font-semibold">
                    {content.eng}
                </p>
                <p className="text-dark-border font-semibold">{content.tr}</p>
            </div>
        </div>
    );
};

export default GuideCard;
