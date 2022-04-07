module.exports.error = function (err, req, res, next) {
    console.error(`error: ${err.message}`);
    res.status(500).json(err.message);
}