import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const { gem, lifePoint } = useSelector((state) => state.actions);
    const [time, setTime] = useState(0);

    useEffect(() => {}, []);

    return (
        <div className="fixed right-0 top-0 w-[400px] h-screen ml-auto flex flex-col border-l-2 py-6 px-3 border-dark-border">
            <div className="w-full px-5 flex justify-between items-center">
                <div className="flex gap-2 items-center hover:bg-dark-border rounded-lg transition p-2">
                    <img src="/gem.svg" className="w-5 h-5" alt="" />
                    <span className="text-light-blue font-bold text-xl">
                        {gem}
                    </span>
                </div>
                <div className="flex gap-2 items-center hover:bg-dark-border rounded-lg transition p-2">
                    <img src="/heart.svg" className="w-5 h-5" alt="" />
                    <span className="text-light-blue font-bold text-xl">
                        {lifePoint}
                    </span>
                </div>
            </div>
            <p>{time}</p>
        </div>
    );
};

export default Sidebar;
