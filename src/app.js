const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const logger = require("./config/logger");

const routes = require("./routes/user");
require("dotenv").config();

app.use(bodyParser.json());
app.use("/api", routes);
app.use("*", (req, res, next) => {
    logger.info(req.baseUrl);
    next();
});
app.all("*", (req, res) => {
    res.status(404).send("Not Found.");
});

app.listen(process.env.PORT, () => {
    console.log(`Node.Js app listening at http://localhost:${process.env.PORT}`);
});
