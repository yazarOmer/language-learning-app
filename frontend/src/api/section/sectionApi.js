import axios from "axios";

const API_URL = "/api/sections/";

const createSection = async (data) => {
    const response = await axios.post(API_URL + "create", data);

    if (response.data) {
        return response.data;
    }
};

const sectionApi = {
    createSection,
};

export default sectionApi;
