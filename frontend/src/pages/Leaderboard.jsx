import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getUsersByPoints,
    resetActions,
} from "../features/actions/actionsSlice";

const Leaderboard = () => {
    const dispatch = useDispatch();
    const { leaderboard } = useSelector((state) => state.actions);
    const fetchUsers = async () => {
        await dispatch(getUsersByPoints());
        await dispatch(resetActions());
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="flex-1 items-center mx-auto mt-5 flex flex-col gap-3">
            <div className="mt-10">
                <h1 className="text-center text-2xl font-bold text-dark-text-white mb-5">
                    Puan Tablosu
                </h1>
                {leaderboard.map((user, i) => (
                    <div className="w-[450px] flex py-3 mb-2 rounded-2xl border border-dark-text-white/75 hover:bg-dark-border/75 items-center justify-between">
                        <div className="flex items-center gap-5">
                            <span className="text-lg text-dark-text-white font-bold ml-5">
                                {i + 1}
                            </span>
                            <p className="w-[50px] h-[50px] flex items-center justify-center text-dark-text-title font-bold capitalize rounded-full border border-dashed border-dark-text-white">
                                {user.name.split("")[0]}
                            </p>
                            <p className="text-lg font-bold text-dark-text-white">
                                {user.name}
                            </p>
                        </div>
                        <span className="text-dark-text-white mr-5">
                            {user.point} puan
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
