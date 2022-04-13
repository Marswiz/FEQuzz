import { defineStore } from "pinia";
import { getQuestions } from '../api/request';

const useStore = defineStore('main', {
    // props.
    state: () => {
        return {
            isLogin: true,
            userId: 'Marswiz',
            avatar: '../../public/logo_cat.png',
            // questions filter.
            type: null,
            category: null,
            questionLists: [],
            curPage: 0, // question page.
            perPage: 20, // question perpage.
        };
    },
    // computed.
    getters: {

    },
    // methods.
    actions: {
        // question
        async changeType(val) {
            this.type = val;
            this.category = null;
            let params = {};
            if (this.type) params.type = this.type;
            if (this.category) params.searchKey = this.category;
            let listsGot = await getQuestions(params);
            this.setLists(listsGot.data);
        },
        async changeCategory(val) {
            this.category = val;
            let params = {};
            if (this.type) params.type = this.type;
            if (this.category) params.searchKey = this.category;
            let listsGot = await getQuestions(params);
            this.setLists(listsGot.data);
        },
        async resetFilter() {
            this.category = null;
            this.type = null;
            let params = {};
            let listsGot = await getQuestions(params);
            this.setLists(listsGot.data);
        },
        setLists(list: []) {
            this.questionLists.length = 0;
            for (let i of list) this.questionLists.push(i);
        }
    }
});

export {
    useStore,
};