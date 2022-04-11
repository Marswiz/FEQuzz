import { defineStore } from "pinia";

const useStore = defineStore('main', {
    // props.
    state: () => {
        return {
            isLogin: true,
            userId: 'Marswiz',
            avatar: '../../public/logo_cat.png',
            // questions filter.
            questionSelector: {
                type: null,
                category: null,
            },
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
        changeType(val) {
            this.questionSelector.type = val;
        },
        changeCategory(val) {
            this.questionSelector.category = val;
        }
    }
});

export {
    useStore,
};