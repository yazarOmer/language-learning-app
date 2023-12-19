import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
    const { user } = useSelector((state) => state.auth);

    const userMenu = [
        { title: "Öğren", id: 1 },
        { title: "Alıştırma Yap", id: 2 },
        { title: "Puan Tabloları", id: 3 },
        { title: "Mağaza", id: 4 },
        { title: "Profil", id: 5 },
        { title: "Oturumu Kapat", id: 6 },
    ];

    const adminMenu = [
        { title: "Kısım Ekle", id: 7 },
        { title: "Ünite Ekle", id: 8 },
        { title: "Oturumu Kapat", id: 9 },
    ];

    const menu = user.isAdmin === true ? [...adminMenu] : [...userMenu];
    return (
        <header className="flex flex-col border-r-2 py-6 px-3 border-dark-border h-screen w-[250px]">
            <h1 className="font-bold text-3xl text-light-blue">LangEasy</h1>

            <nav className="mt-9 flex flex-col w-full gap-2">
                {menu.map((item) => (
                    <NavLink
                        key={item.id}
                        className="w-full py-3.5 bg-transparent hover:bg-dark-bg-hover uppercase rounded-xl px-4 font-bold text-dark-text-white border-2 border-light-blue"
                    >
                        {item.title}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};

export default Header;
