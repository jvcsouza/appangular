const express = require("express");
serverRouter = express.Router();

serverRouter.get("/", (r, res) => res.send("Configuração de Router!"));
serverRouter.get("/msg", (req, res) => {
    res.json({message: "foi!"});
});

module.exports = serverRouter;