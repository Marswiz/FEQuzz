import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3333/questions',
});

type Params = {
    keywords ? : string[],
    page ? : number,
    perPage ? : number,
    type ? : string,
    searchKey ? : string,
};

export function getQuestions(params: Params = {}) {
    return request({
        method: 'GET',
        url: '/',
        params: params,
    });
}

export function getQuestionsById(id: number) {
    return request({
        method: 'GET',
        url: `/${id}`,
    });
}

export function delQuestionById(id: number) {
    request({
        method: 'DELETE',
        url: `/${id}`,
    });
}

type Question = {
    type: string,
    keywords: string[],
    question: string,
    answer: string,
};

export function addQuestion(payload: Question) {
    request({
        method: 'POST',
        url: `/`,
        data: payload,
    });
}