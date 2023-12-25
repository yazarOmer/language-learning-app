import axios from "axios";

const API_URL = "/api/sections/";

const createSection = async (data) => {
    const response = await axios.post(API_URL + "create", data);

    if (response.data) {
        return response.data;
    }
};

const getAllSections = async () => {
    const response = await axios.get(API_URL + "all");

    if (response.data) {
        localStorage.setItem("sections", JSON.stringify(response.data));

        return response.data;
    }
};

const getSection = async (id) => {
    const response = await axios.get(API_URL + id);

    if (response.data) {
        return response.data;
    }
};

const sectionApi = {
    createSection,
    getAllSections,
    getSection,
};

export default sectionApi;
