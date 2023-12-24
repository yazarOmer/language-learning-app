import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import unitApi from "../../api/unit/unitApi";

const initialState = {
    units: [],
    selectedUnit: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const createUnit = createAsyncThunk(
    "unit/createUnit",
    async (data, thunkAPI) => {
        try {
            return await unitApi.createUnit(data);
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

export const getAllUnits = createAsyncThunk(
    "unit/getAllUnits",
    async (_, thunkAPI) => {
        try {
            return await unitApi.getAllUnits();
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

export const unitSlice = createSlice({
    name: "unit",
    initialState,
    reducers: {
        resetUnit: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = "";
        },
        setSelectedUnit: (state, action) => {
            state.selectedUnit = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUnit.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createUnit.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.units.push(action.payload);
            })
            .addCase(createUnit.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getAllUnits.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllUnits.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.units = action.payload;
            })
            .addCase(getAllUnits.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { resetUnit, setSelectedUnit } = unitSlice.actions;
export default unitSlice.reducer;
