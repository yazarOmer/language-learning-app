import React from "react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center z-10 h-screen w-screen bg-black/25">
            <div className="w-10 h-10 rounded-full border-2 border-light-blue border-r-dark-text-white animate-spin"></div>
        </div>
    );
};

export default Loading;
