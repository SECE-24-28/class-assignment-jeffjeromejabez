const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const items = [
    {
        id: 1, itemName: "Paper", price: 100,
    },
    {
        id: 2, itemName: "Ball", price: 200,
    }
];

app.get("/items", (req, res) => {
    res.json(items);
});

app.post("/add-item", (req, res) => {
    console.log(req.body);
    res.json({ message: "Item received", data: req.body });
});

app.delete("/item/:id", (req, res) => {
    const id = req.params.is;
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items.splice(index, 1);
        res.json({ message: "Item deleted", id });
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

app.put("/edit-item", (req, res) => {
    const { id, itemName, price } = req.body;
    let idFound = false;
    items.forEach((item, index) => {
        if (item.id === id) {
            items[index] = { id, itemName, price };
            idFound = true;
        }
    });
    if (idFound) {
        res.json({ message: "Item updated" });
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

app.listen(PORT, () => {
    console.log("server is listening on", PORT);
});