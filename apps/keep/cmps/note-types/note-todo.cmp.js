export default {
    name: `note-todo`,
    props: ['note'],
    template: `
        <section class="note-todo">
            <h1 class="label">{{ note.info.label }}</h1>
            <ul class="clean-list">
                <li v-for="todo in note.info.todos" class="flex justify-between">
                    <p class="todo-txt" :class="{ongoing: !todo.doneAt}">{{ todo.txt }}</p>
                    <input class="isDone" type="checkbox" @click.stop="isTodoDone(todo)" />
                </li>
            </ul>
        </section>
    `,
    components: {},
    created() { },
    data() {
        return {
            
        }
    },
    methods: {
        isTodoDone(todo) {
            console.log(`todo:`, todo)

        },
    },
    computed: {},
}

