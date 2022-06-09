const express = require("express");
const app = express();
const port = 3600;

app.get('/', (req, res) =>{
    res.send("hello World!");
})

app.listen(port, () =>{
    console.log(`Example app listening on port $(port)`)
})