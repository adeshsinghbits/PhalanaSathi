const locationService = require("./location.service");
const sendResponse = require("../../utils/response");

const autocomplete = async (req, res, next) => {
  try {
    const { q } = req.query;

    if (!q || q.length < 3) {
      return sendResponse(res, 400, "Query must be at least 3 characters");
    }

    const data = await locationService.autocompleteLocation(q);

    return sendResponse(res, 200, "Success", data);
  } catch (error) {
    next(error);
  }
};

const reverse = async (req, res, next) => {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      return sendResponse(res, 400, "Latitude and longitude required");
    }

    const data = await locationService.reverseGeocode(lat, lon);

    return sendResponse(res, 200, "Success", data);
  } catch (error) {
    next(error);
  }
};

const route = async (req, res, next) => {
  try {
    const { waypoints } = req.body;

    if (!waypoints || waypoints.length < 2) {
      return sendResponse(res, 400, "Minimum 2 waypoints required");
    }

    const data = await locationService.calculateRoute(waypoints);

    return sendResponse(res, 200, "Route calculated", data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  autocomplete,
  reverse,
  route,
};