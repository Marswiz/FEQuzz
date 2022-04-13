<script setup lang="ts">
    import {
        useStore
    } from '../../store/store';
    import UserInfo from '../userInfo/UserInfo.vue';
    import {
        onMounted,
        reactive,
        ref,
    } from 'vue';
    import Selector from '../selector/Selector.vue';
    import {
        getInfo
    } from '../../api/request';

    // searchBox.
    let searchText = ref('Search text Here and press <Enter>.');
    defineEmits(['search']);

    // get question info.
    let info = reactive({});
    onMounted(async () => {
        let infoGet = await getInfo();
        for (let k of Reflect.ownKeys(infoGet.data)) {
            info[k] = infoGet.data[k];
        }
    });

    // pinia
    let store = useStore();
</script>

<template>
    <div class="questionWindowHeader_container">
        <div class="questionWindowHeader_selectorContainer">
            <Selector :tag="store.type === null ? '题型' : store.type" :items="Object.keys(info)" :change-callback="store.changeType"></Selector>
            <Selector :tag="store.category === null ? '类型' : store.category" :items="store.type === null ? [] : info[store.type]" :change-callback="store.changeCategory"></Selector>
            <button id="reset_btn" @click="store.resetFilter">Reset</button>
        </div>
        <div class="questionWindowHeader_searchContainer">
            <input type="text" v-model="searchText" id="questionWindowHeader_searchBox" @click="()=>{searchText = ''}" @keydown.enter="$emit('search', searchText)">
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
        padding-left: 1em;

        #reset_btn {
            border: none;
            background-color: transparent;
            font-weight: bold;
            font-size: 1.2em;
            cursor: pointer;

            &:hover {
                color: #63c3d0;
            }
        }
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