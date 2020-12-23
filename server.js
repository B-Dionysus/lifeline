const express = require("express");
const path = require("path");
const routes = require("./routes");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3001;
const app = express();

// connect to db
connectDB();
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/src/img"));
app.use(routes);
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
