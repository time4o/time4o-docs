<script setup>

import { data } from '/nb/tasks.data.js';

const props = defineProps({
    category: String|Array
})

// Wrap string as array


const tasks = function () {
    if (props.category === undefined) return data;

    const categories = Array.isArray(props.category) ? props.category : [props.category];
    return data.filter((item) => categories.includes(item.frontmatter.category) );
}


</script>

<template>

    <template v-for="task of tasks()">

        <h3>
            <a :href="task.url">{{ task.frontmatter.title }}</a>
            <template v-if="task.frontmatter.job"> ({{ task.frontmatter.job }})</template>
        </h3>

        <p>{{ task.frontmatter.description }}</p>


    </template>

</template>

<style scoped>

</style>