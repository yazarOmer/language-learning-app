import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import actionsApi from "../../api/actions/actionsApi";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    lifePoint: user ? user.lifePoint : 50,
    gem: user ? user.gem : 50,
    currentScore: 0,
    mistakes: [],
    listenings: [],
    leaderboard: [],
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

export const updateUserPoint = createAsyncThunk(
    "actions/updateUserPoint",
    async (score, thunkAPI) => {
        try {
            return await actionsApi.updateUserPoint(score);
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

export const appendMistake = createAsyncThunk(
    "actions/appendMistake",
    async (data, thunkAPI) => {
        try {
            return await actionsApi.appendMistake(data);
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

export const createListening = createAsyncThunk(
    "actions/createListening",
    async (questionData, thunkAPI) => {
        try {
            return await actionsApi.createListening(questionData);
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

export const getAllListenings = createAsyncThunk(
    "actions/getAllListenings",
    async (_, thunkAPI) => {
        try {
            return await actionsApi.getAllListenings();
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

export const getListeningQuiz = createAsyncThunk(
    "actions/getListeningQuiz",
    async (_, thunkAPI) => {
        try {
            return await actionsApi.getListeningQuiz();
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

export const buyLifePoint = createAsyncThunk(
    "actions/buyLifePoint",
    async (_, thunkAPI) => {
        try {
            return await actionsApi.buyLifePoint();
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

export const getUserStats = createAsyncThunk(
    "actions/getUserStats",
    async (_, thunkAPI) => {
        try {
            return await actionsApi.getUserStats();
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

export const getUsersByPoints = createAsyncThunk(
    "actions/getUsersByPoints",
    async (_, thunkAPI) => {
        try {
            return await actionsApi.getUsersByPoints();
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

export const getMistakes = createAsyncThunk(
    "actions/getMistakes",
    async (_, thunkAPI) => {
        try {
            return await actionsApi.getMistakes();
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

export const deleteMistake = createAsyncThunk(
    "actions/deleteMistake",
    async (questionId, thunkAPI) => {
        try {
            return await actionsApi.deleteMistake(questionId);
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

export const getProfile = createAsyncThunk(
    "actions/getProfile",
    async (_, thunkAPI) => {
        try {
            return await actionsApi.getProfile();
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
        resetScore: (state) => {
            state.currentScore = 0;
        },
        updateScore: (state) => {
            state.currentScore += 3;
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
            })
            .addCase(getUserStats.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserStats.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.lifePoint = action.payload.lifePoint;
                state.gem = action.payload.gem;
            })
            .addCase(getUserStats.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(updateUserPoint.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUserPoint.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.lifePoint = action.payload.lifePoint;
                state.gem = action.payload.gem;
                state.currentScore = 0;
            })
            .addCase(updateUserPoint.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getUsersByPoints.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUsersByPoints.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.leaderboard = action.payload;
            })
            .addCase(getUsersByPoints.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(buyLifePoint.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(buyLifePoint.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.gem = action.payload.gem;
                state.lifePoint = action.payload.lifePoint;
            })
            .addCase(buyLifePoint.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getMistakes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMistakes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.mistakes = action.payload;
            })
            .addCase(getMistakes.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteMistake.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteMistake.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.mistakes = state.mistakes.filter(
                    (mis) => mis._id !== action.meta.arg
                );
            })
            .addCase(deleteMistake.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(appendMistake.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(appendMistake.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(appendMistake.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(createListening.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createListening.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(createListening.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getAllListenings.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllListenings.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.listenings = action.payload;
            })
            .addCase(getAllListenings.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getListeningQuiz.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getListeningQuiz.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.listenings = action.payload;
            })
            .addCase(getListeningQuiz.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { resetActions, updateScore, resetScore } = actionsSlice.actions;
export default actionsSlice.reducer;
