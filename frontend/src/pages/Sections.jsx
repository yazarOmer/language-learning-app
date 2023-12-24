import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSections, reset } from "../features/section/sectionSlice.js";
import SectionCard from "../components/SectionCard.jsx";

const Sections = () => {
    const dispatch = useDispatch();
    const { sections, isLoading, isError, message } = useSelector(
        (state) => state.section
    );

    const fetchSections = async () => {
        await dispatch(getAllSections());
        await dispatch(reset());
    };

    useEffect(() => {
        fetchSections();
    }, []);
    return (
        <div className="w-[70%] mx-auto mt-5 flex flex-col gap-3">
            {sections.map((section, i) => (
                <SectionCard section={section} index={i} />
            ))}
        </div>
    );
};

export default Sections;
