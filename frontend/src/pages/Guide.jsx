import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import GuideCard from "../components/GuideCard";

const Guide = () => {
    const { selectedUnit } = useSelector((state) => state.unit);

    return (
        <div className="flex-1 items-center mx-auto mt-5 flex flex-col ">
            <div className="w-[600px] sticky top-0 bg-dark-bg flex items-center py-5 border-b-2 border-dark-border">
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
                <h1 className="m-auto font-bold text-lg text-dark-border">
                    {selectedUnit?.name}
                </h1>
            </div>

            <div className="border-b-2 py-5 border-dark-border w-[600px]">
                <h1 className="text-dark-text-white text-2xl font-bold mb-2">{`${selectedUnit?.name} Ünitesi Rehberi`}</h1>
                <p className="text-dark-text-white">
                    Bu ünitenin dil bilgisi ipuçlarını öğren ve anahtar
                    ifadeleri gör
                </p>
            </div>

            <div className="border-b-2 py-5 border-dark-border w-[600px]">
                {selectedUnit?.guide?.map((card, i) => (
                    <GuideCard key={i} content={card} />
                ))}
            </div>
        </div>
    );
};

export default Guide;
