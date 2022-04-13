const express = require('express');
const router = express.Router();

// import sub router.
const questionRouter = require('./question');
const userRouter = require('./user');

// use router.
router.use(questionRouter);
router.use(userRouter);

module.exports = router;