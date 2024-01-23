import React, { useState } from "react";
import QuestionInput from "../../components/QuestionInput";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
    createListening,
    resetActions,
} from "../../features/actions/actionsSlice";
import { toast } from "react-toastify";

const AddListening = () => {
    const dispatch = useDispatch();
    const [words, setWords] = useState([]);
    const [correctWord, setCorrectWord] = useState("");
    const [questionSentence, setQestionSentence] = useState("");

    const { isLoading, isError } = useSelector((state) => state.actions);

    let questionData = { questionSentence, words };

    const submitHandler = async () => {
        await dispatch(createListening(questionData));
        if (isLoading) {
            toast.success("Soru başarıyla eklendi");
        }
        if (isError) {
            toast.error("Soru eklenemedi");
        }
        await dispatch(resetActions());
        setQestionSentence("");
        setWords([]);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="w-[600px] h-screen scroll-auto flex flex-col items-center justify-center mx-auto">
            <QuestionInput
                words={words}
                questionType="touchWhatYouHear"
                correctWord={correctWord}
                correctWordHandler={setCorrectWord}
                wordsChangeHandler={setWords}
                questionSentence={questionSentence}
                questionSentenceChange={setQestionSentence}
            />

            <button
                onClick={submitHandler}
                className="btn mt-5 w-full border border-light-blue hover:bg-light-blue text-dark-text-white"
            >
                Soru Ekle
            </button>
        </div>
    );
};

export default AddListening;
