import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile, resetActions } from "../features/actions/actionsSlice";

const Profile = () => {
    const dispatch = useDispatch();

    const fetchProfile = async () => {
        await dispatch(getProfile());
        await dispatch(resetActions());
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const user = JSON.parse(localStorage.getItem("user"));

    const date = new Date(user.createdAt).toLocaleDateString();

    return (
        <div className="flex-1 items-center mx-auto mt-10 flex flex-col gap-3">
            <h1 className="text-center text-2xl font-bold text-dark-text-white mb-5 mt-10">
                Profil
            </h1>
            <div className="w-[60%] p-5 flex justify-between items-center gap-1 rounded-2xl border border-dark-border ">
                <div>
                    <h2 className="text-xl font-bold text-dark-text-white capitalize">
                        {user.name}
                    </h2>
                    <p className="text-dark-border font-semibold">
                        {user.email}
                    </p>
                    <p className="text-dark-border font-semibold">
                        {date} tarihinde katıldı
                    </p>
                </div>
                <div>
                    <p className="border border-dashed rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold text-dark-text-white capitalize">
                        {user.name.split("")[0]}
                    </p>
                </div>
            </div>
            <div className="w-[60%] p-5 flex items-center gap-2  border-t border-dark-border">
                <div className="flex items-center gap-2 border border-dark-border rounded-lg px-3 py-4 flex-1">
                    <img src="/gem.svg" className="h-7 w-7" alt="" />
                    <p className="text-lg font-bold text-dark-text-white/40">
                        <span className="text-dark-text-white/75">
                            {user.gem}
                        </span>{" "}
                        Mücevher
                    </p>
                </div>
                <div className="flex items-center gap-2 border border-dark-border rounded-lg px-3 py-4 flex-1">
                    <img src="/star.svg" className="h-7 w-7" alt="" />
                    <p className="text-lg font-bold text-dark-text-white/40">
                        <span className="text-dark-text-white/75">
                            {user.point}
                        </span>{" "}
                        Toplam Puan
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
