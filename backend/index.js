const express = require("express");
var cors = require("cors");
var app = express();

app.use(express.json());
app.use(cors());

const mainRouter = require("./routes/index");

app.use("/api/v1", mainRouter);

app.listen(3000);
