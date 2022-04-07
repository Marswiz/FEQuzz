const express = require('express');
const router = express.Router();
const {
    promisify
} = require('util');
const fs = require('fs');
const path = require('path');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

router.get('/questions', async (req, res, next) => {
    try {
        let list = await readFile(path.resolve(__dirname, '../questions.json'), 'utf8', (err, data) => {
            if (err) throw err;
            let lists = JSON.parse(data).lists;

            // 分页
            let {
                page,
                perPage
            } = req.query;
            console.log(page, perPage);
            if (page && perPage) {
                page = +page; // start from 0.
                perPage = +perPage; // [0, perpage-1]
                if (Number.isNaN(perPage) || Number.isNaN(page)) {
                    res.status(400).end(`Invalid query string: page & perpage.`);
                    next();
                }
                let startIdx = page * perPage;
                let endIdx = Math.min(startIdx + perPage, lists.length);
                if (startIdx > lists.length - 1) {
                    res.status(400).end(`Invalid query string: page number is too large.`);
                    next();
                }
                res.status(200).json({
                    "lists": lists.slice(startIdx, endIdx)
                });
                next();
                return;
            }

            // 不分页
            res.status(200).json(JSON.parse(data));
            next();
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;