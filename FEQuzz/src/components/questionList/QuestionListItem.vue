<script setup lang="ts">
    import {
        useRouter
    } from 'vue-router';
    const router = useRouter();
    defineProps({
        id: Number,
        title: String,
        heat: Number,
    });
    const go = (id: number | undefined) => {
        router.push(`/${id}`);
    };
</script>

<template>
    <div class="questionListItem_container" @click="go(id)">
        <div class="questionListItem_id">{{id}}</div>
        <div class="questionListItem_question">{{title}}</div>
        <div class="questionListItem_heat">{{heat}}</div>
    </div>
</template>

<style lang="scss">
    .questionListItem_container {
        display: flex;
        width: 100%;
        height: 5vh;

        div {
            line-height: 5vh;
            vertical-align: center;
            text-align: center;
        }

        &:hover {
            color: #63C3D0;
            cursor: pointer;
            font-size: 1.2em;
            border-top: 3px dashed black;
            border-bottom: 3px dashed black;
        }

        &:active {
            color: #ff8c00;
        }
    }

    .questionListItem_container:nth-child(even) {
        background-color: #eee;
    }

    .questionListItem_container:nth-child(odd) {
        background-color: #fff;
    }

    .questionListItem_id {
        flex: 0 0 10%;
    }

    .questionListItem_question {
        flex: 0 0 80%;
    }

    .questionListItem_heat {
        flex: 0 0 10%;
    }
</style>