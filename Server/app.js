const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.cookie('id','123');
    res.send({
        name: 'Marswiz',
        age: 19,
    });
    console.log(req.cookies);
});
app.post('/', (req, res) => {
    res.send(`post request detected.`);
});
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000/`);
});