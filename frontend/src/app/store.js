import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import sectionReducer from "../features/section/sectionSlice";
import unitReducer from "../features/unit/unitSlice";
import quizReducer from "../features/quiz/quizSlice";
import actionsReducer from "../features/actions/actionsSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        section: sectionReducer,
        unit: unitReducer,
        quiz: quizReducer,
        actions: actionsReducer,
    },
});
