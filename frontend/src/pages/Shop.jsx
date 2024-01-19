import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyLifePoint, resetActions } from "../features/actions/actionsSlice";
import { toast } from "react-toastify";

const Shop = () => {
    const dispatch = useDispatch();

    const { gem } = useSelector((state) => state.actions);

    const buyItem = async () => {
        if (gem < 10) {
            toast.error("Satın almak için yeterli elmasın yok");
            return;
        } else {
            await dispatch(buyLifePoint());
            await dispatch(resetActions());
        }
    };

    return (
        <div className="flex-1 items-center mx-auto mt-5 flex flex-col gap-3">
            <h1 className="text-center text-2xl font-bold text-dark-text-white mb-5 mt-10">
                Mağaza
            </h1>

            <div className="w-[60%] p-5 flex items-center gap-2 rounded-2xl border border-dark-border hover:bg-dark-border transition">
                <div className="flex gap-2">
                    <div>
                        <img src="/heart.svg" className="w-24 h-24" alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-dark-text-white">
                            Can Satın Al (x3)
                        </h1>
                        <p className="text-base font-semibold text-dark-text-white/50 w-[75%]">
                            Derslere devam etmek için 3 yeni canın olur
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => buyItem()}
                    className="flex  text-light-blue font-bold border border-light-blue rounded-lg px-5 py-3 h-min hover:border-none hover:bg-dark-bg"
                >
                    Fiyat:{" "}
                    <img src="/gem.svg" className="h-6 w-6 ml-3" alt="" /> 10
                </button>
            </div>
        </div>
    );
};

export default Shop;
