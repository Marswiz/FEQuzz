<script setup lang="ts">
    import SelectorDetailBox from './SelectorDetailBox.vue';
    import {
        ref
    } from 'vue';
    let selecting = ref(false);
    defineProps({
        tag: String,
        items: Array,
        selected: {
            validator: (val) => {
                return val === null || typeof val === 'string' || typeof val === 'number';
            },
        },
    });
    const toggleSelecting = function() {
        selecting.value = !selecting.value;
    };
</script>

<template>
    <div class="selector_container" @click="toggleSelecting()">
        <span class="selector_tag">
            {{ selected ? selected : tag }}
            <span class="arrow">▲</span>
        </span>
        <SelectorDetailBox v-if="selecting" :items="items"></SelectorDetailBox>
    </div>
</template>

<style lang="scss" scoped>
    .selector_container {
        position: relative;
        color: white;
        background-color: black;
        height: 1.8em;
        line-height: 1.8em;
        vertical-align: center;
        border-radius: 5px;
        margin-right: 1em;
        cursor: pointer;
        .selector_tag {
            padding: 0 0.5em;
        }
        span.arrow {
            display: inline-block;
            transform: rotate(180deg);
        }
    }
</style>