import React from "react";

const ProgressBar = ({ currentProgress, fullProgress }) => {
    return (
        <div className="w-full bg-dark-border h-6 mt-16 rounded-full">
            <div
                style={{
                    width: `${Math.floor(
                        (100 / fullProgress) * currentProgress
                    )}%`,
                    transition: "width 0.3s",
                }}
                className={`h-full bg-[#58cc02] rounded-full`}
            ></div>
        </div>
    );
};

export default ProgressBar;
