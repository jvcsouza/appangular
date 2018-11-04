const express = require("express");
const router = require("./routers/routers");
const bodyParser = require("body-parser");
const cons = require("consolidate");
const PORT = process.env.PORT || 5000;
const app = express();

app.engine("html", require("ejs").renderFile); //cons.swig
app.set("view engine", "ejs");
app.set("views", __dirname + "/public");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/server/", router.serverRouter);
app.use("/dados/", router.dadosRouter);
app.use(express.static("public"));
app.get('/', (req, res) => {
    res.render("index");
});

app.listen(PORT);
console.log("Servidor em Execução em: localhost:", PORT)