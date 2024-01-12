import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz, resetQuiz } from "../features/quiz/quizSlice";
import WriteMissingWord from "../components/WriteMissingWord";
import ProgressBar from "../components/ProgressBar";
import TouchWhatYouHear from "../components/TouchWhatYouHear";

const Lesson = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const fetchQuiz = async (id) => {
        await dispatch(getQuiz(id));
        await dispatch(resetQuiz());
    };

    const { questions } = useSelector((state) => state.quiz.selectedQuiz);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetchQuiz(id);
    }, [id]);

    return (
        <div className="w-2/4 mx-auto  h-screen flex flex-col">
            <ProgressBar
                currentProgress={currentQuestion}
                fullProgress={questions.length}
            />
            {(questions[currentQuestion].questionType == "writeMissingWord" && (
                <WriteMissingWord
                    question={questions[currentQuestion]}
                    changeQuestion={setCurrentQuestion}
                    questionIndex={currentQuestion}
                    questionLength={questions.length}
                />
            )) ||
                (questions[currentQuestion].questionType ==
                    "touchWhatYouHear" && (
                    <TouchWhatYouHear
                        question={questions[currentQuestion]}
                        changeQuestion={setCurrentQuestion}
                        questionIndex={currentQuestion}
                        questionLength={questions.length}
                    />
                ))}
        </div>
    );
};

export default Lesson;
