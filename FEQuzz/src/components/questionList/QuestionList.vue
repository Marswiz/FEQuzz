<script setup lang="ts">
    import QuestionListItem from './QuestionListItem.vue';
    import QuestionListHeader from './QuestionListHeader.vue';
    import QuestionWindowHeader from './QuestionWindowHeader.vue';
    import {
        ref
    } from 'vue';

    // test codes.
    let lists = [{
        id: 1,
        question: '手写bind()方法',
        heat: 0,
    }, {
        id: 2,
        question: '什么是防抖和节流？',
        heat: 10,
    }, {
        id: 3,
        question: '说说CSS中的BEM规范',
        heat: 20,
    }, {
        id: 1,
        question: '手写bind()方法',
        heat: 0,
    }, {
        id: 2,
        question: '什么是防抖和节流？',
        heat: 10,
    }, {
        id: 3,
        question: '说说CSS中的BEM规范',
        heat: 20,
    }, {
        id: 1,
        question: '手写bind()方法',
        heat: 0,
    }, {
        id: 2,
        question: '什么是防抖和节流？',
        heat: 10,
    }, {
        id: 3,
        question: '说说CSS中的BEM规范',
        heat: 20,
    }, {
        id: 1,
        question: '手写bind()方法',
        heat: 0,
    }, {
        id: 2,
        question: '什么是防抖和节流？',
        heat: 10,
    }, {
        id: 3,
        question: '说说CSS中的BEM规范',
        heat: 20,
    }];
    let is = ref(true);
    const toggle = () => {
        is.value = !is.value;
    };
</script>

<template>
    <div class="questionWindow_container" id="questionWindowContainer">
        <div class="questionWindow_header" id="questionWindowHeader">
            <QuestionWindowHeader></QuestionWindowHeader>
        </div>
        <div class="questionWindow_content" id="questionWindowContent">
            <QuestionListHeader></QuestionListHeader>
            <QuestionListItem v-for="{id, question, heat} in lists" :id="id" :heat="heat" :question="question"></QuestionListItem>
        </div>
    </div>
    <div id="questionWindow_btnList">
        <button id="randomPick_btn">PICK</button>
        <button id="prevPage_btn">PREV</button>
        <button id="nextPage_btn">NEXT</button>
    </div>
</template>

<style scoped lang="scss">
    .questionWindow_container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        overflow-x: hidden;
        overflow-y: hidden;
        margin: 2vh 0;
        width: 80vw;
        max-height: 55vh;
        border: 4px solid black;
        border-radius: 20px;
        box-shadow: 3px 3px 10px gray;
    }

    .questionWindow_header {
        display: flex;
        align-items: center;
        flex: 0 0 70px;
        background-color: #888;
        border-bottom: 4px solid black;
    }

    .questionWindow_content {
        display: flex;
        overflow-y: scroll;
        flex-direction: column;
        align-items: stretch;
    }

    #questionWindow_btnList {
        align-self: flex-end;
        margin-right: 10vw;
        margin-top: 2vh;
        margin-bottom: 2vh;

        button {
            width: 50px;
            height: 50px;
            color: white;
            font-weight: bold;
            box-shadow: 0px 0px 10px gray;
            border: none;
            border-radius: 25px;
            margin-left: 20px;
            opacity: 0.8;
            background-color: #63C3D0;
            cursor: pointer;

            &:active {
                background-color: #888;
            }
        }
    }
</style>