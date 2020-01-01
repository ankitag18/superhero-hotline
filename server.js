const express = require('express');
const bodyParser = require('body-parser');
const { TELEPHONE_KEYS_DATA } = require('./constants');
const helper = require('./helper');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('telephone', { TELEPHONE_KEYS_DATA });
});

app.post('/heroRequested', (req, res) => {
    const dialedCode = req.body.code;
    const code = dialedCode.match(/[0-9]+$/)[0];
    const superhero = helper.getRequestedSuperheroName(code);

    res.status = 200;
    res.send(superhero);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started successfully on port: ${PORT}`);
})