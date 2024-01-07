import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import sectionReducer from "../features/section/sectionSlice";
import unitReducer from "../features/unit/unitSlice";
import quizReducer from "../features/quiz/quizSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        section: sectionReducer,
        unit: unitReducer,
        quiz: quizReducer,
    },
});
