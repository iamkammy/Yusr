const express = require("express");
const cors = require("cors");

const app = express();
// Import all routes
const products = require("./routes/product");

app.use(express.json());
app.use(cors());

app.use("/api/v1", products);

module.exports = app;
