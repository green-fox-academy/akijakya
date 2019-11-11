'use strict';

const path = require('path');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('assets'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    if (req.query.input !== undefined) {

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
        res.send(greeting);
    } else if (req.query.title === undefined && req.query.name !== undefined) {
        let errMessage = {
            error: "Please provide a title!"
        }
        res.send(errMessage);
    } else if (req.query.name === undefined && req.query.title !== undefined) {
        let errMessage = {
            error: "Please provide a name!"
        }
        res.send(errMessage);
    } else {
        let errMessage = {
            error: "Please provide a name and a title!"
        }
        res.send(errMessage);
    }
});

app.get('/appenda', (req, res) => {  
    res.status(404);
    res.send(404);
});

app.get('/appenda/:appendable', (req, res) => {
    if (req.params.appendable !== undefined) {
        let resultObj = {
            "appended": req.params.appendable + 'a'
        }
        res.send(resultObj);
    }
});

app.post('/dountil/:action', urlencodedParser, (req, res) => {
    if (req.params.action === "sum") {
        let sum = 0;
        for (let i = 0; i < req.body.until + 1; i++) {
            sum += i;
        }

        let resultObj = {
            "result": sum
        }

        res.send(resultObj);
    } else if (req.params.action === "factor") {
        let factorial = 1;
        for (let i = 1; i < req.body.until + 1; i++) {
            factorial *= i;
        }

        let resultObj = {
            "result": factorial
        }

        res.send(resultObj);
    } else {
        let errMessage = {
            "error": "Please provide a number!"
        }
        res.send(errMessage);
    }
});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});