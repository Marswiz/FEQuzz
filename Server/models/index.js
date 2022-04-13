const mongoose = require("mongoose");
const mongoDBPath = 'mongodb+srv://marswiz:450313c%2B%2B@cluster0.flr4s.mongodb.net/FEQuzz_Users?retryWrites=true&w=majority';

try {
    (async () => {
        await mongoose.connect(mongoDBPath);
    })();
} catch (err) {
    console.log(err.stack);
}

module.exports = {
    User: mongoose.connection.model('User', require('./user.js')), 
};