import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { getAllUnits, resetUnit } from "../features/unit/unitSlice";
import UnitCard from "../components/UnitCard";
import { getAllQuizzes, resetQuiz } from "../features/quiz/quizSlice";
import Quiz from "../components/Quiz";

const Learn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { selectedSection } = useSelector((state) => state.section);

    const { units, isLoading } = useSelector((state) => state.unit);

    const { quizzes } = useSelector((state) => state.quiz);

    const sectionId = selectedSection._id;

    const fetchUnits = async (sectionId) => {
        await dispatch(getAllUnits(sectionId));
        await dispatch(resetUnit());
    };

    const fetchQuizzes = async (sectionId) => {
        await dispatch(getAllQuizzes(sectionId));
        await dispatch(resetQuiz());
    };

    useEffect(() => {
        if (user.isAdmin) {
            navigate("/admin");
        }
        fetchUnits(sectionId);
        fetchQuizzes(sectionId);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="flex-1 items-center mx-auto mt-5 flex flex-col gap-3 ">
            <div className="w-[600px] sticky top-0 bg-dark-bg flex items-center py-5 border-b-2 border-dark-border">
                <NavLink to="/sections">
                    <svg
                        className="w-6 h-6 fill-dark-border"
                        id="fi_3114883"
                        height="512"
                        viewBox="0 0 24 24"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 2"
                    >
                        <path d="m22 11h-17.586l5.293-5.293a1 1 0 1 0 -1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414l-5.293-5.293h17.586a1 1 0 0 0 0-2z"></path>
                    </svg>
                </NavLink>
                <h1 className="m-auto font-bold text-lg text-dark-border">
                    {selectedSection.name}
                </h1>
            </div>
            {units.map((unit, i) => (
                <div key={i}>
                    <UnitCard unit={unit} />
                    <div className="w-full flex flex-col  items-center">
                        {quizzes
                            .filter((quiz) => quiz.unitId == unit._id)
                            .map((q, i) => (
                                <Quiz
                                    key={q._id}
                                    quiz={q}
                                    order={i}
                                    color={unit.color}
                                />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Learn;
