const axios = require("axios");
const env = require("../../config/env");

const BASE_URL = "https://api.geoapify.com/v1";

const autocompleteLocation = async (query) => {
  const response = await axios.get(`${BASE_URL}/geocode/autocomplete`, {
    params: {
      text: query,
      limit: 5,
      apiKey: env.GEOAPIFY_KEY,
    },
  });

  return response.data;
};

const reverseGeocode = async (lat, lon) => {
  const response = await axios.get(`${BASE_URL}/geocode/reverse`, {
    params: {
      lat,
      lon,
      apiKey: env.GEOAPIFY_KEY,
    },
  });

  return response.data;
};

const calculateRoute = async (waypoints) => {
  const response = await axios.post(
    `${BASE_URL}/routing`,
    {
      mode: "drive",
      waypoints,
    },
    {
      params: {
        apiKey: env.GEOAPIFY_KEY,
      },
    }
  );

  return response.data;
};

module.exports = {
  autocompleteLocation,
  reverseGeocode,
  calculateRoute,
};