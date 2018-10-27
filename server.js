const express = require("express");
const router = require("./routers");
const bodyParser = require("body-parser");
const cons = require("consolidate");
const PATH = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

app.engine("html", cons.swig);
app.set("view engine", "html");
app.set("views", __dirname + "/htdocs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/server/", router.serverRouter);
app.use("/dados/", router.dadosRouter);
app.use(express.static("htdocs"));
app.get('/', (req, res) => {
    res.sendFile(PATH.join(__dirname, '/htdocs/index.html'));
});

app.listen(PORT);
console.log("Servidor em Execução em: localhost:", PORT)