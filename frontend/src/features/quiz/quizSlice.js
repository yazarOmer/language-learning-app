import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quizApi from "../../api/quiz/quizApi";

const initialState = {
    quizzes: [],
    selectedQuiz: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const createQuiz = createAsyncThunk(
    "quiz/createQuiz",
    async (data, thunkAPI) => {
        try {
            return await quizApi.createQuiz(data);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getAllQuizzes = createAsyncThunk(
    "quiz/getAllQuizzes",
    async (sectionId, thunkAPI) => {
        try {
            return await quizApi.getAllQuizzes(sectionId);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getQuiz = createAsyncThunk(
    "quiz/getQuiz",
    async (id, thunkAPI) => {
        try {
            return await quizApi.getSection(id);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        resetQuiz: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createQuiz.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createQuiz.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(createQuiz.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getAllQuizzes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllQuizzes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.quizzes = action.payload;
            })
            .addCase(getAllQuizzes.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getQuiz.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getQuiz.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.selectedQuiz = action.payload;
            })
            .addCase(getQuiz.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
