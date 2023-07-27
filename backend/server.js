const express = require('express');
const app = express();
const helmet = require('helmet');
const fetch = require('node-fetch');
const cors = require("cors");

// Middleware
app.use(cors());
//helmet is a security package that helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())

// GET request - search Itunes Web API
app.get('/search/:query/:type', (req, res) => {
    // Gets query and type from the frontend (user input) and stores it in variables
    const query = req.params.query;
    const type = req.params.type; 
    const url = `https://itunes.apple.com/search?term=${query}&media=${type}&limit=10`;

    // Fetch the data from the url
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // Send the data back to the frontend
            res.send(data);
        })
        .catch(err => {
            // If there is an error, send it back to the frontend
            res.send(err);
        })
});

// Port number set up
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}, enjoy!`);
});