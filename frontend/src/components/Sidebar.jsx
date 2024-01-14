import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import { getUserStats, resetActions } from "../features/actions/actionsSlice";

const Sidebar = () => {
    const { gem, lifePoint, isLoading } = useSelector((state) => state.actions);
    const [time, setTime] = useState(0);
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const fetchData = async () => {
        await dispatch(getUserStats());
        await dispatch(resetActions());
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
        </div>
    );
};

export default Sidebar;
