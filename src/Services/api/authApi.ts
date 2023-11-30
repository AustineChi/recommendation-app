import axios from "axios";

const API_URL = "https://your-api-url.com"; // Replace with your actual API URL

// Function for user login
const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

// Function for user registration
const register = async (email: string, password: string, name: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      email,
      password,
      name,
    });
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};


const getUserDetails = async (userId: string) => {
    try {
        const response = await axios.get(`${API_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    login,
    register,
    getUserDetails,
};