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
dadosRouter.get('/userlist', function(req, res) {
	var db = require("./db");
	var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
	Users.find({}).lean().exec(
	   function (e, docs) {
		  res.render('userlist', { "userlist": docs });
	});
  });

module.exports = {serverRouter, dadosRouter};