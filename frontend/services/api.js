import axios from "axios";

const BASE_URL = "http://localhost:5173/api";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/users`);
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/posts`);
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getComments = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/comments`);
    return data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};