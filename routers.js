const express = require("express");
serverRouter = express.Router();
dadosRouter = express.Router();

dadosRouter.get("/", (req, res) => res.send("Configuração de Dados!"))
dadosRouter.get("/infos/", (req, res) => {
	res.json({
		editado: true,
		data: "27/10/2018",
		hora: "04:17"
	});
})
serverRouter.get("/", (r, res) => res.send("Configuração de Router!"));
serverRouter.get("/msg", (req, res) => {
    res.json({message: "foi!"});
});

module.exports = {serverRouter, dadosRouter};