export default {
    name: `note-todo`,
    props: ['note'],
    template: `
        <section class="note-todo">
            <h1 class="label">{{ note.info.label }}</h1>
            <ul class="clean-list">
                <li v-for="todo in note.info.todos" class="flex justify-between">
                    <p class="todo-txt">{{ todo.txt }}</p>
                    <input class="isDone" type="checkbox" />
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
    methods: {},
    computed: {},
}

