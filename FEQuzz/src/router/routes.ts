import {
    Component
} from 'vue';
import QuestionDetail from '../components/questionDetails/QuestionDetail.vue';
import QuestionList from '../components/questionList/QuestionList.vue';

// ts type defiine.
type Route = {
    path: string,
    component: Component,
};

// define routes.
const routes: Route[] = [{
    path: '/:id',
    component: QuestionDetail,
},{
    path: '/',
    component: QuestionList,
}];

export {
    routes,
};