require('dotenv').config();
const express = require('express');
const app = express();

const { version } = require('./package.json');
const { readFile } = require('./files-handler');

const PORT = process.env.PORT;


function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

app.get('/', (req, res) => {
    setTimeout(() => {
        res.status(200).send(`Welcome to my API version: ${version}`);
    }, 2500)
})

app.get('/games', (req, res) => {
    setTimeout(async () => {
        const responseData = await readFile('games.json');
        if (responseData) {
            res.status(200).send(responseData);
        } else {
            res.status(500).send("An error occured")
        }
    }, 1)
})

app.get('/games/:id', (req, res) => {
    setTimeout(async () => {
        const params = JSON.parse(JSON.stringify(req.params));

        let responseData = await readFile('games.json');
        responseData = JSON.parse(responseData);

        if (responseData) {
            res.status(200).send(responseData["games"][params.id]);
        } else {
            res.status(500).send("An error occured")
        }
    }, 1)
})

app.put('/game/:id', (req, res) => {
    setTimeout(() => {
        res.status(200).send("Updated game number: ", getRandomNumber(10, 400));
    }, 2500)
})

app.listen(PORT, () => {
    console.log("App is listening on port:", PORT)
})