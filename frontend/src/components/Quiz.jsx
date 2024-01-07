import React from "react";

const Quiz = ({ quiz, order, color }) => {
    return (
        <button
            className={`w-[75px] h-[75px] my-2 bg-[${color}]  rounded-full flex items-center justify-center font-bold text-dark-text-white text-lg`}
        >
            {order}
        </button>
    );
};

export default Quiz;
