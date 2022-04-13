<script setup lang="ts">
    // imports.
    import SelectorDetailBox from './SelectorDetailBox.vue';
    import {
        Ref,
        ref,
    } from 'vue';

    // ts type.
    type Selected = null | string | number;

    // main.
    let selecting = ref(false); // toggle the visibility of list box.
    let props = defineProps({
        tag: String,
        items: [Array, Object],
        changeCallback: Function,
    });
    const choose = (val: Selected) => {
        if(typeof props.changeCallback === 'function') props.changeCallback(val);
    };
    const toggleSelecting = function() {
        selecting.value = !selecting.value;
    };
</script>

<template>
    <div class="selector_container" @click="toggleSelecting()">
        <span class="selector_tag">
            {{ tag }}
            <span class="arrow">▲</span>
        </span>
        <SelectorDetailBox v-if="selecting" :items="items" @choose-item="choose"></SelectorDetailBox>
    </div>
</template>

<style lang="scss" scoped>
    .selector_container {
        position: relative;
        color: white;
        z-index: 2;
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