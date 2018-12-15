const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// API calls
app.get('/', (req, res) => {
    res.send("testsing" );
});
app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});
app.use(express.static(path.join(__dirname, 'public')));

app.get('/spinner', function(req, res) {
    res.sendFile(path.join(__dirname + '/MainSpinner.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));