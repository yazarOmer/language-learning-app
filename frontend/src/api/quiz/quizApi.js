import axios from "axios";

const API_URL = "/api/quizzes/";

const createQuiz = async (data) => {
    const response = await axios.post(API_URL + "create", data);

    if (response.data) {
        return response.data;
    }
};

const getAllQuizzes = async (id) => {
    const response = await axios.get(API_URL + id);

    if (response.data) {
        return response.data;
    }
};

const getQuiz = async (id) => {
    const response = await axios.get(API_URL + id);

    if (response.data) {
        return response.data;
    }
};

const quizApi = {
    createQuiz,
    getAllQuizzes,
    getQuiz,
};

export default quizApi;
