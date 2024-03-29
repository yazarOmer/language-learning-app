import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getUnit, resetUnit } from "../features/unit/unitSlice";

const UnitCard = ({ unit }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = async (id) => {
        await dispatch(getUnit(id));
        await dispatch(resetUnit());
        navigate(`/guide/${unit._id}`);
    };

    return (
        <div
            className={`w-[600px] h-[85px] px-5 rounded-xl bg-[${unit.color}] flex items-center justify-between`}
        >
            <h1 className="text-2xl text-dark-text-title font-bold">
                {unit.name}
            </h1>

            <button
                onClick={() => handleClick(unit._id)}
                className={`px-5 py-3 flex items-center gap-2 bg-[${unit.color}] border-2 border-dark-text-white  text-dark-text-white font-bold rounded-2xl`}
            >
                <svg
                    className="w-6 h-6 fill-dark-text-white"
                    version="1.1"
                    id="fi_1545757"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    width="512"
                    height="512"
                >
                    <path d="M100.5,432h311c33.084,0,60-26.916,60-60V60c0-33.084-26.916-60-60-60h-311c-33.084,0-60,26.916-60,60v392  c0,33.084,26.916,60,60,60h291h20c33.084,0,60-26.916,60-60v-0.05c-16.725,12.583-37.506,20.05-60,20.05h-20h-291  c-11.028,0-20-8.972-20-20S89.472,432,100.5,432z M80.5,60c0-11.028,8.972-20,20-20h311c11.028,0,20,8.972,20,20v312  c0,11.028-8.972,20-20,20h-311c-7.009,0-13.742,1.208-20,3.427V60z M222.5,168.58h-40c0-20.518,8.794-40.157,24.128-53.884  c15.535-13.908,36.433-20.556,57.34-18.234c33.493,3.717,60.463,30.617,64.129,63.964c3.343,30.414-14.493,52.238-28.2,66.008  c-3.528,3.544-6.784,6.649-9.657,9.39c-13.069,12.464-14.734,14.56-14.734,23.172V260h-40v-1.005  c0-26.247,12.572-38.236,27.129-52.119c2.828-2.697,5.753-5.486,8.913-8.661c12.917-12.977,17.938-22.971,16.79-33.419  c-1.638-14.89-13.741-26.909-28.781-28.578c-9.746-1.078-19.074,1.858-26.249,8.282C226.338,150.738,222.5,159.29,222.5,168.58z   M235.5,290h40v40h-40V290z"></path>
                </svg>
                Rehber
            </button>
        </div>
    );
};

export default UnitCard;
