// server/index.js

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/ping", (req, res) => {
    console.log("✅ /api/ping was hit");
    res.json({ message: "DevSync backend is up 🚀" });
  });
  

  const PORT = 5050;

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
