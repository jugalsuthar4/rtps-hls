const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

app.use("/hls", express.static(path.join(__dirname, "output")));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`HLS Server running at http://localhost:${PORT}/hls/index.m3u8`);
});
