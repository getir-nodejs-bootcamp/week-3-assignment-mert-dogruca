const express = require("express");
const app = express();
const routes = require("./api/routes/user");
require("dotenv").config();

app.use("/", routes);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
