const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    throw new Error("Something went wrong!");
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
    console.log("server is listening on", port);
});