const express = require("express");
const router = express.Router();
const controller = require("./location.controller");
const rateLimit = require("../../middlewares/rateLimit.middleware");

router.get("/autocomplete", rateLimit, controller.autocomplete);
router.get("/reverse", rateLimit, controller.reverse);
router.post("/route", rateLimit, controller.route);

module.exports = router;