import React from "react";
import { useNavigate } from "react-router-dom";

const LifePointModal = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center absolute inset-0 z-10 h-screen w-screen bg-black/25">
            <div className=" bg-dark-border p-3 rounded-lg w-[250px] flex flex-col justify-center-center gap-4">
                <p className="text-lg text-dark-text-white font-bold text-center">
                    0 Canın Kaldı... Mağazadan can satın almayı dene...
                </p>
                <button
                    onClick={() => navigate("/shop")}
                    className="bg-yellow-600 px-4 py-2 rounded-md"
                >
                    Mağazaya Git
                </button>
            </div>
        </div>
    );
};

export default LifePointModal;
