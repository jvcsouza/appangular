const express = require("express");
dadosRouter = express.Router();
const banco = require("../banco");
const faker = require("faker");
faker.locale = "pt_BR";
const Users = banco.Mongoose.model('usercollection', banco.UserSchema, 'usercollection');

dadosRouter.get("/", (req, res) => res.send("Configuração de Dados!"))
dadosRouter.get("/infos/", (req, res) => {
	res.json({
		editado: true,
		data: "27/10/2018",
		hora: "04:17"
	});
})
dadosRouter.get('/userlist', function(req, res) {
	Users.find({}).lean().exec((e, docs) => {
		  res.render('userlist', { "userlist": docs });
    });
});
dadosRouter.get("/add", (req, res) => {
	const usern = faker.name.findName();
	const user = new Users({
		username: usern, 
		email: faker.internet.email(usern),
		foto: faker.image.people(128,128)
	});
	user.save((e) => {
		if(e) return handlerError(e);
		res.redirect("./userlist");
	})
})

module.exports = dadosRouter;