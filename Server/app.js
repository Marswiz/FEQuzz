const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const port = 3333;

// import middlewares.
const {
    error
} = require(path.resolve(__dirname, './middlewares/error.js'));
const router = require(path.resolve(__dirname, './router'));

// main
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // parse json request body.
app.use(router); // add router middleware.
app.use((req, res) => {
    res.status(404).send(`<div style="color: #ff8c00;">Not Found.</div>`);
});
app.use(error); // error middleware. deal with error at the bottom.


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});