import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sectionApi from "../../api/section/sectionApi";

const initialState = {
    sections: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const createSection = createAsyncThunk(
    "section/createSection",
    async (data, thunkAPI) => {
        try {
            return await sectionApi.createSection(data);
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

export const sectionSlice = createSlice({
    name: "section",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createSection.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createSection.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(createSection.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { reset } = sectionSlice.actions;
export default sectionSlice.reducer;
