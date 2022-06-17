//MIDDLEWARE IS A CONTROLLER (Within the paradigm of View-Controller-Model)
//A router is made to 
const routes = require('express').Router(); 

routes.get("/", (req, res) =>{
    res.send('Hello, Sarah Birch')
});

module.exports = routes;