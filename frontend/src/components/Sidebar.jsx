import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import {
    getUserStats,
    getUsersByPoints,
    resetActions,
} from "../features/actions/actionsSlice";

const Sidebar = () => {
    const { gem, lifePoint, isLoading, leaderboard } = useSelector(
        (state) => state.actions
    );
    const [time, setTime] = useState(0);
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const fetchData = async () => {
        await dispatch(getUserStats());
        await dispatch(resetActions());
        await dispatch(getUsersByPoints());
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (user.isAdmin) {
        return <></>;
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="fixed right-0 top-0 w-[400px] h-screen ml-auto flex flex-col border-l-2 py-6 px-5 border-dark-border">
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
            <div className="border rounded-lg px-5 py-5 mt-3 border-dark-text-white/50">
                <h2 className="text-dark-text-white font-bold">Puan Tablosu</h2>
                <div className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-dark-border">
                    <span className="text-dark-text-white/40">
                        {leaderboard.map((lboard, i) =>
                            lboard._id == user._id ? i + 1 : ""
                        )}
                        . Sıradasın
                    </span>
                    <span className="text-dark-text-white/80 font-bold">
                        {leaderboard.map((lboard) =>
                            lboard._id == user._id ? lboard.point : ""
                        )}{" "}
                        Puan
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
