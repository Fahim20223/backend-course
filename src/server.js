// const express = require("express");
// const app = express();

// app.get("/hello", (req, res) => {
//   res.json({ message: "Hello World" });
// });
import express from "express";

const app = express();

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
