const express = require("express");
const app = express();

//Settings
app.set("port", 3000);

app.get("/", (req, res) => {
    res.send("Este es el inicio");
});

app.get("/register", (req, res) => {
    res.send("Este es el register");
})

app.post("/login", (req, res) => {
    console.log(req.body);
    res.send("Este es el login")
})

app.listen(3000, () => {
    console.log("Server on port: ", app.get("port"));
})