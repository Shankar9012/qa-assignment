const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

const calculator = require('./src/service/calculator');

app.post('/add', (req, res) => {
    try {
        const { a, b } = req.body;
        res.json({ result: calculator.add(a, b).toString() });
    } catch(e) {
        res.json({ result: e.message });
    }
});

app.post('/devide', (req, res) => {
    const { a, b } = req.body;
    try {
        res.json({ result: calculator.divide(a, b).toString() });
    } catch(e) {
        res.json({ result: e.message });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

module.exports = app;