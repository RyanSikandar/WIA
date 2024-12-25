import axios from "axios";

const API_URL = "https://web-be-180924265462.us-central1.run.app/api/auth";
export const registerUser = async (userData) => {

    try {
        const response = await axios.post(`${API_URL}/register`, userData);

        return response.data;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    }
    catch (error) {

        console.error("error",error);
        throw error;
    }
}
