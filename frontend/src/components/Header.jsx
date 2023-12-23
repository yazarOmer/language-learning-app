import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const userMenu = [
        { title: "Öğren", to: "/learn", id: 1 },
        { title: "Alıştırma Yap", to: "/practice", id: 2 },
        { title: "Puan Tabloları", to: "/leaderboard", id: 3 },
        { title: "Mağaza", to: "/shop", id: 4 },
        { title: "Profil", to: `/profile/${user._id}`, id: 5 },
    ];

    const adminMenu = [
        { title: "Kısım Ekle", to: "/admin/section", id: 7 },
        { title: "Ünite Ekle", to: "/admin/unit", id: 8 },
    ];

    const logoutHandler = async () => {
        await dispatch(logout());
        await dispatch(reset());
        navigate("/");
    };

    const menu = user.isAdmin === true ? [...adminMenu] : [...userMenu];
    return (
        <header className="flex flex-col border-r-2 py-6 px-3 border-dark-border h-screen w-[250px]">
            <h1 className="font-bold text-3xl text-light-blue">LangEasy</h1>

            <nav className="mt-9 flex flex-col w-full gap-2">
                {menu.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.to}
                        className={({ isActive }) =>
                            isActive
                                ? "border-2 border-active-border w-full py-3.5 bg-light-blue/10 hover:bg-dark-bg-hover uppercase rounded-xl px-4 font-bold text-dark-text-white  text-sm"
                                : "border-none w-full py-3.5 bg-transparent hover:bg-dark-bg-hover uppercase rounded-xl px-4 font-bold text-dark-text-white  text-sm"
                        }
                    >
                        {item.title}
                    </NavLink>
                ))}
                <button
                    className="border-none w-full py-3.5 bg-transparent hover:bg-dark-bg-hover uppercase rounded-xl text-left px-4 font-bold text-dark-text-white  text-sm"
                    onClick={logoutHandler}
                >
                    logout
                </button>
            </nav>
        </header>
    );
};

export default Header;
