const express = require ("express");
const app = express();
const port = 80;


//request and response
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
})

app.listen(port, () => {

    console.log("App is online");
});




