<script setup lang="ts">
    let questionInfo = {
        id: 124,
        type: '手写代码',
        question: '说说CSS中的BFC？它的触发条件是？',
        keywords: ['CSS', 'BFC', '基础'],
        answer: 'answer',
        heat: 10,
    };
</script>

<template>
    <div class="questionDetail_container">
        <div class="question">{{ questionInfo.question }}</div>
        <div class="middleBar"></div>
        <textarea class="typeingArea">typing... | </textarea>
    </div>
</template>

<style lang="scss">
    .questionDetail_container {
        display: flex;
        width: 80vw;
        align-items: stretch;
        min-height: calc(55vh - 70px);
        overflow-y: scroll;
        background-color: #eee;
        font-size: 1.2em;
        .question {
            flex: auto;
            padding: 10px;
            border: 1px solid black;
        }
        .middleBar {
            flex: 0 0 5px;
            background-color: black;
        }
        .typeingArea {
            color: #2c3e50;
            font-size: 20px;
            font-family: 'PingFangSC-Regular', "Microsoft Yahei", Helvetica, Arial, sans-serif;
            background-color: #eee;
            flex: 0 0 50%;
            padding: 10px;
            border: 1px solid black;
        }
    }
</style>