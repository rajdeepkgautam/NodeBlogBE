const express = require("express")
const dataController = require("../Controller/data");

//We are linking our data.js file with our /api main
const dataRouter = express.Router();

//creating route
dataRouter.route("/details")

//calling the data.js from Controller
.get(dataController.dataApi)

module.exports = dataRouter;