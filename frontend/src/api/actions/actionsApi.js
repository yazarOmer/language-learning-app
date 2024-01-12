import axios from "axios";

const API_URL = "/api/users/";

const decreaseLifePoint = async () => {
    const response = await axios.put(API_URL + "decrease-life-point");

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
};

const getUserStats = async () => {
    const response = await axios.get(API_URL + "getUserStats");

    if (response.data) {
        return response.data;
    }
};

const actionsApi = {
    decreaseLifePoint,
    getUserStats,
};

export default actionsApi;
