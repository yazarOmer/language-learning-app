import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getQuiz, resetQuiz } from "../features/quiz/quizSlice";

const Lesson = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const fetchQuiz = async (id) => {
        await dispatch(getQuiz(id));
        await dispatch(resetQuiz());
    };

    useEffect(() => {
        fetchQuiz(id);
    }, [id]);

    return <div>{id}</div>;
};

export default Lesson;
