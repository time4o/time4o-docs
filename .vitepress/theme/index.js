import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import TaskList from '../../components/TaskList.vue';
import DocBefore from '/nb/layout/doc-before.md';


/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'doc-before': () => h(DocBefore)
        })
    },
    enhanceApp({ app }) {
        // Global components
        app.component('TaskList', TaskList)
    }
}