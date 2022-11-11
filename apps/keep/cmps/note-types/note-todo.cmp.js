export default {
    name: `note-todo`,
    props: ['note'],
    template: `
        <section class="note-todo">
            <h1 class="label">{{ note.info.label }}</h1>
            <ul class="clean-list">
                <li v-for="todo in note.info.todos" class="flex justify-between">
                    <p class="todo-txt" :class="{'isnt-done': !todo.doneAt}">{{ todo.txt }}</p>
                    <input class="isDone" :checked="isChecked(todo)" type="checkbox" @click.stop="isTodoDone(todo)" />
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
            if(!todo.doneAt) todo.doneAt = Date.now()
            else todo.doneAt = null
        },
        isChecked(todo) {
            console.log(`todo:`, todo)
            console.log(`!todo.doneAt:`, !todo.doneAt)
            if(!todo.doneAt) return false
            return true
        }
    },
    computed: {},
}

