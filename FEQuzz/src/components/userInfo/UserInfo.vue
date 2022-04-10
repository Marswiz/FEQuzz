<script lang="ts" setup>
    import {
        useStore,
    } from '../../store/store';
    let store = useStore();
</script>

<template>
    <div class="userInfo_container" id="userInfoContainer">
        <div id="userInfoBox" class="userInfo_Box">
            <div id="userName" class="userInfo_username">{{ store.userId }}</div>
            <div id="logout" class="userInfo_logoutBtn">Logout</div>
        </div>
        <img id="userInfoAvatar" class="userInfo_avatar" :src="store.avatar" alt="avatar">
    </div>
</template>

<style lang="scss" scoped>
    .userInfo_container {
        display: flex;
        justify-content: flex-end;
        align-items: stretch;
        width: 200px;
        height: 100%;
    }

    .userInfo_avatar {
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }

    .userInfo_Box {
        width: 20ch;
        text-align: right;
        padding-right: 10px;

        .userInfo_logoutBtn {
            color: white;
            cursor: pointer;

            &:hover {
                color: #63C3D0;
            }
        }
    }
</style>