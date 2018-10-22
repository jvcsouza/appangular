const express = require("express");
const bodyParser = require("body-parser");
const cons = require("consolidate");
const PATH = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

router = express.Router();
app.engine("html", cons.swig);
app.set("view engine", "html");
app.set("views", __dirname+"/htdocs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
router.get("/server/msg/", (req, res) => res.json({message: "foi!"}));
app.use("/server/", router);
app.get('/', (req, res) => {
    res.sendFile(PATH.join(__dirname , '/htdocs/index.html'));
  });
app.listen(PORT);