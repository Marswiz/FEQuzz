import axios from 'axios';
import { useStore } from '../store/store';

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
    return request({
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
    return request({
        method: 'POST',
        url: `/`,
        data: payload,
    });
}

export function getInfo() {
    return request({
        method: 'GET',
        url: `../questionInfo`,
    });
}