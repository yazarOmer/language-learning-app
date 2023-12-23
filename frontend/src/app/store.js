import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import sectionReducer from "../features/section/sectionSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        section: sectionReducer,
    },
});
