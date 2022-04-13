const express = require('express');
const router = express.Router();
const QuestionController = require('../controller/question');

// Routers.
// Hypermedia API
router.get('/', (req, res) => {
    res.status(200).json({
        "GET1": "/",
        "GET2": "/questions",
        "GET3": "/questions/:id",
        "DELETE": "/questions/:id",
        "POST": "/questions",
        "queryString": ["keywords", "page", "perPage", "type", "searchKey"],
    });
});

// get all the question lists.
// or get question by page / filter.
router.get('/questions', QuestionController.getQuestion);

// get question by id
router.get('/questions/:id', QuestionController.getQuestionById);

// delete question by id
router.delete('/questions/:id', QuestionController.deleteQuestion);

// add new question
router.post('/questions', QuestionController.addQuestion);

// modify a question existed.
router.patch('/questions/:id', QuestionController.modifyQuestion);

// get question Info.
router.get('/questionInfo', QuestionController.getQuestionInfo);

// export.
module.exports = router;