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
        let input = req.query.input;
        let result = input * 2;

        let resultObj = {
            "received": input,
            "result": result
        }

        res.status(200);
        res.setHeader("Content-type", "application/json");
        res.send(JSON.stringify(resultObj));
    } else {
        const errMessage = {
            error: "Please provide an input!"
        }
        res.status(400);
        res.setHeader("Content-type", "application/json");
        res.send(JSON.stringify(errMessage));
    }
});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});