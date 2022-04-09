import {
    Component
} from 'vue';

// ts type defiine.
type Route = {
    path: string,
    component: Component,
};

// define routes.
const routes: Route[] = [{
    path: '/:id',
    component: import('../components/questionDetails/QuestionDetail.vue'),
},{
    path: '/',
    component: import('../components/questionList/QuestionList.vue'),
}];

export {
    routes,
};