const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// import middlewares.
const { error } = require(path.resolve(__dirname, './middlewares/error.js'));
const router = require(path.resolve(__dirname, './middlewares/router.js'));

// main
app.use(router); // add router middleware.
app.use(error); // error middleware. deal with error at the bottom.

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});