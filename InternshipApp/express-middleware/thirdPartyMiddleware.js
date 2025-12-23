const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 4000;

app.use(morgan("dev"));

app.get("/data", (req, res) => {
    res.send("This is Third party middleware");
});

app.listen(PORT, () => {
    console.log("server is listening on", PORT);
});