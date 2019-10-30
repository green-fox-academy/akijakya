'use strict';

const path = require('path');
const express = require ('express');
const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', function(req, res) {   
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    if(req.query.input !== undefined){

        let resultObj = {
            "received": req.query.input,
            "result": req.query.input * 2
        }

        // res.status(200);
        // res.setHeader("Content-type", "application/json");
        res.send(resultObj);
    } else {

        let errMessage = {
            "error": "Please provide an input!"
        }
        
        // res.status(400);
        // res.setHeader("Content-type", "application/json");
        res.send(errMessage);
    }
});

app.get('/greeter', (req, res) => {
    if (req.query.name && req.query.title !== undefined) {
        let greeting = {
            welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
        }

        // res.status(200);
        // res.setHeader("Content-type", "application/json");
        res.send(greeting);
    } else if (req.query.title === undefined && req.query.name !== undefined) {
        let errMessage = {
            error: "Please provide a title!"
        }
        // res.status(400);
        // res.setHeader("Content-type", "application/json");
        res.send(errMessage);
    } else if (req.query.name === undefined && req.query.title !== undefined) {
        let errMessage = {
            error: "Please provide a name!"
        }
        // res.status(400);
        // res.setHeader("Content-type", "application/json");
        res.send(errMessage);
    } else {
        let errMessage = {
            error: "Please provide a name and a title!"
        }
        // res.status(400);
        // res.setHeader("Content-type", "application/json");
        res.send(errMessage);
    }
});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});