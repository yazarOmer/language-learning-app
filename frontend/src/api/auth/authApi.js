import axios from "axios";

const API_URL = "/api/users/";

const register = async (data) => {
    const response = await axios.post(API_URL + "register", data);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
};

const authApi = {
    register,
};

export default authApi;
