import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "14bdd69ce887376edfafb09f23f78fe9";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Function to fetch trending media
export const fetchTrendingMedia = () => {
  return api.get("trending/all/day");
};

// Function to search for media
export const searchMedia = (query) => {
  return api.get("search/multi", {
    params: {
      query,
    },
  });
};

// Function to fetch details of a specific media item
export const fetchMediaDetails = (mediaType, itemId) => {
  return api.get(`${mediaType}/${itemId}`);
};

export default api;
