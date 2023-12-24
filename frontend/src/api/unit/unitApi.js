import axios from "axios";

const API_URL = "/api/units/";

const createUnit = async (data) => {
    const response = await axios.post(API_URL + "create", data);

    if (response.data) {
        return response.data;
    }
};

const getAllUnits = async () => {
    const response = await axios.get(API_URL + "all");

    if (response.data) {
        return response.data;
    }
};

const unitApi = {
    createUnit,
    getAllUnits,
};

export default unitApi;
