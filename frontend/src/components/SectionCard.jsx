import React from "react";

const SectionCard = ({ section, index }) => {
    return (
        <div
            className={`w-[600px] h-[200px] px-5 rounded-xl bg-[${section.color}] flex items-center justify-between`}
        >
            <div className="h-full  mt-12">
                <h1 className="text-2xl text-dark-text-title font-bold">
                    {index + 1}. Bölüm: {section.name}
                </h1>
                <h2 className="text-xl text-dark-text-white/75 font-semibold">
                    {section.units.length} Ünite
                </h2>
                <button
                    className={`bg-white px-4 py-2 rounded-xl mt-10 font-bold text-dark-bg-hover`}
                >
                    Devam Et
                </button>
            </div>
            <img src={section.image} className="w-[150px] h-[150px]" alt="" />
        </div>
    );
};

export default SectionCard;
