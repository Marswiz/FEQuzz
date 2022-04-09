<script setup lang="ts">
    defineEmits(['chooseItem']);
    defineProps({
        items: Array,
        selected: String,
    });
</script>

<template>
    <div class="selectorDetail_container">
        <p v-for="item in items" @click="$emit('chooseItem', item)">{{ item }}</p>
    </div>
</template>

<style lang="scss" scoped>
    .selectorDetail_container {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 2em;
        z-index: 2;
        border-radius: 5px;
        width: 100px;
        border: 3px solid black;

        p {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            margin: 0;

            &:hover {
                background-color: #63C3D0;
            }
        }
    }
</style>