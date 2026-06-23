// const express = require("express");
// const app = express();

// app.get("/hello", (req, res) => {
//   res.json({ message: "Hello World" });
// });
import express from "express";

import { config } from "dotenv";

//Import Routes
import movieRoutes from "./routes/movieRoutes.js";

const app = express();

//API ROUTES

app.use("/movies", movieRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
