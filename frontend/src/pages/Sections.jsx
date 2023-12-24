import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllSections,
    resetSection,
} from "../features/section/sectionSlice.js";
import SectionCard from "../components/SectionCard.jsx";
import { useNavigate } from "react-router-dom";

const Sections = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user.isAdmin) {
            navigate("/admin");
        }
    }, []);

    const { sections, isLoading, isError, message } = useSelector(
        (state) => state.section
    );

    const fetchSections = async () => {
        await dispatch(getAllSections());
        await dispatch(resetSection());
    };

    useEffect(() => {
        fetchSections();
    }, []);
    return (
        <div className="w-[60%] mx-auto mt-5 flex flex-col gap-3">
            {sections.map((section, i) => (
                <SectionCard section={section} index={i} />
            ))}
        </div>
    );
};

export default Sections;
