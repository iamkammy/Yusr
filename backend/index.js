const app = require("./app");
const connectToDatabase = require("./config/db");
const dotenv = require("dotenv");

// setting up config file
dotenv.config({ path: "config/config.env" });

// Connecting to Database
connectToDatabase();

// Server running
app.listen(process.env.PORT, () => {
  console.log(
    `%c Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`,
    "color:green"
  );
});
