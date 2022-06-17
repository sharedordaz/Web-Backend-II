const routes = require('express').Router(); //MIDDLEWARE IS A CONTROLLER (Within the paradigm of View-Controller-Model)

routes.get("/", (req, res) =>{
    res.send('Hello, Sarah Birch')
});

module.exports = routes;