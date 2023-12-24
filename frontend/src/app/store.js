import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import sectionReducer from "../features/section/sectionSlice";
import unitReducer from "../features/unit/unitSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        section: sectionReducer,
        unit: unitReducer,
    },
});
