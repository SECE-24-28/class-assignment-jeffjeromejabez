const express = require("express");
const app = express();
const router = express.Router();
const PORT = 3000;

app.use((req, res, next) => {
    req.currentTime = new Date().toISOString();
    next();
});

router.use((req, res, next) => {
    console.log("this is router middleware");
    next();
});

router.get("/data", (req, res) => {
    console.log("this is router middleware");
    res.json({ message: "Data from router" });
});

router.get("/items", (req, res) => {
    res.send({ id: 1, item: "pen", currentTime: req.currentTime });
});

router.get("/all-items", (req, res) => {
    res.send([
        { id: 1, item: "pen", currentTime: req.currentTime },
        { id: 2, item: "paper", currentTime: req.currentTime }
    ]);
});

app.use("/api/v1", router);

app.listen(PORT, () => {
    console.log("server is listening on", PORT);
});