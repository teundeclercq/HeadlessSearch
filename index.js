const express = require('express');
const puppeteer = require('puppeteer');
const searchGoogle = require("./searchGoogle");
const app = express();
const port = 3000;

app.get('/search', (req,res) => {
   const searchQuery = req.query.searchquery;

    if (searchQuery != null) {
        searchGoogle(searchQuery)
            .then(results => {
                res.status(200);
                res.json(results);
            });
    } else {
        res.end();
    }
});

app.get('/', (req, res) => res.send('hello'));

app.listen(port, () => console.log('running the server.'))

