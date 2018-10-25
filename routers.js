const express = require("express");
serverRouter = express.Router();

serverRouter.get("/msg/", (req, res) => {
    res.json({message: "foi!"});
});

module.exports = {serverRouter};