import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import actionsApi from "../../api/actions/actionsApi";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    lifePoint: user ? user.lifePoint : null,
    gem: user ? user.gem : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const decreaseLifePoint = createAsyncThunk(
    "actions/decreaseLifePoint",
    async (_, thunkAPI) => {
        try {
            return await actionsApi.decreaseLifePoint();
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

export const actionsSlice = createSlice({
    name: "actions",
    initialState,
    reducers: {
        resetActions: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(decreaseLifePoint.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(decreaseLifePoint.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.lifePoint -= 1;
            })
            .addCase(decreaseLifePoint.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { resetActions } = actionsSlice.actions;
export default actionsSlice.reducer;
