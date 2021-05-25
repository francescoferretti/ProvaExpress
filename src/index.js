const express = require('express');
var pug = require('pug');

const app = express()
const port = 3000

// Compile a function
var fn = pug.compileFile('./style/home.pug');
var local = {youAreUsingPug: true};
render();

function render()
{
    app.get('/', (req, res) => {
        res.send(fn(local));
    });

    app.get('/pino/', (req, res) => {
        res.send('ciccino');
    });

    app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    });
}