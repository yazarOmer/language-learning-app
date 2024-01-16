import axios from "axios";

const API_URL = "/api/users/";

const decreaseLifePoint = async () => {
    const response = await axios.put(API_URL + "decrease-life-point");

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
};

const getUsersByPoints = async () => {
    const response = await axios.get(API_URL + "getUsersByPoints");

    if (response.data) {
        return response.data;
    }
};

const getUserStats = async () => {
    const response = await axios.get(API_URL + "getUserStats");

    if (response.data) {
        return response.data;
    }
};

const updateUserPoint = async (score) => {
    const response = await axios.put(API_URL + "updateUserPoint", score);

    if (response.data) {
        return response.data;
    }
};

const buyLifePoint = async () => {
    const response = await axios.put(API_URL + "buyLifePoint");

    if (response.data) {
        return response.data;
    }
};

const getProfile = async () => {
    const response = await axios.get(API_URL + "profile");

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
    }
};

const appendMistake = async (data) => {
    const response = await axios.put(API_URL + "appendMistake", data);

    if (response.data) {
        return response.data;
    }
};

const getMistakes = async () => {
    const response = await axios.get(API_URL + "getMistakes");

    if (response.data) {
        return response.data;
    }
};

const deleteMistake = async (questionId) => {
    const response = await axios.put(API_URL + "deleteMistake", { questionId });

    if (response.data) {
        return response.data;
    }
};

const actionsApi = {
    decreaseLifePoint,
    getUserStats,
    updateUserPoint,
    getUsersByPoints,
    buyLifePoint,
    getProfile,
    appendMistake,
    getMistakes,
    deleteMistake,
};

export default actionsApi;
