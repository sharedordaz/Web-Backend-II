const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//#We don't want to use all our code in a file
// app.get('/', (req, res) =>{
//     res.send("hello World!");
// })


app.use('/', require('./routes')); //Instead of using the middleware (async) function inside use (as traditionally), we are using a Router

app.listen(port, () =>{
    console.log(`Example app listening on port ` + port)
})