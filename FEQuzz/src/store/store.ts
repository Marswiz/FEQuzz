import { defineStore } from "pinia";

const useStore = defineStore('main', {
    // props.
    state: () => {
        return {
            isLogin: true,
            userId: 'Marswiz',
            avatar: '../../public/logo_cat.png',
            questionSelector: [], 
        };
    },
    // computed.
    getters: {

    },
    // methods.
    actions: {
        
    }
});

export {
    useStore,
};