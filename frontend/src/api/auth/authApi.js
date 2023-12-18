import axios from "axios";

const API_URL = "/api/users/";

const register = async (data) => {
    const response = await axios.post(API_URL + "register", data);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
};

const login = async (data) => {
    const response = await axios.post(API_URL + "login", data);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
};

const logout = async () => {
    const response = await axios.post(API_URL + "logout");

    if (response.data) {
        localStorage.removeItem("user");
    }

    return response.data;
};

const authApi = {
    register,
    logout,
    login,
};

export default authApi;
