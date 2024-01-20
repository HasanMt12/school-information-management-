const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const path = require('path');
// initialize app
const app = express();
// middleware


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',}));
app.use(morgan("dev"));

// const port = 5173;

// Serve static files from the 'uploads' folder
app.use("/uploads", (req, res, next) => {
  console.log("Received request for:", path.join("/uploads", req.url));
  next();
}, express.static("uploads"));

app.use("/api/v1", require("../routes/v1/user.route"));
app.use("/api/v1", require("../routes/v1/teacher.route"));
app.use("/api/v1", require("../routes/v1/social.route"));
app.use("/api/v1", require("../routes/v1/navbar.route"));
app.use("/api/v1", require("../routes/v1/gallery.route"));
app.use("/api/v1", require("../routes/v1/hero.route"));
app.use("/api/v1", require("../routes/v1/speech.route"));
app.use("/api/v1", require("../routes/v1/facilities.route"));
app.use("/api/v1", require("../routes/v1/insightCommunity.route"));
app.use("/api/v1", require("../routes/v1/notice.route"));
app.use("/api/v1", require("../routes/v1/resultRecord.route"));
app.use("/api/v1", require("../routes/v1/sectionHeadline.route"));
app.use("/api/v1", require("../routes/v1/event.route"));
app.use("/api/v1", require("../routes/v1/contact.route"));
app.use("/api/v1", require("../routes/v1/newsLetter.route"));
app.use("/api/v1", require("../routes/v1/video.route"));

// welcome route
app.get("/", (req, res) => {
  res.send("Server is running");
});
// invalid route
app.all("*", (req, res) => {
  res.send("Invalid route");
});
module.exports = app;
