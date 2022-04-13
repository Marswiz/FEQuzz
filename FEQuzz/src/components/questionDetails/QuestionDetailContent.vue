<script setup lang="ts">
    defineProps({
        question: Object,
    });
</script>

<template>
    <div class="questionDetail_container">
        <div class="question">
            <p id="questionTitle">{{ question.title }}</p>
            <p id="questionContent">{{ question.question }}</p>
        </div>
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
        font-size: 1.1em;

        .question {
            flex: auto;
            padding-left: 10px;
            border: 1px solid black;
            #questionTitle {
                font-weight: bold;
            }
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
            caret-color: #63c3d0;
        }
    }
</style>