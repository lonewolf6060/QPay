const { log } = require("console");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend origin
    credentials: true, // Allow cookies and headers
  })
);

app.use(express.json());

const dbConfig = require("./config/dbConfig");
const usersRoute = require("./routes/usersRoute");

app.use("/api/users", usersRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`Server started on port: ${PORT}`);
});
