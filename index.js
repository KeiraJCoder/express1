const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 80;

app.use(express.json()); // This ensures input is considered to be json

app.get("/", (req, res) => {
    res.status(200).send("Hello world");
});

app.post("/:username/", (req, res) => {
    res.status(201).json({"message": "repo created", "name": req.body.project});
});

app.get("/:username/:project", (req, res) => {
    res.status(200).send(`You requested information about ${req.params.project} created by ${req.params.username}`);
});

app.listen(port, () => {
    console.log("App is online");
});