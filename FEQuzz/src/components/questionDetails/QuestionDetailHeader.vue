<script setup lang="ts">
    import UserInfo from '../userInfo/UserInfo.vue';
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
    <div class="questionDetailHeader_container">
        <div class="questionDetailHeader_selectorContainer">
            <div class="tag" id="id">
                <span class="selector_tag">
                    ID: <span class="info">{{ questionInfo.id }}</span>
                </span>
            </div>
            <div class="tag" id="type">
                <span class="selector_tag">
                    题型：<span class="info">{{ questionInfo.type }}</span>
                </span>
            </div>
            <div class="tag" id="heat">
                <span class="selector_tag">
                    热度：<span class="info">{{ questionInfo.heat }}</span>
                </span>
            </div>
            <div class="tag" id="keywords">
                <span class="selector_tag">
                    关键词：<span class="info" v-for="word in questionInfo.keywords" :key="word">{{ word }}&nbsp;&nbsp;</span>
                </span>
            </div>
        </div>
        <div class="questionDetailHeader_userContainer">
            <UserInfo></UserInfo>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .questionDetailHeader_container {
        display: flex;
        padding: 10px;
        width: 100%;
    }

    .questionDetailHeader_selectorContainer {
        display: flex;
        align-items: center;
        flex: 1 0 auto;
    }

    .questionDetailHeader_userContainer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1 0 30%;
    }

    #questionDetailHeader_searchBox {
        display: inline-block;
        border: 3px solid black;
        font-size: 1.2em;
        height: 30px;
        padding: 5px 10px;
        outline: none;
        border-radius: 30px;

        &::placeholder {
            content: 'search.';
        }
    }

    .tag {
        position: relative;
        color: white;
        background-color: black;
        height: 1.8em;
        line-height: 1.8em;
        vertical-align: center;
        border-radius: 5px;
        margin-right: 1em;

        .selector_tag {
            padding: 0 0.5em;

            .info {
                color: #63C3D0;
            }
        }

        span.arrow {
            display: inline-block;
            transform: rotate(180deg);
        }
    }
</style>