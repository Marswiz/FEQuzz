const { User } = require('../models');

module.exports.register = async (req, res, next) => {
    try {
        let body = req.body;
        let user = new User(body);
        await user.save();
        console.log(`register succeed.`);
        res.status(201).send(body);
    } catch (err) {
        next(err);
    }
};