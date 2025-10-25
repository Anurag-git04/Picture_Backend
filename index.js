const express = require("express");

const app = express();

const cors = require("cors");
const { initializeDatabase } = require("./config/connectDB");
app.use(cors());

require("dotenv").config();
const port = process.env.PORT || 3000;

initializeDatabase();

app.use(express.json());

app.use("/auth", require("./routes/authRouter"));
app.use("/api/albums", require("./routes/albumRouter"));
app.use("/api/images", require("./routes/imageRouter"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Local run (only if run directly)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
}

// Export for Vercel serverless
module.exports = app;
