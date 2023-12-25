import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sectionApi from "../../api/section/sectionApi";

const sections = JSON.parse(localStorage.getItem("sections"));

const initialState = {
    sections: [],
    selectedSection: sections ? sections[0] : null,
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

export const getAllSections = createAsyncThunk(
    "section/getAllSections",
    async (_, thunkAPI) => {
        try {
            return await sectionApi.getAllSections();
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

export const getSection = createAsyncThunk(
    "section/getSection",
    async (id, thunkAPI) => {
        try {
            return await sectionApi.getSection(id);
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
        resetSection: (state) => {
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
            })
            .addCase(getAllSections.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllSections.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.sections = action.payload;
            })
            .addCase(getAllSections.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getSection.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSection.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.selectedSection = action.payload;
            })
            .addCase(getSection.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { resetSection } = sectionSlice.actions;
export default sectionSlice.reducer;
