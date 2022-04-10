<script setup lang="ts">
    import UserInfo from '../userInfo/UserInfo.vue';
    import {
        ref
    } from 'vue';
    import Selector from '../selector/Selector.vue';
    let selectors = [{
        tag: '类别',
        items: ['网络', 'Coding', 'Vue', '工程化'],
        selected: null,
    }, {
        tag: '题型',
        items: ['手写代码', '基础', '思维', '软技能'],
        selected: null,
    }, {
        tag: '关键词',
        items: ['算法', '网络', 'JS', 'CSS', 'HTML'],
        selected: null,
    }];
    // searchBox.
    let searchText = ref('Search text Here and press <Enter>.');
    defineEmits(['search']);
</script>

<template>
    <div class="questionWindowHeader_container">
        <div class="questionWindowHeader_selectorContainer">
            <Selector v-for="{tag, items} in selectors" :tag="tag" :items="items" :change-callback="()=>{}"></Selector>
        </div>
        <div class="questionWindowHeader_searchContainer">
            <input type="text" v-model="searchText" id="questionWindowHeader_searchBox" @keydown.enter="$emit('search', searchText)">
        </div>
        <div class="questionWindowHeader_userContainer">
            <UserInfo></UserInfo>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .questionWindowHeader_container {
        display: flex;
        padding: 10px;
        width: 100%;
    }

    .questionWindowHeader_selectorContainer {
        display: flex;
        align-items: center;
        flex: 0 0 40%;
    }

    .questionWindowHeader_searchContainer {
        display: flex;
        justify-content: stretch;
        align-items: center;
        flex: 0 0 10em;
    }

    .questionWindowHeader_userContainer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1 0 30%;
    }

    #questionWindowHeader_searchBox {
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
</style>