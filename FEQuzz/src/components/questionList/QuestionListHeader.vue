<script setup></script>

<template>
    <div class="questionListHeader_container">
        <div class="questionListHeader_id">ID</div>
        <div class="questionListHeader_question">题目</div>
        <div class="questionListHeader_heat">热度</div>
    </div>
</template>

<style lang="scss" scoped>
    .questionListHeader_container {
        display: flex;
        position: sticky;
        top: 0;
        background-color: white;
        width: 100%;
        height: 5vh;
        font-weight: bold;
        color: #63C3D0;

        div {
            line-height: 5vh;
            vertical-align: center;
            text-align: center;
        }
    }

    .questionListHeader_id {
        flex: 0 0 10%;
    }

    .questionListHeader_question {
        flex: 0 0 80%;
    }

    .questionListHeader_heat {
        flex: 0 0 10%;
    }
</style>