import axios from "axios";

const API_URL = "/api/units/";

const createUnit = async (data) => {
    const response = await axios.post(API_URL + "create", data);

    if (response.data) {
        return response.data;
    }
};

const getAllUnits = async (sectionId) => {
    const response = await axios.get(API_URL + "all/" + sectionId);

    if (response.data) {
        return response.data;
    }
};

const getUnit = async (unitId) => {
    const response = await axios.get(API_URL + unitId);

    if (response.data) {
        return response.data;
    }
};

const unitApi = {
    createUnit,
    getAllUnits,
    getUnit,
};

export default unitApi;
