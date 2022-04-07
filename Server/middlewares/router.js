const express = require('express');
const router = express.Router();
const {
    promisify
} = require('util');
const fs = require('fs');
const path = require('path');
const {
    json
} = require('express');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const listsPath = path.resolve(__dirname, '../questions.json');
const splitSym = '|';

// getQuestions from questions.json
const getQuestions = async () => {
    let res = await readFile(listsPath, 'utf8');
    return JSON.parse(res);
};
// getList from questions.json.
const getLists = async () => {
    let res = await getQuestions();
    return res.lists;
}

// Routers.
// Hypermedia API
router.get('/', (req, res) => {
    res.status(200).json({
        "GET1": "/",
        "GET2": "/questions",
        "GET3": "/questions/:id",
        "DELETE": "/questions/:id",
        "POST": "/questions",
        "queryString": ["keywords", "page", "perPage", "type"],
    });
});

// get all the question lists.
router.get('/questions', async (req, res, next) => {
    try {
        let lists = await getLists();
        // 过滤
        if (req.query.type) lists = lists.filter(i => i.type === req.query.type);
        if (req.query.keywords) {
            let kws = decodeURIComponent(req.query.keywords).trim().split(splitSym).map(i => i.trim());
            kws = new Set(kws);
            lists = lists.filter(i => {
                for (let j of i.keywords) {
                    if (kws.has(j)) return true;
                }
                return false;
            });
        }
        // 分页
        let {
            page,
            perPage
        } = req.query;
        if (page && perPage) {
            page = +page; // start from 0.
            perPage = +perPage; // [0, perpage-1]
            if (Number.isNaN(perPage) || Number.isNaN(page)) {
                res.status(400).end(`Invalid query string: page & perpage.`);
            }
            let startIdx = page * perPage;
            let endIdx = Math.min(startIdx + perPage, lists.length);
            if (startIdx > lists.length - 1) {
                res.status(400).end(`Invalid query string: page number is too large.`);
            }
            res.status(200).json({
                "lists": lists.slice(startIdx, endIdx)
            });
            return;
        }

        // 不分页
        res.status(200).json(lists);
    } catch (err) {
        next(err);
    }
});

// get question by id
router.get('/questions/:id', async (req, res, next) => {
    try {
        let lists = await getLists();
        let found = false;
        for (let i of lists) {
            if (i.id === +req.params.id) {
                res.status(200).json(i);
                found = true;
                break;
            }
        }
        if (!found) throw new Error('question id not found.');
    } catch (err) {
        next(err);
    }
});

// delete question by id
router.delete('/questions/:id', async (req, res, next) => {
    try {
        let questions = await getQuestions();
        let found = false;
        for (let i = 0; i < questions.lists.length; i++) {
            if (questions.lists[i].id === +req.params.id) {
                questions.lists.splice(i, 1);
                found = true;
                await writeFile(listsPath, JSON.stringify(questions, null, 2));
                res.status(200).send(`Question ${req.params.id} is deleted.`);
                break;
            }
        }
        if (!found) throw new Error('Delete fails. Question id not found.');
    } catch (err) {
        next(err);
    }
});

// add new question
router.post('/questions', async (req, res, next) => {
    try {
        let {
            type,
            keywords,
            question,
            answer,
        } = req.body;
        if (!question || !answer) throw new Error(`field: question & answer is required.`);
        let questions = await getQuestions();
        let lists = questions.lists;
        let curId = lists[lists.length - 1].id + 1;
        lists.push({
            id: curId,
            question,
            answer,
            type: type ? type : 'basic',
            keywords: keywords ? keywords : [],
        });
        await writeFile(listsPath, JSON.stringify(questions, null, 2));
        res.status(200).json(lists[lists.length - 1]);
    } catch (err) {
        next(err);
    }
});

// modify a question existed.
router.patch('/questions/:id', async (req, res, next) => {
    try {
        let {
            type,
            keywords,
            question,
            answer,
        } = req.body;
        let found = false;
        if (!question || !answer) throw new Error(`field: question & answer is required.`);
        let questions = await getQuestions();
        let lists = questions.lists;
        for (let i of lists) {
            if (i.id === +req.params.id) {
                found = true;
                if (type) i.type = type;
                if (keywords) i.keywords = keywords;
                i.question = question;
                i.answer = answer;
                res.status(200).json(i);
                break;
            }
        }
        if (found) await writeFile(listsPath, JSON.stringify(questions, null, 2));
        else throw new Error(`No such question ID found.`);
    } catch (err) {
        next(err);
    }
});

module.exports = router;